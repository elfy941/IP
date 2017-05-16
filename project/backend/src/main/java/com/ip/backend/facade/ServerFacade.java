package com.ip.backend.facade;

import com.ip.backend.model.Employee;
import com.ip.backend.model.Hotel;
import com.ip.backend.model.Room;
import com.ip.backend.model.User;
import com.ip.backend.services.EmployeeService;
import com.ip.backend.services.HotelService;
import com.ip.backend.services.RoomService;
import com.ip.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

/**
    Service layers , it will provide additional bussiness logic
 */
@Service
public class ServerFacade {

    @Autowired
    private EmployeeService employeeService;
    @Autowired
    private RoomService roomService;
    @Autowired
    private HotelService hotelService;
    @Autowired
    private UserService userService;

    public Collection<Employee> findAllEmployees(){
        return employeeService.findAll();
    }

    public Collection<Room> findAllRooms(){
        return roomService.findAll();
    }

    public Collection<Hotel> findAllHotels(){
        return hotelService.findAll();
    }

    public Collection<User> findAllUsers(){
        return userService.findAll();
    }

    public Employee addEmployeeToUser(Employee employee,Long userId) {
//        Employee emp = employeeService.create(employee);
//
        User user = userService.findById(userId);
//
//        user.getEmps().add(emp);
//        emp.setUser(user);

        employee.setUser(user);
        Employee employee1 = employeeService.create(employee);

        return employee1;

    }

    //set current user
    public void setCurrentUser(User u){
        userService.setCurrentUser(u);
    }

    public User getCurrentUser(){
        return userService.getCurrentUser();
    }


    public Room addRoomToHotel(Room room,Long id){


        Hotel hotel = hotelService.findById(id);
        room.setHotel(hotel);

        Room r = roomService.create(room);

        return r;
    }


    public User addUser(User u){
       return userService.createUser(u);
    }


    /*
        Create hotel entity and add it to user entity
        @not working
     */
    public Hotel addHotelToUser(Hotel h,Long id){
        User user = userService.findById(id);

        h.setUser(user);
        Hotel hotel = hotelService.create(h);

        return hotel;

    }


    public Room bookRoom(Long id){

        Room r = roomService.findById(id);

        r.setAvailable(false);

        roomService.update(r);
        return r;



    }



}
