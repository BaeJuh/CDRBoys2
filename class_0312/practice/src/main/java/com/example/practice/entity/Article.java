package com.example.practice.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@ToString
@Entity
@Getter
@Setter
public class Article {
    @Id
    @GeneratedValue
    private long id;

    @Column
    private String title;

    @Column
    private String content;
}
