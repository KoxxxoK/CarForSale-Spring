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
    @Column(name="cost", length = 20)
    private int cost;
    @Column(name="mark", length = 20)
    private String mark;
    @Column(name="model", length = 20)
    private String model;
    @Column(name="photo")
    private String photo;
    @ManyToOne
    @JoinColumn(name="car_id")
    private CarCharacteristics carCharacteristics;
}
