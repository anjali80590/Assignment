console.log("=== Single Responsibility Principle Refactoring ===");

class TaskManager {
  createTask(name) {
    console.log(`Creating task: ${name}`);
  }
}

class EmailService {
  sendEmail(to) {
    console.log(`Sending email to ${to}`);
  }
}

// Usage
const taskManager = new TaskManager();
const emailService = new EmailService();

taskManager.createTask("Complete project documentation");
emailService.sendEmail("team@company.com");

console.log("\n=== Extended Example with More Responsibilities ===");

class TaskValidator {
  validateTask(name) {
    if (!name || name.trim() === "") {
      throw new Error("Task name cannot be empty");
    }
    if (name.length > 100) {
      throw new Error("Task name too long");
    }
    return true;
  }
}

class TaskRepository {
  saveTask(task) {
    console.log(`Saving task to database: ${task}`);
  }
}

class NotificationService {
  sendNotification(message) {
    console.log(`Sending notification: ${message}`);
  }
}

class RefactoredTaskManager {
  constructor() {
    this.validator = new TaskValidator();
    this.repository = new TaskRepository();
    this.notifier = new NotificationService();
    this.emailService = new EmailService();
  }

  createTask(name) {
    this.validator.validateTask(name);
    console.log(`Creating task: ${name}`);
    this.repository.saveTask(name);
    this.notifier.sendNotification(`Task "${name}" created successfully`);
    this.emailService.sendEmail("manager@company.com");
  }
}

const refactoredManager = new RefactoredTaskManager();
refactoredManager.createTask("Refactor legacy code");
