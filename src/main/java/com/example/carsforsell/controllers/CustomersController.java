package com.example.carsforsell.controllers;

import com.example.carsforsell.dao.CustomersRepository;
import com.example.carsforsell.models.Customers;
import com.example.carsforsell.services.CustomersService;
import jakarta.persistence.Access;
import org.apache.logging.log4j.util.PerformanceSensitive;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
@CrossOrigin(origins = "http://localhost:63342")
@RequestMapping("/")
@RestController
public class CustomersController {
    @Autowired
    CustomersRepository customersRepository;
    @Autowired
    CustomersService customersService;
    PasswordEncoder passwordEncoder;
    @PostMapping("/registration")
    public String registration(@RequestBody Customers customers){
        Customers userFromDB = customersRepository.findByEmail(customers.getEmail());
        if(userFromDB == null) {
            customersService.addCustomer(customers);
            return "Пользователь создан";
        }else{
            return "Пользователь уже существует";
        }
    }

    @PostMapping
    @RequestMapping("/login")
    @CrossOrigin(origins = "http://localhost:63342")
    public Long login(@RequestBody Customers customers) {
        String password = customers.getPassword();
        Customers userFromDB = customersRepository.findByEmail(customers.getEmail());
        if(userFromDB!=null){
            if(userFromDB.getPassword().equals(password)){
                return userFromDB.getId();
            }
        }
        return 0L;
    }
}
