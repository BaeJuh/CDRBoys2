package com.example.practice1.route;

import com.example.practice1.dto.UserDto;
import com.example.practice1.entity.User;
import com.example.practice1.service.WebService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.http.HttpResponse;

@RestController
public class Route {
    @Autowired
    WebService webService;

    @GetMapping("/")
    public String home() {
        return "Welcome to SprintBoot";
    }

    @GetMapping("/repo")
    public String repo() {
        User saved = webService.repo();

        return saved.toString();
    }

    @PostMapping("/join")
    @CrossOrigin(origins = "*")
    public ResponseEntity<User> join(@RequestBody UserDto userInfo) {
//        System.out.println(userInfo);
        User newUser = webService.join(userInfo);
        System.out.println(newUser);
        return newUser != null ? ResponseEntity.ok(newUser) : ResponseEntity.status(HttpStatus.CONFLICT).build();
    }

    @PostMapping("/login")
    public void login(@RequestBody UserDto userInfo) {
        
    }
}
