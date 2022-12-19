package com.example.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.models.User;
import com.example.repository.UserRepository;

import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class UserService {

	@Autowired
	private UserRepository userRepo;
	
	public User createUser(User u) {
		return userRepo.save(u);
	}
	
	public User readUser(Integer id) {
		return userRepo.findById(id).get();
	}
	
	public User updateUser(User updatedUser) {
		User originalUser = userRepo.findById(updatedUser.getId()).get();
		
		
		// This might be incorrect
		originalUser.setFirstName(updatedUser.getFirstName());
		originalUser.setLastName(updatedUser.getLastName());
		originalUser.setPassword(updatedUser.getPassword());
		originalUser.setAddress(updatedUser.getAddress());
		originalUser.setCity(updatedUser.getCity());
		originalUser.setState(updatedUser.getState());
		originalUser.setZip(updatedUser.getZip());
		originalUser.setPhone(updatedUser.getPhone());
		originalUser.setOccupation(updatedUser.getOccupation());
		originalUser.setIncome(updatedUser.getIncome());
		
		return userRepo.save(originalUser);
	}
	
	public void deleteUser(Integer id) {
		User u = userRepo.findById(id).get();
		userRepo.delete(u);
	}
	
}
