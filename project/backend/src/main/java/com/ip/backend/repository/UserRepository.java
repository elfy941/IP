package com.ip.backend.repository;

import com.ip.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by VictorMachita on 5/13/2017.
 */
public interface UserRepository extends JpaRepository<User,Long>{

    User findByEmailIgnoreCase(String email);

}
