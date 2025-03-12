package com.example.practice.dto;

import com.example.practice.entity.Account;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@AllArgsConstructor
@ToString
@Getter
public class LoginProcess {
    private String id;
    private String pw;

    public Account toEntity() {
        return new Account(null, this.id, this.pw);
    }
}
