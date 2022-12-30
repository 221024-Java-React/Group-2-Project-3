package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.models.LoanApplication;

@Repository
public interface LoanApplicationRepository extends JpaRepository<LoanApplication, Integer> {
	
}
