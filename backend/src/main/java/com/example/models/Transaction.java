package com.example.models;

import java.math.BigDecimal;
import java.time.LocalDateTime;

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
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="transactions")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Transaction {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="account_id")
	@JsonIgnore
	private Account account;
	
	@Column(name="amount")
	private BigDecimal amount;
	
	@Column(name="description")
	private String description;
	
	@Column(name="date")
	private LocalDateTime date;
	
	private BigDecimal balanceAfterTransaction;
	
	public Transaction(Account account, BigDecimal amount, String description, LocalDateTime date) {
		this.account = account;
		this.amount = amount;
		this.description = description;
		this.date = date;
	}
	

}
