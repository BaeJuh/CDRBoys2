package com.example.practice2.route;

import com.example.practice2.service.WebService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Route {
    @Autowired
    WebService webService;

    @GetMapping("/")
    public String callApi() {
        return webService.callApi();
    }
}
