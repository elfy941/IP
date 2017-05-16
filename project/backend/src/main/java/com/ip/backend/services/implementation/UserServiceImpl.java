package com.ip.backend.services.implementation;

import com.ip.backend.model.User;
import com.ip.backend.repository.UserRepository;
import com.ip.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;

/**
 * Created by VictorMachita on 5/13/2017.
 */
@Service
@Transactional
public class UserServiceImpl implements UserService{

    private User currentUser;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Collection<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public User findById(Long id) {
        return userRepository.findOne(id);
    }

    public User getCurrentUser() {
        return currentUser;
    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmailIgnoreCase(email);
    }

    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    public void setCurrentUser(User currentUser) {
        this.currentUser = currentUser;
    }



}
