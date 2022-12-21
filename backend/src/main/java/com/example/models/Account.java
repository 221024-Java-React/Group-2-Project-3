package com.example.models;

import java.math.BigDecimal;
import java.time.LocalDate;
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
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="accounts")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Account {
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="user_id")
	@JsonIgnore
	private User user;

	@Column(name="balance")
	private BigDecimal balance;
	
	@Enumerated(EnumType.ORDINAL)
	private AccountType type;
	
	@OneToMany(fetch = FetchType.EAGER, mappedBy = "account")		//added this field for manual test
    private List<Transaction> transactions;
	
	@Column(name="interest_rate")
	private BigDecimal interestRate;
	
	@Column(name="creation_date")
	private LocalDateTime creationDate;
	
	public Account(User user, AccountType type) {
		this.user = user;
		this.type = type;
	}
	
	
}