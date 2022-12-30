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
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="loan-applications")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoanApplication {
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@OneToOne(mappedBy = "loanApplication")
	@JsonIgnore
    private User user;
	
	@Column(name="amount")
	private BigDecimal amount;
	
	@Column(name="purpose")
	private String purpose;
	
	@Column(name="approval-status")
	private boolean approvalStatus;
	
	
	
	public LoanApplication(User user, BigDecimal amount) {
		this.user = user;
		this.amount = amount;
	}
}