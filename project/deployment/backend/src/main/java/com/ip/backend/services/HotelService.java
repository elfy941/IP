package com.ip.backend.services;

import com.ip.backend.model.Hotel;
import com.ip.backend.model.User;

import java.util.Collection;

/**
 * Created by VictorMachita on 5/13/2017.
 */
public interface HotelService {

    Collection<Hotel> findAll();
    Collection<Hotel> findByUser(User user);

    Hotel findById(Long id);
    Hotel create(Hotel hotel);

}
