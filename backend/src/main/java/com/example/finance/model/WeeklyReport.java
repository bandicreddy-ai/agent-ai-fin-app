package com.example.finance.model;

import lombok.Data;
import lombok.AllArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
public class WeeklyReport {
    private Double totalCredit;
    private Double totalDebit;
    private Double balance;
    private List<Transaction> transactions;
}
