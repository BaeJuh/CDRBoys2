package com.example.practice.repository;

import com.example.practice.entity.Article;
import com.example.practice.entity.Comment;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class TestCommentRepository {
    @Autowired
    CommentRepository commentRepository;
    @Test
    @DisplayName("특정 게시글의 모든 댓글 조회")
    void findByArticleId() {
        Long articleId = 4L;

        List<Comment> comments = commentRepository.findByArticleId(articleId);

        Article article =  new Article(4L, "", "");
    }
}
