# Personal Financial App

A full-stack personal financial application featuring a Spring Boot backend and a React frontend.

---

## Features

### Backend (Spring Boot)
- **Transaction** entity:  
  - Fields: `type (CREDIT/DEBIT)`, `amount`, `date`, `description`
- **TransactionRepository**:  
  - Database CRUD operations
- **TransactionService**:  
  - Core business logic  
  - Weekly financial report calculations
- **TransactionController**:  
  - REST API endpoints for all transaction operations
- **H2 In-Memory Database**:  
  - Quick demo and testing
- **CORS Configuration**:  
  - Allows frontend to access backend APIs

### Frontend (React)
- **TransactionForm**:  
  - Add new transactions
- **WeeklyReport**:  
  - View summary: total credits, debits, balance, and transaction list
- **Responsive Design**:  
  - CSS for desktop and mobile support

---

### Backend
- Tried to run: `mvn spring-boot:run`
  - **Result:** Failed. `mvn` command not found.
- Checked Java version
  - **Result:** Java crashed (memory error).

### Frontend
- Started development server: `npm run dev`
  - **Result:** Server started at [http://localhost:5173](http://localhost:5173)
- Tried to verify UI using browser tool
  - **Result:** Browser tool failed to start.

---

## Next Steps

1. **Install Maven** and add it to your system `PATH`.
2. **Check Java installation** and memory configuration.
3. **Run Backend:**
   ```sh
   cd finance-app/backend
   mvn spring-boot:run
   ```
4. **Run Frontend:**
   ```sh
   cd finance-app/frontend
   npm run dev
   ```
5. **Open in browser:**  
   [http://localhost:5173](http://localhost:5173)

---

## License

This project is for educational and demo purposes.
