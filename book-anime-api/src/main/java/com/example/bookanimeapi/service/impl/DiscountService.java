package com.example.bookanimeapi.service.impl;

import com.example.bookanimeapi.model.Discount;
import com.example.bookanimeapi.repository.DiscountRepository;
import com.example.bookanimeapi.service.IDiscountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiscountService implements IDiscountService {

    @Autowired
    DiscountRepository discountRepository;

    @Override
    public List<Discount> findAllS() {
        return discountRepository.findAll();
    }
}
