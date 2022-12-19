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

import com.example.models.Transaction;
import com.example.services.TransactionService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("transaction")
@CrossOrigin("*")
@AllArgsConstructor(onConstructor=@__(@Autowired))
public class TransactionController {

	private TransactionService tServ;
	
	@PostMapping("/register")
	public Transaction createTransaction(@RequestBody Transaction t) {
		return tServ.createTransaction(t);
	}
	
	@GetMapping("")
	public Transaction readTransaction(@RequestParam(name="id") Integer id) {
		return tServ.readTransaction(id);
	}
	
	@PutMapping("/update")
	public Transaction updateTransaction(@RequestBody Transaction t) {
		return tServ.updateTransaction(t);
	}
	
	@DeleteMapping("/delete")
	public void deleteTransaction(@RequestParam(name="id") Integer id) {
		tServ.deleteTransaction(id);
	}
	
}
