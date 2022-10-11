package com.example.bookanimeapi.service;

import com.example.bookanimeapi.model.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;


public interface IBookService {
    List<Book> findAllS();

    Page<Book> findPage(Pageable pageable);

    List<Book> findAllSTop3Sale();

    List<Book> findAllSTop3New();

    Optional<Book> findById(int id);

    void create(Book book);

    void delete(Integer id);
}
