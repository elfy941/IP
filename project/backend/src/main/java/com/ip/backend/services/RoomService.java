package com.ip.backend.services;

import com.ip.backend.model.Hotel;
import com.ip.backend.model.Room;

import java.util.Collection;

/**
 * Created by VictorMachita on 5/13/2017.
 */
public interface RoomService {

    Collection<Room> findAll();
    Collection<Room> findByHotel(Hotel hotel);

    Room create(Room r);
    Room findById(Long id);
    Room update(Room r);

}
