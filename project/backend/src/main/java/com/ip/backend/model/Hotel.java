package com.ip.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by VictorMachita on 5/13/2017.
 */
@Entity
public class Hotel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long hotelId;

    @Column(name = "NAME")
    private String name;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "NR_ROOMS")
    private Long nrRooms;

    @Column(name = "LOCATION")
    private String location;

    @OneToMany(mappedBy = "hotel"  , fetch = FetchType.LAZY , cascade = CascadeType.ALL)
    @JsonManagedReference
    private Set<Room> rooms = new HashSet<>();

    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    @JsonBackReference
    private User user;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
        user.getHotels().add(this);
    }

    public Hotel() {
    }

    public Long getHotelId() {
        return hotelId;
    }

    public void setHotelId(Long hotelId) {
        this.hotelId = hotelId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getNrRooms() {
        return nrRooms;
    }

    public void setNrRooms(Long nrRooms) {
        this.nrRooms = nrRooms;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Set<Room> getRooms() {
        return rooms;
    }

    public void setRooms(Set<Room> rooms) {
        this.rooms = rooms;
        rooms.forEach(room -> room.setHotel(this));
    }

    @Override
    public String toString() {
        return "Hotel{" +
                "hotelId=" + hotelId +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", nrRooms=" + nrRooms +
                ", location='" + location + '\'' +
                ", rooms=" + rooms +
                ", userId=" + user +
                '}';
    }
}
