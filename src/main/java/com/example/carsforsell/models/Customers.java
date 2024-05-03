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
@Table(name = "customers")
@Entity
@Data
@NoArgsConstructor
public class Customers {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id", nullable = false)
    private Long id;
    @Column(name="name", length = 25, nullable = false)
    private String name;
    @Column(name="surname", length = 25, nullable = false)
    private String surname;
    @Column(name="phoneNumber", length = 11, nullable = false)
    private Long phone_number;
    @Column(name="dateOfBirth")
    private Date dateOfBirth;
    @OneToMany
    @JoinColumn(name="customer_id")
    private List<Orders> orders ;
}
