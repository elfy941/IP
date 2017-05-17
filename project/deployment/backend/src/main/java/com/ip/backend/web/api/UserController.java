package com.ip.backend.web.api;

import com.ip.backend.facade.ServerFacade;
import com.ip.backend.model.Employee;
import com.ip.backend.model.Hotel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

/**
 * Created by VictorMachita on 5/17/2017.
 */
@RestController
public class UserController {

    @Autowired
    private ServerFacade serverFacade;

    @RequestMapping(
            value = "/api/user/emps/{id}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Collection<Employee>> getUserEmployees(@PathVariable Long id){
        return new ResponseEntity<Collection<Employee>>(serverFacade.getUserEmployees(id), HttpStatus.OK);
    }

    @RequestMapping(
            value = "/api/user/hotels/{id}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Collection<Hotel>> getUserHotels(@PathVariable Long id){
        return new ResponseEntity<Collection<Hotel>>(serverFacade.getUserHotels(id),HttpStatus.OK);
    }

}
