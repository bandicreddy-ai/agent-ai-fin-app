package com.example.finance.controller;

import com.example.finance.model.Transaction;
import com.example.finance.model.WeeklyReport;
import com.example.finance.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/transactions")
@CrossOrigin(origins = "http://localhost:5173") // Allow React app
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @PostMapping
    public Transaction addTransaction(@RequestBody Transaction transaction) {
        return transactionService.addTransaction(transaction);
    }

    @GetMapping("/weekly")
    public WeeklyReport getWeeklyReport(@RequestParam(required = false) LocalDate date) {
        return transactionService.getWeeklyReport(date);
    }
    
    @GetMapping
    public List<Transaction> getAllTransactions() {
        return transactionService.getAllTransactions();
    }
}
