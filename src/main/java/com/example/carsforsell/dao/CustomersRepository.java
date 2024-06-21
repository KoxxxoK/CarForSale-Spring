package com.example.carsforsell.dao;

import com.example.carsforsell.models.Customers;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CustomersRepository extends JpaRepository<Customers, Long> {
    Customers findByEmail(String email);
}
