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
		
		return userRepo.save(originalUser);
	}
	
	public void deleteUser(Integer id) {
		User u = userRepo.findById(id).get();
		userRepo.delete(u);
	}
	
}
