package com.ip.backend.web.api;

import com.ip.backend.model.User;
import com.ip.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by VictorMachita on 5/17/2017.
 */
@RestController
public class AuthController {

    @Autowired
    private UserService userService;

    @RequestMapping(
            value = "/api/login/{user}/{pass}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<User> login(@PathVariable String user , @PathVariable String pass){

        User u = userService.findByEmail(user);
        if(u != null){
            if(u.getPassword().equals(pass)) {
                return new ResponseEntity<User>(u,HttpStatus.OK);
            }
        }
        return new ResponseEntity<User>(HttpStatus.NOT_FOUND);

    }

}
