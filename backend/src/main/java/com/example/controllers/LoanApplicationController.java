package com.example.controllers;

import com.example.models.LoanApplication;
import com.example.services.LoanApplicationService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("loan")
@CrossOrigin("*")
@AllArgsConstructor
public class LoanApplicationController {

    @Autowired
    private LoanApplicationService loanServ;

    @PostMapping("/create")
    public LoanApplication createLoanApplication(@RequestBody LoanApplication loanApp) {
        return loanServ.create(loanApp);
    }

    @PutMapping("/approve")
    public Boolean approveLoanApplication(@RequestBody Integer id) {
        return loanServ.approve(id);
    }


}
