package com.example.practice.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.ToString;

@ToString
@AllArgsConstructor
@Entity
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long primaryKey;

    @Column
    private String id;
    @Column
    private String pw;
}
