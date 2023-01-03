package com.example.services;

import com.example.models.Account;
import com.example.models.AccountType;
import com.example.models.LoanApplication;
import com.example.models.User;
import com.example.repository.LoanApplicationRepository;
import com.example.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public LoanApplication create(LoanApplication loanApp) {
        return loanRepo.save(loanApp);
    }

    public Boolean approve(LoanApplication id) {
        LoanApplication loanToApprove = loanRepo.findById(id.getId()).get();
        loanToApprove.setApproved(true);
        int userId = loanToApprove.getUser().getId();
        Account userLoanAccount = accountService.readAccountByUserId(userId).get(2);
        userLoanAccount.setType(AccountType.LOAN);
        accountService.depositFunds(userLoanAccount,"Loan");

        return true;
    }
}
