package com.ip.backend.security;


import com.ip.backend.model.User;
import com.ip.backend.services.EmployeeService;
import com.ip.backend.services.HotelService;
import com.ip.backend.services.RoomService;
import com.ip.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.AbstractUserDetailsAuthenticationProvider;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.*;

/**
 * Created by VictorMachita on 5/15/2017.
 */
@Component
public class UserAuthenticationProvider extends AbstractUserDetailsAuthenticationProvider{

    @Autowired
    private UserSecurityService userSecurityService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserService userService;

    @Autowired
    private HotelService hotelService;

    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private RoomService roomService;

    @Override
    protected void additionalAuthenticationChecks(UserDetails userDetails, UsernamePasswordAuthenticationToken token) throws AuthenticationException {
        if(token.getCredentials() == null || userDetails.getPassword() == null){
            throw new BadCredentialsException("Invalid credentials");
        }

//        if(!passwordEncoder.matches((String)token.getCredentials(),userDetails.getPassword())){
//            throw new BadCredentialsException("Invalid credentials");
//        }
        if(!token.getCredentials().equals(userDetails.getPassword())){
            throw new BadCredentialsException("Invalid credentials");
        }


        User user = userService.findAll().stream().filter(u -> u.getEmail().equals(userDetails.getUsername())).findAny().get();
        userService.setCurrentUser(user);
    }

    @Override
    protected UserDetails retrieveUser(String s, UsernamePasswordAuthenticationToken token) throws AuthenticationException {

        UserDetails userDetails = userSecurityService.loadUserByUsername(s);
        return userDetails;

    }
}
