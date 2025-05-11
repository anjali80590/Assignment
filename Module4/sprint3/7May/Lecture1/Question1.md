# Did you understand Debouncing and Throttling?


- **Definition**: Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often.
- **How it works**: It delays the execution of a function until after a specified time has passed since it was last invoked.
- **Real-world Use Cases**:
  - Search input suggestions
  - Auto-saving form data
  - Resize or scroll event listeners
  - Email verification input

---

### 🚦 Throttling 
- **Definition**: Throttling ensures that a function is only called at most once in a specified period.
- **How it works**: No matter how many times a user triggers the event, the function will only execute once every interval.
- **Real-world Use Cases**:
  - Scroll event listeners for animations or lazy loading
  - Button click limits (e.g., API calls)
  - Resize events for charts or UI updates

---

### ⚔️ Debouncing vs Throttling: Key Differences

| Feature          | Debouncing                                      | Throttling                                      |
|------------------|--------------------------------------------------|-------------------------------------------------|
| Behavior         | Fires *after* a pause                           | Fires at regular intervals                      |
| Execution        | Only the last event triggers the function       | Executes at regular intervals during events     |
| Use When         | You want to **limit executions** until activity stops | You want to **control execution rate**      |
---
