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
import java.util.List;

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
        
        loanToApprove.setApproved(true);
        
        int userId = loanToApprove.getUser().getId();

        List<Account> userAccounts = accountService.readAccountByUserId(userId);
        
        Account userLoanAccount = userAccounts.get(2);
        for(Account account : userAccounts) {
        	if(account.getType() == AccountType.LOAN) {
        		userLoanAccount = account;
        		break;
        	}
        }
        accountService.adjustBalance(userLoanAccount, loanAmount);
        
        Transaction transaction = new Transaction(userLoanAccount, loanAmount, "LOAN", LocalDateTime.now());
        
        transaction.setBalanceAfterTransaction(userLoanAccount.getBalance());
        
        transactionServ.createTransaction(transaction);


        return true;
    }
    
    public Boolean reject(Integer appId) {
    	LoanApplication loanToReject = loanRepo.findById(appId).get();
    	loanToReject.setPurpose("REJECTED");
    	
    	return true;
    }
}
