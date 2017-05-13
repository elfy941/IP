package com.ip.backend.web.api;

import com.ip.backend.model.Employee;
import com.ip.backend.model.Hotel;
import com.ip.backend.model.Room;
import com.ip.backend.model.User;
import com.ip.backend.services.EmployeeService;
import com.ip.backend.services.HotelService;
import com.ip.backend.services.RoomService;
import com.ip.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

/**
 * Created by VictorMachita on 5/13/2017.
 */
@RestController
public class TestController {

    @Autowired
    private EmployeeService employeeService;
    @Autowired
    private RoomService roomService;
    @Autowired
    private HotelService hotelService;
    @Autowired
    private UserService userService;


    //@formatter:off
    @RequestMapping(
            value = "/api/emps",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Collection<Employee>> getEmployees(){
        return new ResponseEntity<Collection<Employee>>(employeeService.findAll(), HttpStatus.OK);
    }

    @RequestMapping(
            value = "/api/rooms",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Collection<Room>> getRooms(){
        return new ResponseEntity<Collection<Room>>(roomService.findAll(),HttpStatus.OK);
    }

    @RequestMapping(
            value = "/api/hotels",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Collection<Hotel>> getHotels(){
        return new ResponseEntity<Collection<Hotel>>(hotelService.findAll(),HttpStatus.OK);
    }

    @RequestMapping(
            value = "/api/users",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Collection<User>>getUsers(){
        return new ResponseEntity<Collection<User>>(userService.findAll(),HttpStatus.OK);
    }

    //@formatter:on

}
