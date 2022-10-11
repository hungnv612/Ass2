package com.example.bookanimeapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class BookAnimeApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(BookAnimeApiApplication.class, args);

        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        System.out.println(passwordEncoder.encode("12345678"));
    }


}
