package com.example.bookanimeapi.repository;
import com.example.bookanimeapi.model.Discount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface DiscountRepository extends JpaRepository<Discount, Integer> {

}
