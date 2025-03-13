package com.example.practice.service;

import com.example.practice.entity.Article;
import com.example.practice.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleService {
        @Autowired
        private ArticleRepository articleRepository;

    public List<Article> index() {
        return (List<Article>) articleRepository.findAll();
    }

    public Article show(Long id) {
        return articleRepository.findById(id).orElse(null);
    }

//    public Article create(ArticleFrom dto) {
//        Article article = dto.toEntity();
//        if (article.getId() != null) {
//            return null;
//        }
//        return articleRepository.save(article);
//    }
}
