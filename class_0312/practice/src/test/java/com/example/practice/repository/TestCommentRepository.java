package com.example.practice.repository;

import com.example.practice.entity.Article;
import com.example.practice.entity.Comment;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Arrays;
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

    void findByNickname() {
        {
            String nickname = "Park";

            List<Comment> comments = commentRepository.findByNickname(nickname);

            Comment a = new Comment(1L, new Article(4L, "당신의 인생 영화는?", "댓글 ㄱㄱ"), nickname, "굿 윌 헌팅");
            Comment b = new Comment(1L, new Article(4L, "당신의 소울 푸드는?", "댓글 ㄱㄱ"), nickname, "치킨");
            Comment c = new Comment(1L, new Article(4L, "당신의 취미는?", "댓글 ㄱㄱ"), nickname, "조깅");
            List<Comment> expected = Arrays.asList(a, b, c);


        }
    }
}
