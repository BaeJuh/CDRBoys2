package com.example.practice2.service;

import com.example.practice2.dto.LoginDto;
import com.example.practice2.dto.ProductDto;
import com.example.practice2.dto.UserDto;
import com.example.practice2.entity.User;
import com.example.practice2.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.List;
import java.util.Map;

@Service
public class WebService {
    @Autowired
    ApiService apiService;
    @Autowired
    UserRepository userRepository;

    public List<ProductDto> callProducts() {
        return apiService.fetchProducts();
    }

    public ProductDto callProduct(String id) {
        ProductDto data = apiService.fetchProduct(id);
        return apiService.fetchProduct(id);
    }

    public User login(LoginDto loginDto) {
        User user = userRepository.findByUserId(loginDto.getUserId());

        if (user != null && user.getUserPw().equals(loginDto.getUserPw())) {
            return user;
        }

        return null;
    }

    public User join(UserDto userDto) {
        if (userRepository.existsByUserId(userDto.getUserId())) {
            return null;
        }
        User user = userDto.toEntity();
        return userRepository.save(user);
    }
}
