package com.example.bookanimeapi.service.impl;

import com.example.bookanimeapi.model.Book;
import com.example.bookanimeapi.repository.BookRepository;
import com.example.bookanimeapi.service.IBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService implements IBookService {

    @Autowired
    BookRepository bookRepository;

    @Override
    public List<Book> findAllS() {
        return bookRepository.findAll();
    }

    @Override
    public Page<Book> findPage(Pageable pageable) {
        return bookRepository.findAllList(pageable);
    }

    @Override
    public List<Book> findAllSTop3Sale() {
        return bookRepository.getTop3Sale();
    }

    @Override
    public List<Book> findAllSTop3New() {
        return bookRepository.getTopNew();
    }

    @Override
    public Optional<Book> findById(int id) {
        return bookRepository.findById(id);
    }

    @Override
    public void create(Book book) {
        bookRepository.save(book);
    }

    @Override
    public void delete(Integer id) {
        bookRepository.deleteBook(id);
    }


}
