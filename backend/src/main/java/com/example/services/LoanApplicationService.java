package com.example.services;

import com.example.models.Account;
import com.example.models.AccountType;
import com.example.models.LoanApplication;
import com.example.models.Transaction;
import com.example.models.User;
import com.example.repository.LoanApplicationRepository;
import com.example.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import javax.transaction.Transactional;

@Service
@Transactional
@AllArgsConstructor
public class LoanApplicationService {

    @Autowired
    private LoanApplicationRepository loanRepo;

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private AccountService accountService;
    
	@Autowired
	private TransactionService transactionServ;

    public LoanApplication create(LoanApplication loanApp) {
        return loanRepo.save(loanApp);
    }

    public Boolean approve(Integer appId) {
        LoanApplication loanToApprove = loanRepo.findById(appId).get();
        BigDecimal loanAmount = loanToApprove.getAmount();
//        System.out.println(loanAmount);
        
        loanToApprove.setApproved(true);
        
        int userId = loanToApprove.getUser().getId();
//        System.out.println(userId);
        
        //edit to readLoanAccountByUserId?
        Account userLoanAccount = accountService.readAccountByUserId(userId).get(2);

        
//        System.out.println(userLoanAccount.getInterestRate());

        accountService.adjustBalance(userLoanAccount, loanAmount);
        
        Transaction transaction = new Transaction(userLoanAccount, loanAmount, "LOAN", LocalDateTime.now());
        
        transaction.setBalanceAfterTransaction(userLoanAccount.getBalance());
        
        transactionServ.createTransaction(transaction);


        return true;
    }
}
