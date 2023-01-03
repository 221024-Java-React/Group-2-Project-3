package com.example.controllers;

import com.example.models.LoanApplication;
import com.example.models.User;
import com.example.services.LoanApplicationService;
import com.example.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.LinkedHashMap;

@RestController
@RequestMapping("loan")
@CrossOrigin("*")
@AllArgsConstructor
public class LoanApplicationController {

    @Autowired
    private LoanApplicationService loanServ;

    @Autowired
    private UserService userService;

    @PostMapping("/create")
    public LoanApplication createLoanApplication(@RequestBody LinkedHashMap<Object, Object> body) {
        LoanApplication loanApp = new LoanApplication();
        Integer amount = (Integer) body.get("amount");
        String purpose = (String) body.get("purpose");
        Integer userId = (Integer) body.get("user_id");
        User user = userService.readUser(userId);

        loanApp.setAmount(BigDecimal.valueOf(amount));
        loanApp.setPurpose(purpose);
        loanApp.setApproved(false);
        loanApp.setUser(user);

        return loanServ.create(loanApp);
    }

    @PutMapping("/approve")
    public Boolean approveLoanApplication(@RequestBody LoanApplication id) {
        return loanServ.approve(id);
    }


}
