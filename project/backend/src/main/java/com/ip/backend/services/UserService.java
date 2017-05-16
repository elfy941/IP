package com.ip.backend.services;

import com.ip.backend.model.User;

import java.util.Collection;

/**
 * Created by VictorMachita on 5/13/2017.
 */
public interface UserService {

    Collection<User> findAll();
    User findById(Long id);
    void setCurrentUser(User user);
    User getCurrentUser();

    User findByEmail(String email);

    User createUser(User user);

}
