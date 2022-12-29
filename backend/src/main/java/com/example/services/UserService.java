package com.example.services;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.exceptions.InvalidCredentialsException;
import com.example.models.Account;
import com.example.models.AccountType;
import com.example.models.User;
import com.example.repository.UserRepository;

import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class UserService {

	@Autowired
	private UserRepository userRepo;
	
	
	@Autowired
	private AccountService accountServ;
	
	public User createUserAndAccounts(User u) {
		
		BigDecimal savingsInterestRate = new BigDecimal(0.002);
		BigDecimal loanInterestRate = new BigDecimal(0.10);
		
		Account checking = new Account(u, AccountType.CHECKING, BigDecimal.ZERO, LocalDateTime.now());
		Account savings = new Account(u, AccountType.SAVINGS, savingsInterestRate, LocalDateTime.now());
		Account loan = new Account(u, AccountType.LOAN, loanInterestRate, LocalDateTime.now());
		
		accountServ.createAccount(checking);
		accountServ.createAccount(savings);
		accountServ.createAccount(loan);
		
		return userRepo.save(u);
	}
	
	public User readUser(Integer id) {
		System.out.println((userRepo.findById(id).get()).getDob().toString().substring(0, 10));
		
		return userRepo.findById(id).get();
	}
	
	public User retrieveUsername(User requestingUser) {
		
		User originalUser = userRepo.getBySsn(requestingUser.getSsn()).get();
		
		if ( (requestingUser.getDob().toString().substring(0, 10)).equals(originalUser.getDob().toString().substring(0, 10)) ) {
			return originalUser;
		} else {
			throw new InvalidCredentialsException();
		}
	}
	
	public User retrieveDob(User requestingUser) {  //this method is mainly for testing
		User originalUser = userRepo.getBySsn(requestingUser.getSsn()).get();
		
		return originalUser;
	}
	
	public User updatePassword(User updatedUser) {
		
		User originalUser = userRepo.findById(updatedUser.getId()).get();
		
		originalUser.setPassword(updatedUser.getPassword());
		
		return userRepo.save(originalUser);
	}
	
	public User resetPassword(User updatedUser) {
		
		User originalUser = userRepo.getByEmail(updatedUser.getEmail()).get();
		
		if (updatedUser.getSsn() == originalUser.getSsn()) {
			originalUser.setPassword(updatedUser.getPassword());
			return userRepo.save(originalUser);
		} else {
			throw new InvalidCredentialsException();
		}
	}
	
	
	public User updateUser(User updatedUser) {
		User originalUser = userRepo.findById(updatedUser.getId()).get();
		
		if(updatedUser.getFirstName() != null) originalUser.setFirstName(updatedUser.getFirstName());
		if(updatedUser.getLastName() != null) originalUser.setLastName(updatedUser.getLastName());
		if(updatedUser.getPassword() != null) originalUser.setPassword(updatedUser.getPassword());
		if(updatedUser.getAddress() != null) originalUser.setAddress(updatedUser.getAddress());
		if(updatedUser.getCity() != null) originalUser.setCity(updatedUser.getCity());
		if(updatedUser.getState() != null) originalUser.setState(updatedUser.getState());
		if(updatedUser.getZip() != 0) originalUser.setZip(updatedUser.getZip());
		if(updatedUser.getPhone() != null) originalUser.setPhone(updatedUser.getPhone());
		if(updatedUser.getOccupation() != null) originalUser.setOccupation(updatedUser.getOccupation());
		if(updatedUser.getIncome() != null) originalUser.setIncome(updatedUser.getIncome());
		if(updatedUser.getDob() != null) originalUser.setDob(updatedUser.getDob());
		if(updatedUser.getSsn() != 0) originalUser.setSsn(updatedUser.getSsn());
		
		return userRepo.save(originalUser);
	}
	
	public void deleteUser(Integer id) {
		User u = userRepo.findById(id).get();
		userRepo.delete(u);
	}
	
	public User loginUser(User u) {
		User userToLogin = userRepo.getByEmail(u.getEmail()).orElseThrow(InvalidCredentialsException::new);
		
		if(!userToLogin.getPassword().equals(u.getPassword())) {
			throw new InvalidCredentialsException();
		}
		
		return userToLogin;
	}
	
}
