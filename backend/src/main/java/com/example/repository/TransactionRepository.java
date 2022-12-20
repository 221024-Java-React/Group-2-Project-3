package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.models.Transaction;


@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Integer> {

}
