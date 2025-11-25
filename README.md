Personal Financial App Walkthrough
I have implemented the Personal Financial App with a Spring Boot backend and a React frontend.

Implemented Features
Backend:
Transaction
 entity with type (CREDIT/DEBIT), amount, date, and description.
TransactionRepository
 for database operations.
TransactionService
 for business logic and weekly report calculation.
TransactionController
 exposing REST endpoints.
H2 in-memory database configuration.
CORS configuration to allow frontend access.
Frontend:
TransactionForm
 to add new transactions.
WeeklyReport
 to display total credit, debit, balance, and transaction list.
Responsive design with CSS.
Verification Results
WARNING

Verification could not be completed due to environment issues.

Backend
Attempted to run with mvn spring-boot:run.
Result: Failed. mvn command not found.
Attempted to check Java version.
Result: Java crashed with memory error.
Frontend
Started development server with npm run dev.
Result: Server started successfully at http://localhost:5173.
Attempted to verify UI with browser tool.
Result: Browser tool failed to start.
Next Steps
Install Maven and ensure it's in the system PATH.
Check Java installation and memory settings.
Run the backend: cd finance-app/backend && mvn spring-boot:run.
Run the frontend: cd finance-app/frontend && npm run dev.
Open http://localhost:5173 in your browser.
