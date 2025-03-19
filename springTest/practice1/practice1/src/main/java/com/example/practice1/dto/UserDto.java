package com.example.practice1.dto;

import com.example.practice1.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@AllArgsConstructor
@ToString
@Getter
public class UserDto {
    private Long id;
    private String name;
    private String userId;
    private String userPw;

    public User toEntity() {
        return new User(this.id, this.name, this.userId, this.userPw);
    }
}
