package com.example.carsforsell.controllers;

import com.example.carsforsell.dao.CarsRepository;
import com.example.carsforsell.models.Cars;
import jakarta.persistence.Access;
import org.hibernate.boot.jaxb.Origin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/car")
@RestController
@CrossOrigin(origins = "http://localhost:63342")
public class CarsController {
    @Autowired
    CarsRepository carsRepository;
    @GetMapping()
    public List<Cars> getAll(){
        return carsRepository.findAll();
    }
    @GetMapping("/{id}")
    public Optional<Cars> getById(@PathVariable("id") Long id){
        return carsRepository.findById(id);
    }

    @PostMapping("/create")
    public String addCar(@RequestBody Cars cars){
        carsRepository.save(cars);
        return "Машина добавлена";
    }
}
