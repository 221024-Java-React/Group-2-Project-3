package com.example.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
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
	
	@PutMapping("/update")
	public Account updateAccount(@RequestBody Account a) {
		return aServ.updateAccount(a);
	}
	
	@DeleteMapping("/delete")
	public void deleteAccount(@RequestParam(name="id") Integer id) {
		aServ.deleteAccount(id);
	}
	
}
