package com.example.practice2.service;

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

    public String callApi() {
//        Flux<String> data = apiService.fetchData();
//        data.subscribe(res -> Map<String, String> data = res);
//        return "api";
        Flux<String> data = apiService.fetchData();
        String result = data.blockLast(); // Flux의 마지막 요소를 가져옴 (동기)

        return result;
    }
}
