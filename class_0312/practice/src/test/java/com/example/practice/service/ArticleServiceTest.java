package com.example.practice.service;

import com.example.practice.dto.ArticleForm;
import com.example.practice.entity.Article;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest // 스프링부트와 연동되어 테스팅
class ArticleServiceTest {

    @Autowired
    ArticleService articleService;

    @Test
    void index() {
        // expectation
        Article a = new Article(1L, "가가가가", "1111");
        Article b = new Article(2L, "나나나나", "2222");
        Article c = new Article(3L, "다다다다", "3333");

        List<Article> expected = new ArrayList<>(Arrays.asList(a, b, c));
        // actual
        List<Article> articles = articleService.index();

        // compare
        assertEquals(expected.toString(), articles.toString());
    }

    @Test
    void show_Success() {
        // expectation
        Long id = 1l;
        Article expected = new Article(id, "가가가가", "1111");
        // actual
        Article article = articleService.show(id);
        // compare
        assertEquals(expected.toString(), article.toString());
    }

    @Test
    void show_Failure() {
        // expectation
        Long id = -1l;
        Article expected = null;
        // actual
        Article article = articleService.show(id);
        // compare
        assertEquals(expected, article.toString());
    }

    @Test
    @Transactional
    void create_Success() {
        // expectation
        String title = "라라라라";
        String content = "4444";
        ArticleForm dto = new ArticleForm(null, title, content);
        Article expected = new Article(4l, title, content);
        // actual
        Article article = articleService.create(dto);
        // compare
        assertEquals(expected.toString(), article.toString());
    }

    @Test
    @Transactional
    void create_Failure() {
        // expectation
        String title = "라라라라";
        String content = "4444";
        ArticleForm dto = new ArticleForm(4l, title, content);
        Article expected = null;
        // actual
        Article article = articleService.create(dto);
        // compare
        assertEquals(expected, article.toString());
    }
}