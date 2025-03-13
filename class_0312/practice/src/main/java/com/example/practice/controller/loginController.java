package com.example.practice.controller;

import com.example.practice.dto.LoginProcess;
import com.example.practice.entity.Account;
import com.example.practice.entity.Article;
import com.example.practice.repository.AccountRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
@Slf4j
public class loginController {
    @Autowired
    private AccountRepository accountRepository;

//    log.info(content);

    @GetMapping("/login")
    public String loginDisplay() {
        return "login";
    }

    @PostMapping("/login")
    public String loggedIn(LoginProcess logPro, Model model) {

        model.addAttribute("id", logPro.getId());

        return "loggedIn";
    }

    @GetMapping("/join")
    public String join() {
        return "join";
    }

    @PostMapping("/join")
    public String join(LoginProcess new_Account) {
        Account new_User = new_Account.toEntity();
        Account saved = this.accountRepository.save(new_User);

        return "";
    }


    @GetMapping("/manage")
    public String manage() {
        
        return "";
    }

    // class
//    @GetMapping("/articles/{id}")
//    public String show(@PathVariable Long id) {
//        log.info("id : " + id);
//
//        Ariticle ariticleEntity = articleRepository.findById(id).orElse(null);
//
//        model.addAttribute("article", ariticleEntity);
//
//        return "articles/show";
//    }
//
//    @GetMapping("/articles")
//    public String index(Model model) {
//        List<Article> articleList = (List<Article>) articleRepository.findAll();
//        model.addAttribute("articleList", articleList);
//
//        model.addAttribute("id", "Redirect");
//        return "redirect:login";
//    }
}
