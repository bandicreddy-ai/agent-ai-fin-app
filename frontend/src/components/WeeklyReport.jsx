import React, { useEffect, useState } from 'react';
import { getWeeklyReport } from '../services/api';

const WeeklyReport = ({ refreshTrigger }) => {
    const [report, setReport] = useState(null);

    useEffect(() => {
        const fetchReport = async () => {
            try {
                const data = await getWeeklyReport();
                setReport(data);
            } catch (error) {
                console.error("Error fetching report", error);
            }
        };
        fetchReport();
    }, [refreshTrigger]);

    if (!report) return <div>Loading report...</div>;

    return (
        <div className="card">
            <h2>Weekly Report</h2>
            <div className="stats">
                <div className="stat-item credit">
                    <h3>Total Credit</h3>
                    <p>+${report.totalCredit.toFixed(2)}</p>
                </div>
                <div className="stat-item debit">
                    <h3>Total Debit</h3>
                    <p>-${report.totalDebit.toFixed(2)}</p>
                </div>
                <div className="stat-item balance">
                    <h3>Balance</h3>
                    <p className={report.balance >= 0 ? 'positive' : 'negative'}>
                        ${report.balance.toFixed(2)}
                    </p>
                </div>
            </div>
            <h3>Transactions</h3>
            <ul className="transaction-list">
                {report.transactions.map(t => (
                    <li key={t.id} className={t.type.toLowerCase()}>
                        <span>{t.date} - {t.description}</span>
                        <span>{t.type === 'CREDIT' ? '+' : '-'}${t.amount.toFixed(2)}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WeeklyReport;
