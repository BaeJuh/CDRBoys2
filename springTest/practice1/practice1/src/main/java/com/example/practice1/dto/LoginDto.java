package com.example.practice1.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@AllArgsConstructor
@Getter
@ToString
public class LoginDto {
    private String userId;
    private String userPw;
}
