package com.example.practice2.route;

import com.example.practice2.dto.ProductDto;
import com.example.practice2.service.WebService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class Route {
    @Autowired
    WebService webService;

    @GetMapping("/")
    public String callApi() {
        String returnString = "";
        List<ProductDto> products = webService.callApi();

        return products.stream().map(ProductDto::toString).collect(Collectors.joining("\n"));
    }
}
