package com.ip.backend.services.implementation;

import com.ip.backend.model.Employee;
import com.ip.backend.model.User;
import com.ip.backend.repository.EmployeeRepository;
import com.ip.backend.services.EmployeeService;
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

    @Override
    @Transactional
    @CachePut(value = "employees",key = "#emp.id")
    public Employee create(Employee emp) {
        Employee savedEmp = employeeRepository.save(emp);
        return emp;
    }

    @Override
    public Collection<Employee> findByUser(User user) {
        return employeeRepository.findByUser(user);
    }


}
