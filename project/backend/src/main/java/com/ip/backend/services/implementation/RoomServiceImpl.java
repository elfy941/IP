package com.ip.backend.services.implementation;

import com.ip.backend.model.Hotel;
import com.ip.backend.model.Room;
import com.ip.backend.repository.RoomRepository;
import com.ip.backend.services.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CachePut;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;

/**
 * Created by VictorMachita on 5/13/2017.
 */
@Service
@Transactional
public class RoomServiceImpl implements RoomService{

    @Autowired
    private RoomRepository roomRepository;

    @Override
    public Collection<Room> findAll() {
        return roomRepository.findAll();
    }

    @Override
    public Collection<Room> findByHotel(Hotel hotel) {
        return roomRepository.findByHotel(hotel);
    }

    @Override
    @Transactional
    @CachePut(value = "rooms",key = "#r.id")
    public Room create(Room r) {
        Room room =  roomRepository.save(r);
        return room;
    }

    @Override
    public Room findById(Long id) {
        return roomRepository.findOne(id);
    }

    @Override
    public Room update(Room r) {
        return roomRepository.save(r);
    }
}
