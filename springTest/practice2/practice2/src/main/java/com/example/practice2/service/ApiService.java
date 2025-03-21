package com.example.practice2.service;

import com.example.practice2.dto.ProductDto;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.List;

@Service
public class ApiService {
    private final WebClient webClient;

    public ApiService(WebClient.Builder webClinedBuilder) {
        webClient = webClinedBuilder.baseUrl("https://fakestoreapi.com").build();
    }

    public List<ProductDto> fetchProducts() {
        return webClient.get()
                .uri("/products")
                .retrieve()
                .bodyToFlux(ProductDto.class)
                .collectList()
                .block();
    }
}
