package com.ip.backend.services;

import com.ip.backend.model.Hotel;

import java.util.Collection;

/**
 * Created by VictorMachita on 5/13/2017.
 */
public interface HotelService {

    Collection<Hotel> findAll();

}
