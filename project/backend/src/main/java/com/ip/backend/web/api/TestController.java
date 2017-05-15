package com.ip.backend.web.api;

import com.ip.backend.facade.ServerFacade;
import com.ip.backend.model.Employee;
import com.ip.backend.model.Hotel;
import com.ip.backend.model.Room;
import com.ip.backend.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

/**
 * Created by VictorMachita on 5/13/2017.
 */
@RestController
public class TestController {

      @Autowired
      private ServerFacade serverFacade;

    //@formatter:off
    //get all emp
    @RequestMapping(
            value = "/api/emps",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Collection<Employee>> getEmployees(){
        return new ResponseEntity<Collection<Employee>>(serverFacade.findAllEmployees(), HttpStatus.OK);
    }

    /*
        Create an employee based on a Json input , and a path variable
            provide json data for employee entity
                and
            id for user to witch the employee will belong
     */
    @RequestMapping(
            value = "/api/emps/{id}",
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Employee> createEmployee(@RequestBody Employee emp,@PathVariable Long id){
        Employee savedEmployee = serverFacade.addEmployeeToUser(emp,id);

        return new ResponseEntity<Employee>(savedEmployee,HttpStatus.CREATED);
    }

    /*
        Create room based on Json representation of room entity and id
            to witch the employee will belong

     */
    @RequestMapping(
            value = "/api/rooms/{id}",
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Room> createRoom(@RequestBody Room r , @PathVariable Long id){
        Room savedRoom = serverFacade.addRoomToHotel(r,id);
        return new ResponseEntity<Room>(savedRoom,HttpStatus.CREATED);
    }

    //set current user @not-working
    @RequestMapping(
            value = "/api/current",
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<User> setCurrentUser(@RequestBody User u){
        serverFacade.setCurrentUser(u);
        return new ResponseEntity<User>(HttpStatus.OK);
    }


    //get all rooms
    @RequestMapping(
            value = "/api/rooms",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Collection<Room>> getRooms(){
        return new ResponseEntity<Collection<Room>>(serverFacade.findAllRooms(),HttpStatus.OK);
    }

    //get all hotels
    @RequestMapping(
            value = "/api/hotels",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Collection<Hotel>> getHotels(){
        return new ResponseEntity<Collection<Hotel>>(serverFacade.findAllHotels(),HttpStatus.OK);
    }

    //get all users
    @RequestMapping(
            value = "/api/users",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Collection<User>>getUsers(){
        return new ResponseEntity<Collection<User>>(serverFacade.findAllUsers(),HttpStatus.OK);
    }

    //@not-working
    @RequestMapping(
            value = "/api/current",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<User> getCurrentUser(){
        return new ResponseEntity<User>(serverFacade.getCurrentUser(),HttpStatus.OK);
    }

    @RequestMapping(
            value = "/api/users",
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<User> createUser(@RequestBody User user){
        return new ResponseEntity<User>(serverFacade.addUser(user),HttpStatus.CREATED);
    }

    /*
        Add hotel , and assigned it to user entity
            @provide -
                Json representation of hotel entity
                id of user to witch the hotel should be assigned
     */
    @RequestMapping(
            value = "/api/hotels/{id}",
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Hotel> createHotel(@RequestBody Hotel h,@PathVariable Long id){
        return new ResponseEntity<Hotel>(serverFacade.addHotelToUser(h,id),HttpStatus.CREATED);
    }

    /*
    Book room
     */
    @RequestMapping(
            value = "/api/book/{id}",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Room> bookRoom(@PathVariable Long id){

        return new ResponseEntity<Room>(serverFacade.bookRoom(id),HttpStatus.OK);

    }

    //@formatter:on

}
