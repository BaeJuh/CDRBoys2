package com.example.practice1.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Entity
@Table(name = "users")
@AllArgsConstructor
@Getter
public class User {
    // Entity
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column
    private String name;
    @Column(unique = true)
    private String userId;
    @Column
    private String userPw;

    public User() {}

    public void changePassword(String newUserPw) {
        this.userPw = newUserPw;
    }
}
