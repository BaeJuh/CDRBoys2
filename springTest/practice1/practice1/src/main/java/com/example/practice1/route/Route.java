package com.example.practice1.route;

import com.example.practice1.entity.User;
import com.example.practice1.service.WebService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    @CrossOrigin(origins = "*", methods = RequestMethod.POST)
    public String join(@RequestBody String userInfo) {
        System.out.println(userInfo);
        return "";
    }
}
