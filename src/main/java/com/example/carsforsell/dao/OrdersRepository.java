package com.example.carsforsell.dao;

import com.example.carsforsell.models.Orders;
import org.hibernate.query.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface OrdersRepository extends JpaRepository<Orders, Long> {
    List<Orders> findAllByCustomers_Id(Long id);

}
