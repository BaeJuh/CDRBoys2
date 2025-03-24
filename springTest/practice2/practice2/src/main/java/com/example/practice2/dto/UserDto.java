package com.example.practice2.dto;

import com.example.practice2.entity.User;
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

    public User toEntity() {
        return new User(null, super.getUserId(), super.getUserPw());
    }
}
