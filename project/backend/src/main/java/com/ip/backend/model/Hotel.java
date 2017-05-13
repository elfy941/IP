package com.ip.backend.model;

import javax.persistence.*;
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

    @OneToMany(mappedBy = "hotel" , cascade = CascadeType.ALL)
    private Set<Room> rooms;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User userId;

    public User getUser() {
        return userId;
    }

    public void setUser(User user) {
        this.userId = user;
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
    }
}
