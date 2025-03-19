package com.example.practice1.service;

import com.example.practice1.dto.UserDto;
import com.example.practice1.entity.User;
import com.example.practice1.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class WebService {
    @Autowired
    UserRepository userRepository;

    public User repo() {
        UserDto dto = new UserDto(null, "Tester", "testId", "testPw");
        return userRepository.save(dto.toEntity());
    }

    public User join(UserDto userDto) {
        // userId에 중복 없이
//        System.out.println(userDto);
        if (userDto == null || userRepository.existsByUserId(userDto.getUserId())) {
            return null;
        }
        return userRepository.save(userDto.toEntity());
    }
}
