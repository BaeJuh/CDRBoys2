package com.example.practice2.route;

import com.example.practice2.dto.ProductDto;
import com.example.practice2.service.WebService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

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
}
