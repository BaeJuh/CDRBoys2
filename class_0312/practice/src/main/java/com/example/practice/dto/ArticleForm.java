package com.example.practice.dto;

import com.example.practice.entity.Account;
import com.example.practice.entity.Article;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class ArticleForm {
    private Long id;
    private String title;
    private String content;

    public Article toEntity() {
        return new Article(id, this.title, this.content);
    }
}
