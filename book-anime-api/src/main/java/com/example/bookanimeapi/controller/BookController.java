package com.example.bookanimeapi.controller;

import com.example.bookanimeapi.model.Book;
import com.example.bookanimeapi.model.Category;
import com.example.bookanimeapi.model.Discount;
import com.example.bookanimeapi.service.IBookService;
import com.example.bookanimeapi.service.ICategoryService;
import com.example.bookanimeapi.service.IDiscountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/public")
public class BookController {

    @Autowired
    IBookService bookService;

    @Autowired
    ICategoryService categoryService;

    @Autowired
    IDiscountService discountService;

    @GetMapping("/list")
    public ResponseEntity<List<Book>> getBookList() {
        List<Book> bookList = bookService.findAllS();
        if (bookList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(bookList, HttpStatus.OK);
    }

    @GetMapping("/listCategory")
    public ResponseEntity<List<Category>> getCategoryList() {
        List<Category> categoryList = categoryService.findAllS();
        if (categoryList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(categoryList, HttpStatus.OK);
    }

    @GetMapping("/listDiscount")
    public ResponseEntity<List<Discount>> getDiscountList() {
        List<Discount> discountList = discountService.findAllS();
        if (discountList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(discountList, HttpStatus.OK);
    }

    @GetMapping("/list/sale")
    public ResponseEntity<List<Book>> getBookListTop3Sale() {
        List<Book> bookList = bookService.findAllSTop3Sale();
        if (bookList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(bookList, HttpStatus.OK);
    }

    @GetMapping("/list/new")
    public ResponseEntity<List<Book>> getBookListTop3New() {
        List<Book> bookList = bookService.findAllSTop3New();
        if (bookList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(bookList, HttpStatus.OK);
    }

    @GetMapping("/show/{id}")
    public ResponseEntity<Object> findById(@PathVariable("id") Integer id) {
        Optional<Book> book = bookService.findById(id);
        if (book == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(book, HttpStatus.CREATED);
    }

    @GetMapping("/listAllBook")
    public ResponseEntity<Page<Book>> getList(@PageableDefault(value = 6) Pageable pageable) {
        Page<Book> listAllBooks = bookService.findPage(pageable);
        if (listAllBooks.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(listAllBooks, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Book> create(@RequestBody Book book, BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            return new ResponseEntity<Book>(HttpStatus.NOT_ACCEPTABLE);
        }
        bookService.create(book);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable("id") Integer id) {
        if (id == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        bookService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
