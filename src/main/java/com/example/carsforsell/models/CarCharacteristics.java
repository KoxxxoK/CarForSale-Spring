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
@Table(name = "carCharacteristics")
@Entity
@Data
@NoArgsConstructor
public class CarCharacteristics {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id", nullable = false)
    private Long id;
    @Column(name="releaseYear", length = 4, nullable = false)
    private int releaseYear;
    @Column(name="color", length = 20, nullable = false)
    private String color;
    @Column(name="topSpeed", length = 3, nullable = false)
    private int topSpeed;
    @Column(name="transmission", length = 15, nullable = false)
    private String transmission;
    @Column(name="drive", length = 15, nullable = false)
    private String drive;
    @Column(name="cruiseControl", nullable = false)
    private boolean cruiseControl;
    @Column(name="abs", nullable = false)
    private boolean abs;
    @Column(name="weight", length = 4, nullable = false)
    private int weight;
}
