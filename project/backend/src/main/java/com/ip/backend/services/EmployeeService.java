package com.ip.backend.services;

import com.ip.backend.model.Employee;

import java.util.Collection;

/**
 * Created by VictorMachita on 5/13/2017.
 */
public interface EmployeeService {

    Employee findByEmail(String email);
    Collection<Employee> findAll();

}
