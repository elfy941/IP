package com.ip.backend.repository;

import com.ip.backend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by VictorMachita on 5/13/2017.
 */
@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long>{

    Employee findByEmail(String email);


}
