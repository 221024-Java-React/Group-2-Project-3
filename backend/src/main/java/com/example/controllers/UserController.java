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

import com.example.models.User;
import com.example.services.UserService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("user")
@CrossOrigin("*")
@AllArgsConstructor
public class UserController {

	@Autowired
	private UserService uServ;

	@GetMapping("/test")
	public String getTest()
	{
		return "hello";
	}
	
	@PostMapping("/register")
	public User register(@RequestBody User u) {
		return uServ.createUserAndAccounts(u);
	}
	
	@GetMapping("")
	public User readUser(@RequestParam(name="id") Integer id) {
		return uServ.readUser(id);
	}
	
	@PutMapping("/update")
	public User updateUser(@RequestBody User u) {
		return uServ.updateUser(u);
	}
	
	@PutMapping("/update-password")
	public User passUpdate(@RequestBody User u) {
		
		return uServ.updatePassword(u);
	}
	
	@PutMapping("/reset-password")
	public User passReset(@RequestBody User u) {
		
		return uServ.resetPassword(u);
	}
	
	@DeleteMapping("/delete")
	public void deleteUser(@RequestParam(name="id") Integer id) {
		uServ.deleteUser(id);
	}
	
	@PostMapping("/login")
	public User loginUser(@RequestBody User u) {
		return uServ.loginUser(u);
	}
	
}
