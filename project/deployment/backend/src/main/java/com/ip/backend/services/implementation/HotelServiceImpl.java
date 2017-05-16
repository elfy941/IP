package com.ip.backend.services.implementation;

import com.ip.backend.model.Hotel;
import com.ip.backend.model.User;
import com.ip.backend.repository.HotelRepository;
import com.ip.backend.services.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;

/**
 * Created by VictorMachita on 5/13/2017.
 */
@Service
@Transactional
public class HotelServiceImpl implements HotelService{

    @Autowired
    private HotelRepository hotelRepository;

    @Override
    public Collection<Hotel> findAll() {
        return hotelRepository.findAll();
    }

    @Override
    public Collection<Hotel> findByUser(User user) {
        return hotelRepository.findByUser(user);
    }

    @Override
    public Hotel findById(Long id) {
        return hotelRepository.findByHotelId(id);
    }

    public Hotel create(Hotel h){
        return hotelRepository.save(h);
    }
}
