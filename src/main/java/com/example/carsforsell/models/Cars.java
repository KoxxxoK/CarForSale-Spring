package com.example.carsforsell.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@Table(name = "cars")
@Entity
@Data
@NoArgsConstructor
public class Cars {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id", nullable = false)
    private Long id;
    @Column(name="mark", length = 20)
    private String mark;
    @Column(name="model", length = 20)
    private String model;
    @OneToMany
    @JoinColumn(name="car_id")
    private List<OrderedCars> orderedCars;
    @ManyToOne
    @JoinColumn(name="car_id")
    private CarCharacteristics carCharacteristics;
}
