package com.example.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "loan-application")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoanApplication {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private int id;

    @ManyToOne
    private User user;

    private String description;

    private BigDecimal amount;

    private boolean accepted;
}
