package com.example.carsforsell.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@Table(name = "orders")
@Entity
@Data
@NoArgsConstructor
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id", nullable = false)
    private Long id;
    @Column(name = "status")
    private String status;
    @OneToMany
    @JoinColumn(name = "order_id")
    private List<OrderedCars> orderedCars;
}
