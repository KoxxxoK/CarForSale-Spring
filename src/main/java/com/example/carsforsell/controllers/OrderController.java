package com.example.carsforsell.controllers;


import com.example.carsforsell.dao.OrdersRepository;
import com.example.carsforsell.models.Orders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping(value = "/orders")
@RestController
@CrossOrigin(origins = "http://localhost:63342")
public class OrderController {
    @Autowired
    OrdersRepository ordersRepository;

    @GetMapping("/{customer_id}")
    private List<Orders> getOrders(@PathVariable("customer_id") Long id){
        return ordersRepository.findAllByCustomers_Id(id);
    }

    @PostMapping(value = "/newOrder")
    private void createOrder(@RequestBody Orders orders){
        ordersRepository.save(orders);
    }
}
