package com.example.practice.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.ToString;

@ToString
@AllArgsConstructor
@Entity
public class Account {
    @Id
    @GeneratedValue
    private Long primaryKey;

    @Column
    private String id;
    @Column
    private String pw;
}
