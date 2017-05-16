package com.ip.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.*;

/**
 * Created by VictorMachita on 5/13/2017.
 */
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "FIRST_NAME")
    private String firstName;

    @NotNull
    @Column(name = "LAST_NAME")
    private String lastName;

    @NotNull
    @Column(name = "EMAIL")
    private String email;

    @NotNull
    @Column(name = "ROLE")
    private String role;

    @NotNull
    @Column(name = "PASSWORD")
    private String password;

    @OneToMany(mappedBy = "user" ,fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JsonManagedReference
    private Collection<Hotel> hotels = new ArrayList<>();

    @OneToMany(mappedBy = "user" ,fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JsonManagedReference
    private Collection<Employee> emps = new ArrayList<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Collection<Hotel> getHotels() {
        return hotels;
    }

    public void setHotels(ArrayList<Hotel> hotels) {
        this.hotels = hotels;
        hotels.forEach(hotel -> hotel.setUser(this));
    }

    public Collection<Employee> getEmps() {
        return emps;
    }

    public void setEmps(ArrayList<Employee> emps) {
        this.emps = emps;
        Iterator<Employee> it = emps.iterator();
        while(it.hasNext()){
            it.next().setUser(this);
        }
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", role='" + role + '\'' +
                ", password='" + password + '\'' +
                ", hotels=" + hotels +
                ", emps=" + emps +
                '}';
    }
}
