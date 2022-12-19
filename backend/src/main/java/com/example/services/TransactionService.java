package com.example.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.models.Transaction;
import com.example.repository.TransactionRepository;

import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class TransactionService {

	@Autowired
	private TransactionRepository transactionRepo;
	
	public Transaction createTransaction(Transaction t) {
		return transactionRepo.save(t);
	}
	
	public Transaction readTransaction(Integer id) {
		return transactionRepo.findById(id).get();
	}
	
	public Transaction updateTransaction(Transaction updatedTransaction) {
		Transaction originalTransaction = transactionRepo.findById(updatedTransaction.getId()).get();
		
		if(updatedTransaction.getAccount() != null) originalTransaction.setAccount(updatedTransaction.getAccount());
		if(updatedTransaction.getAmount() != null) originalTransaction.setAmount(updatedTransaction.getAmount());
		if(updatedTransaction.getDescription() != null) originalTransaction.setDescription(updatedTransaction.getDescription());
		
		return transactionRepo.save(originalTransaction);
	}
	
	public void deleteTransaction(Integer id) {
		Transaction t = transactionRepo.findById(id).get();
		transactionRepo.delete(t);
	}
	
}
