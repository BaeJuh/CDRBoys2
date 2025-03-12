package com.example.practice.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@AllArgsConstructor
@ToString
@Getter
public class LoginProcess {
    private String id;
    private String pw;
}
