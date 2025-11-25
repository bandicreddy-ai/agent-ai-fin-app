package com.example.finance.service;

import com.example.finance.model.Transaction;
import com.example.finance.model.WeeklyReport;
import com.example.finance.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.temporal.TemporalAdjusters;
import java.util.List;

@Service
public class TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    public Transaction addTransaction(Transaction transaction) {
        if (transaction.getDate() == null) {
            transaction.setDate(LocalDate.now());
        }
        return transactionRepository.save(transaction);
    }

    public WeeklyReport getWeeklyReport(LocalDate date) {
        if (date == null) {
            date = LocalDate.now();
        }
        LocalDate startOfWeek = date.with(TemporalAdjusters.previousOrSame(DayOfWeek.MONDAY));
        LocalDate endOfWeek = date.with(TemporalAdjusters.nextOrSame(DayOfWeek.SUNDAY));

        List<Transaction> transactions = transactionRepository.findByDateBetween(startOfWeek, endOfWeek);

        double totalCredit = transactions.stream()
                .filter(t -> "CREDIT".equalsIgnoreCase(t.getType()))
                .mapToDouble(Transaction::getAmount)
                .sum();

        double totalDebit = transactions.stream()
                .filter(t -> "DEBIT".equalsIgnoreCase(t.getType()))
                .mapToDouble(Transaction::getAmount)
                .sum();

        double balance = totalCredit - totalDebit;

        return new WeeklyReport(totalCredit, totalDebit, balance, transactions);
    }
    
    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }
}
