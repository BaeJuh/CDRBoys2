package com.example.practice2.route;

import com.example.practice2.dto.LoginDto;
import com.example.practice2.dto.ProductDto;
import com.example.practice2.dto.UserDto;
import com.example.practice2.entity.User;
import com.example.practice2.service.WebService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.http.HttpResponse;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class Route {
    @Autowired
    WebService webService;

    @GetMapping("/")
    public String callApi() { // 단순히 데이터 조회 확인
        String returnString = "";
        List<ProductDto> products = webService.callProducts();

        return products.stream().map(ProductDto::toString).collect(Collectors.joining("\n"));
    }

    @GetMapping("/products")
    @CrossOrigin(origins = "*")
    public List<ProductDto> products() {
        return webService.callProducts();
    }

    @GetMapping("/products/{id}")
    @CrossOrigin(origins = "*")
    public ProductDto product(@PathVariable String id) {
        return webService.callProduct(id);
    }

    @PostMapping("/login")
    @CrossOrigin(origins = "*")
    public ResponseEntity<User> login(LoginDto loginDto) {
        User user = webService.login(loginDto);
        return user != null ? ResponseEntity.ok(user) : ResponseEntity.badRequest().build();
    }

    @PostMapping("/join")
    @CrossOrigin(origins = "*")
    public String join() {
        return "";
    }
}
