package com.example.bookanimeapi.repository;

import com.example.bookanimeapi.model.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public interface BookRepository extends JpaRepository<Book, Integer> {

    @Query(value = "select * from book where status = 0 " ,nativeQuery = true)
    List<Book> findAll();

    @Query(value = "select * from book \n" +
            "join discount on book.discount= discount.id\n" +
            "where status = 0 \n" +
            "order by percent desc\n" +
            "limit 3", nativeQuery = true)
    List<Book> getTop3Sale();

    @Query(value = "select * from book \n" +
            "where status = 0 \n" +
            "order by id desc\n" +
            "limit 3", nativeQuery = true)
    List<Book> getTopNew();

    @Query(value = "select * from book where status = 0 " ,nativeQuery = true)
    Page<Book> findAllList(Pageable pageable);

    @Transactional
    @Modifying
    @Query(value = "update `book` set status = 1 where id = :id", nativeQuery = true)
    void deleteBook(@Param("id") Integer id);

}
