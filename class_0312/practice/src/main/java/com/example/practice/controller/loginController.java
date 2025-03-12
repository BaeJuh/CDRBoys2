package com.example.practice.controller;

import com.example.practice.dto.LoginProcess;
import com.example.practice.entity.Article;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
@Slf4j
public class loginController {

//    log.info(content);

    @GetMapping("/login")
    public String loginDisplay() {
        return "login";
    }

    @PostMapping("/login")
    public String loggedIn(LoginProcess logPro, Model model) {
//        log.info("data : " + logPro.getId());
        model.addAttribute("id", logPro.getId());

        return "loggedIn";
    }

    // class
    @GetMapping("/articles/{id}")
    public String show(@PathVariable Long id) {
        log.info("id : " + id);

//        Ariticle ariticleEntity = articleRepository.findById(id).orElse(null);

//        model.addAttribute("article", ariticleEntity);

        return "articles/show";
    }

    @GetMapping("articles")
    public String index(Model model) {
//        List<Article> articleList = (List<Article>) articleRepository.findAll();
//        model.addAttribute("articleList", articleList);


        return "<h1>INDEX</h1>";
    }
}
