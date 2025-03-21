package com.example.practice2.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class ProductDto {
    private Long id;
    private String title;
    private float price;
    private String description;
    private String category;
    private String image;
}
