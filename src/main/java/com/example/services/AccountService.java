package com.example.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.models.Account;
import com.example.repository.AccountRepository;

import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class AccountService {
	
	@Autowired
	private AccountRepository accountRepo;
	
	public Account createAccount(Account a) {
		return accountRepo.save(a);
	}
	
	public Account readAccount(Integer id) {
		return accountRepo.findById(id).get();
	}
	
	public Account updateAccount(Account updatedAccount) {
		Account originalAccount = accountRepo.findById(updatedAccount.getId()).get();
		
		originalAccount.setBalance(updatedAccount.getBalance());
		originalAccount.setInterestRate(updatedAccount.getInterestRate());
		originalAccount.setTransactions(updatedAccount.getTransactions());
		originalAccount.setType(updatedAccount.getType());
		
		return accountRepo.save(originalAccount);
	}
	
	public void deleteAccount(Integer id) {
		Account a = accountRepo.findById(id).get();
		accountRepo.delete(a);
	}

}
