package com.ip.backend.repository;

import com.ip.backend.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by VictorMachita on 5/13/2017.
 */
@Repository
public interface RoomRepository extends JpaRepository<Room,Long>{



}
