package com.ip.backend.services.implementation;

import com.ip.backend.model.Hotel;
import com.ip.backend.repository.HotelRepository;
import com.ip.backend.services.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

/**
 * Created by VictorMachita on 5/13/2017.
 */
@Service
public class HotelServiceImpl implements HotelService{

    @Autowired
    private HotelRepository hotelRepository;

    @Override
    public Collection<Hotel> findAll() {
        return hotelRepository.findAll();
    }
}
