import React, { useState } from 'react';
import TransactionForm from './components/TransactionForm';
import WeeklyReport from './components/WeeklyReport';
import './App.css';

function App() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleTransactionAdded = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <div className="app-container">
      <header>
        <h1>Personal Finance Tracker Using Gen AI Agent I built this App in just  5 minutes By Chandrasekhar</h1>
      </header>
      <main>
        <TransactionForm onTransactionAdded={handleTransactionAdded} />
        <WeeklyReport refreshTrigger={refreshTrigger} />
      </main>
    </div>
  );
}

export default App;
