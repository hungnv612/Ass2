package com.example.bookanimeapi.service.impl;

import com.example.bookanimeapi.model.Category;
import com.example.bookanimeapi.repository.BookRepository;
import com.example.bookanimeapi.repository.CategoryRepository;
import com.example.bookanimeapi.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService implements ICategoryService {

    @Autowired
    CategoryRepository categoryRepository;


    @Override
    public List<Category> findAllS() {
        return categoryRepository.findAll();
    }
}
