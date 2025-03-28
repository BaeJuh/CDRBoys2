package com.example.practice.service;

import com.example.practice.dto.CommentDto;
import com.example.practice.entity.Article;
import com.example.practice.entity.Comment;
import com.example.practice.repository.ArticleRepository;
import com.example.practice.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CommentService {
    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private ArticleRepository articleRepository;


    public List<CommentDto> comments(Long articleId) {
        List<Comment> comments = commentRepository.findByArticleId(articleId);

//        List<CommentDto> dtos = new ArrayList<CommentDto>();

        return comments.stream().map(CommentDto::createCommentDto).collect(Collectors.toList());
    }

    @Transactional
    public CommentDto create(Long articleId, CommentDto dto) {
        Article article = articleRepository.findById(articleId).orElseThrow(IllegalArgumentException::new);

        Comment comment = Comment.createComment(dto, article);

        Comment created = commentRepository.save(comment);

        return CommentDto.createCommentDto(created);
    }

    @Transactional
    public CommentDto delete(Long id) {
        Comment target = commentRepository.findById(id).orElseThrow(IllegalArgumentException::new
        );

        commentRepository.delete(target);
        return null;
    }
}
