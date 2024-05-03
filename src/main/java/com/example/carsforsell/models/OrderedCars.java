package com.example.carsforsell.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.print.attribute.standard.OrientationRequested;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@Table(name = "orderedCars")
@Entity
@Data
@NoArgsConstructor
public class OrderedCars {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id", nullable = false)
    private Long id;
    @OneToMany
    @JoinColumn(name="orderedCars_id")
    private List<Orders> orders;
}
