package com.example.practice.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController // JSON 반환
public class ApiController {

    @GetMapping("/api/hello")
    public String hello() {

        return "~~~";
    }
}
