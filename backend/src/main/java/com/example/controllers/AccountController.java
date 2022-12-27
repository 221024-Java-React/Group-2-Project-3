package com.example.controllers;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.models.Account;
import com.example.services.AccountService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("account")
@CrossOrigin("*")
@AllArgsConstructor
public class AccountController {

	@Autowired
	private AccountService aServ;
	
	@PostMapping("/register")
	public Account createAccount(@RequestBody Account a) {
		return aServ.createAccount(a);
	}
	
	@GetMapping("")
	public Account readAccount(@RequestParam(name="id") Integer id) {
		return aServ.readAccount(id);
	}
	
	@GetMapping("/all")
	public List<Account> readAllAccountsByUserId(@RequestParam(name="id") Integer id) {
		return aServ.readAccountByUserId(id);
	}
	
	@PutMapping("/update")
    public Account updateAccount(@RequestBody Account a) {
        return aServ.updateAccount(a);
    }

    @PatchMapping("/deposit")
    public Account depositFunds(@RequestBody Account account) {
        return aServ.depositFunds(account, "Deposit");
	}

    @PatchMapping("/withdraw")
	public Account withdrawFunds(@RequestBody Account account) {
		return aServ.withdrawFunds(account, "Withdrawal");
	}
    
    @PatchMapping("/deposit-transfer")
    public Account depositTransfer(@RequestBody Account account) {    	
    	return aServ.depositFunds(account, "Transfer");
    }
    
    @PatchMapping("/withdraw-transfer")
    public Account withdrawTransfer(@RequestBody Account account) {
    	return aServ.withdrawFunds(account, "Transfer");
    }
	
	@DeleteMapping("/delete")
	public void deleteAccount(@RequestParam(name="id") Integer id) {
		aServ.deleteAccount(id);
	}
	
}
