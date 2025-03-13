package com.example.practice.api;

import com.example.practice.entity.Account;
import com.example.practice.entity.Article;
import com.example.practice.repository.ArticleRepository;
import com.example.practice.service.ArticleService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
public class ArticleApiController {
    @Autowired
    private ArticleService articleService;

    // Get
    @GetMapping("/api/articles") // 전부 가져오기
    public List<Article> index() {
        return articleService.index();
    }

    @GetMapping("/api/articles/{id}") // 하나씩 가져오기
    public Article show(@PathVariable Long id) {
        return articleService.show(id);
    }

    // Post
//    @PostMapping("/api/articles")
//    public ResponseEntity<Article> create(@RequestBody ArticleForm dto) {
//        Article created = articleService.create(dto);
//        return (created != null) ? ResponseEntity.status(200).build() : ResponseEntity.status(400).build();
//    } // 일단 이렇게 한다. 값 넘김이 발생하기 때문에 "dto"가 받아야함

    // Update
    @PatchMapping("/api/articles/{id}")
    public ResponseEntity<Article> update(@PathVariable Long id, @RequestBody ArticleForm dto) {
        // 수정용 엔티티 생성
        Article article = dto.toEntity();
        log.info("id: {}, article: {}" + article.toString());
        // 대상 엔티티 조회
        Article target = articleRepository.findById(id).orElse(null);
        // 잘못된 요청 처리
        if (target == null || id != article.getId()) {
            log.info("id: {}, article: {}" + article.toString());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
        // 업데이트 (응답 200)
        target.patch(article);
        Article update = articleRepository.save(target);
        return ResponseEntity.status(HttpStatus.OK).body(update);
    } // "dto"를 받아 "Entity"로 변환해 사용

    // Delete
//    @DeleteMapping("api/article/{id}")
//    public ResponseEntity<Article> delete(@PathVariable Long id) {
//        Article target = articleRepository.findById(id).orElse(null);
//
//        if (target == null) {
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
//        }
//
//        articleRepository.delete(target);
//        return ResponseEntity.status(HttpStatus.OK).build();
//    }
}
