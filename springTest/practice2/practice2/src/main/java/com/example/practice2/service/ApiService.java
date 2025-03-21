package com.example.practice2.service;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class ApiService {
    private final WebClient webClient;

    public ApiService(WebClient.Builder webClinedBuilder) {
        webClient = webClinedBuilder.baseUrl("https://fakestoreapi.com").build();
    }

    public Flux<String> fetchData() {
        return webClient.get()
                .uri("/products")
                .retrieve()
                .bodyToFlux(String.class);
    }
}
