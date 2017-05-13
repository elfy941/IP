package com.ip.backend.services;

import com.ip.backend.model.User;

import java.util.Collection;

/**
 * Created by VictorMachita on 5/13/2017.
 */
public interface UserService {

    Collection<User> findAll();

}
