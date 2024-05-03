package com.example.carsforsell.dao;

import com.example.carsforsell.models.Cars;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarsRepository extends JpaRepository<Cars, Long> {
}
