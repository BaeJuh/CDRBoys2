package com.example.practice2.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@ToString
@Getter
public class UserDto extends LoginDto {
    private Long id;

    public UserDto(Long id, String userId, String userPw) {
        super(userId, userPw);
        this.id = id;
    }
}
