package com.example.bookanimeapi.repository;

import com.example.bookanimeapi.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
}
