import React, { useState } from 'react';
import { addTransaction } from '../services/api';

const TransactionForm = ({ onTransactionAdded }) => {
    const [type, setType] = useState('CREDIT');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!amount || !description) return;

        const transaction = {
            type,
            amount: parseFloat(amount),
            description,
            date: new Date().toISOString().split('T')[0] // Today's date
        };

        try {
            await addTransaction(transaction);
            onTransactionAdded();
            setAmount('');
            setDescription('');
        } catch (error) {
            console.error("Error adding transaction", error);
        }
    };

    return (
        <div className="card">
            <h2>Add Transaction</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Type:</label>
                    <select value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="CREDIT">Credit</option>
                        <option value="DEBIT">Debit</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Amount:</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="0.00"
                    />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description"
                    />
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default TransactionForm;
