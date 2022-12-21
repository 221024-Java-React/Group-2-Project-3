package com.example.services;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.models.Account;
import com.example.models.Transaction;
import com.example.repository.AccountRepository;

import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class AccountService {
	
	@Autowired
	private AccountRepository accountRepo;
	
	@Autowired
	private TransactionService transactionServ;
	
	public Account createAccount(Account a) {
		return accountRepo.save(a);
	}
	
	
	public Account readAccount(Integer id) {
		return accountRepo.findById(id).get();
	}
	
	public List<Account> readAccountByUserId(Integer id) {
		List<Account> allAccounts = accountRepo.findAll();
		List<Account> userAccounts = new LinkedList<>();
		
		for(Account account : allAccounts) {
			if(account.getUser().getId() == id) {
				userAccounts.add(account);
			}
		}
		
		return userAccounts;
	}
	
	public Account adjustBalance(Account updatedAccount) {
		return adjustBalance(updatedAccount, BigDecimal.ZERO);
	}
	
	
	public Account adjustBalance(Account updatedAccount, BigDecimal adjustment) {
		Account originalAccount = accountRepo.findById(updatedAccount.getId()).get();
		
		if(updatedAccount.getBalance() != null) originalAccount.setBalance(adjustment.add(updatedAccount.getBalance()));
		
		return accountRepo.save(originalAccount);
	}
	
	
	public Account postTransactionToAccount(Account account, BigDecimal amount, String description, LocalDateTime date) {
		
		Transaction transaction = new Transaction(account, amount, description, date);

		transactionServ.createTransaction(transaction);
		
		return accountRepo.save(account);
	}
	
	
	public Account updateAccount(Account updatedAccount) {
		Account originalAccount = accountRepo.findById(updatedAccount.getId()).get();
		
		if(updatedAccount.getBalance() != null) originalAccount.setBalance(updatedAccount.getBalance());
		if(updatedAccount.getInterestRate() != null) originalAccount.setInterestRate(updatedAccount.getInterestRate());
		if(updatedAccount.getTransactions() != null) originalAccount.setTransactions(updatedAccount.getTransactions());
		if(updatedAccount.getType() != null) originalAccount.setType(updatedAccount.getType());
		
		return accountRepo.save(originalAccount);
	}
	
	
	public void deleteAccount(Integer id) {
		Account a = accountRepo.findById(id).get();
		accountRepo.delete(a);
	}

}
