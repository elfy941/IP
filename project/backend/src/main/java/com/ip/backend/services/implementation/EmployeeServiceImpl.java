package com.ip.backend.services.implementation;

import com.ip.backend.model.Employee;
import com.ip.backend.repository.EmployeeRepository;
import com.ip.backend.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

/**
 * Created by VictorMachita on 5/13/2017.
 */
@Service
public class EmployeeServiceImpl implements EmployeeService{

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public Employee findByEmail(String email) {
        return employeeRepository.findByEmail(email);
    }

    @Override
    public Collection<Employee> findAll() {
        return employeeRepository.findAll();
    }


}
