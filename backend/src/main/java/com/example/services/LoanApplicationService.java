package com.example.services;

import com.example.models.LoanApplication;
import com.example.repository.LoanApplicationRepository;
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

    public LoanApplication create(LoanApplication loanApp) {
        return loanRepo.save(loanApp);
    }

    public Boolean approve(Integer id) {
        // use AccountService to add funds to user account
        // return true so front end can give some feedback

        return true;
    }
}
