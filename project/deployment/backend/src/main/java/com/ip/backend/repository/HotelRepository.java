package com.ip.backend.repository;

import com.ip.backend.model.Hotel;
import com.ip.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;

/**
 * Created by VictorMachita on 5/13/2017.
 */
@Repository
public interface HotelRepository extends JpaRepository<Hotel,Long>{

    Collection<Hotel> findByUser(User user);

    Hotel findByHotelId(Long id);
}
