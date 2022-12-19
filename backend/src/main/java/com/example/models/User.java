package com.example.models;


import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;

	@Column(name="first_name")
	private String firstName;
	
	@Column(name="last_name")
	private String lastName;
	
	@Column(unique = true)
	private String email;
	
	@Column(name="password")
	private String password;
	
	@Enumerated(EnumType.ORDINAL)
	private UserType type;
	
	@OneToMany(fetch = FetchType.EAGER, mappedBy = "user")		//added this field for manual test
    private List<Account> accounts;
	
	@Column(name="address")
	private String address;

	@Column(name="city")
	private String city;
	
	@Column(name="state")
	private String state;
	
	@Column(name="zip")
	private int zip;
	
	@Column(name="phone")
	private String phone;
	
	@Column(name="occupation")
	private String occupation;
	
	@Column(name="income")
	private BigDecimal income;
	
	@Column(name="dob")
	private LocalDateTime dob;
	
	@Column(name="ssn")
	private int ssn;
	
	@Column(name="us_citizen")
	private boolean usCitizen;
	
	@Column(name="credit_score")
	private int creditScore;
	
	
	
	public User(String email, String password) {
		this.email = email;
		this.password = password;
	}

	
	
}