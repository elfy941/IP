package com.ip.backend.services;

import com.ip.backend.model.Employee;
import com.ip.backend.model.User;

import java.util.Collection;

/**
 * Created by VictorMachita on 5/13/2017.
 */
public interface EmployeeService {

    Employee findByEmail(String email);
    Collection<Employee> findAll();

    Employee create(Employee emp);

    Collection<Employee> findByUser(User user);

}
