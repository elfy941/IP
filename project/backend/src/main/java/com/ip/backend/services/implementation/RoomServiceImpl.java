package com.ip.backend.services.implementation;

import com.ip.backend.model.Room;
import com.ip.backend.repository.RoomRepository;
import com.ip.backend.services.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

/**
 * Created by VictorMachita on 5/13/2017.
 */
@Service
public class RoomServiceImpl implements RoomService{

    @Autowired
    private RoomRepository roomRepository;

    @Override
    public Collection<Room> findAll() {
        return roomRepository.findAll();
    }
}
