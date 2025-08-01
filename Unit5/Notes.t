
1. What is Node.js?
# Node.js is an open-source, cross-platform JavaScript runtime environment that allows JavaScript to run on the server-side. 
# It uses the V8 engine (Google Chrome's JavaScript engine) and is built on Libuv, which provides an event-driven, non-blocking I/O model 
# for high performance and scalability.

Key Features:
# - Single-threaded but asynchronous.
# - Event-driven architecture.
# - Non-blocking I/O for scalability.
# - Cross-platform (Windows, Linux, macOS).

2. Is Node.js Single-threaded? How does it handle multiple requests?
# Yes, Node.js is single-threaded for JavaScript execution.
# It uses the Event Loop to handle multiple requests asynchronously without blocking the main thread.

How?
# - Non-blocking operations like I/O are offloaded to Libuv's thread pool.
# - Once the operation completes, a callback is queued for execution in the Event Loop.

3. What is Non-blocking I/O?
# Non-blocking I/O means that Node.js does not wait for a task to finish before moving to the next one. 
# Instead, it continues executing other tasks and handles the result later via callbacks or promises.

Example:
# const fs = require('fs');

# console.log("Start");
# fs.readFile('file.txt', 'utf-8', (err, data) => {
#     console.log("File read complete");
# });
# console.log("End");
# // Output: Start → End → File read complete

4. Explain the Event Loop in Node.js
# The Event Loop is the core of Node.js’s asynchronous behavior. 
# It continuously checks the call stack and callback queues to execute pending tasks.

Phases of Event Loop:
# - Timers – Executes setTimeout and setInterval callbacks.
# - Pending Callbacks – Executes I/O callbacks.
# - Idle, Prepare – Internal operations.
# - Poll – Retrieves new I/O events.
# - Check – Executes setImmediate() callbacks.
# - Close Callbacks – Executes close events like socket.on('close').

5. What is Libuv?
# Libuv is a C library that Node.js uses to provide an event-driven architecture and thread pool for asynchronous I/O.

Responsibilities:
# - Event loop implementation.
# - Non-blocking I/O support.
# - Thread pool for expensive tasks like file system operations, DNS, crypto.

6. What are Worker Threads in Node.js?
# Worker Threads are used for CPU-intensive tasks (e.g., image processing, encryption) because the Event Loop should not block.

Example:
const { Worker } = require('worker_threads');
new Worker('./worker.js');  // Executes code in a separate thread

7. EventEmitter in Node.js
# EventEmitter allows objects to emit named events and register listeners for those events.

Example:
# const EventEmitter = require('events');
# const emitter = new EventEmitter();

# emitter.on('greet', name => console.log(`Hello, ${name}`));
# emitter.emit('greet', 'Anjali'); // Output: Hello, Anjali



8. How Node.js Handles Asynchronous Operations?
# - Event Loop for managing tasks.
# - Thread Pool for expensive I/O tasks (file read/write, crypto).
# - Callback Queue for normal async callbacks.
# - Microtask Queue for Promises (.then(), async/await).

# Call Stack sends async tasks to libuv.
# Timers go to Timer System, heavy I/O tasks go to Thread Pool.
# When completed, they go to Callback Queue.
# Event Loop checks:
# Is Call Stack empty?
# If yes, it takes the next callback from the queue and executes it.

# not greate for heavy computation and cpu intensive processsing 

# 9. Difference Between CommonJS (CJS) and ES Modules (ESM):
# CommonJS → require() / module.exports
# ES Modules → import / export

# Loading:
# CommonJS → Synchronous
# ES Modules → Asynchronous

# Default Usage:
# CommonJS → Default in older Node.js
# ES Modules → Default in modern JavaScript & Node (with "type": "module")

10. What is Backend?
# The backend is the server-side part of an application that handles business logic, processes data, and communicates with the database. It is not visible to the user but ensures that data and functionality work correctly.

11. What is Frontend?
# The frontend is the client-side part of an application that users interact with directly. It includes everything the user experiences visually on the screen, like UI design, buttons, forms, etc.

12. What is a Server?
# A server is a computer or software that listens for incoming requests from clients, processes them, and sends back responses. It acts as a bridge between the client and backend logic.

13. What is a Database?
# A database is a structured system for storing and managing data. It allows the backend to perform CRUD operations (Create, Read, Update, Delete) on application data.
# Examples: MySQL, MongoDB, PostgreSQL.


npm & Package Management
# What is a package manager, and why do we need it?
# What is npm, and what are its key features?
# What is the purpose of package.json and package-lock.json?
# What is the difference between dependencies and devDependencies?
# What is the role of node_modules? Why don’t we push it to GitHub?
# How do you initialize a Node.js project using npm?
# How do you install and use an external npm module?



14. What is a Package Manager?
# A package manager is a tool that manages software libraries (packages) for your project.
# It helps you install, update, and remove dependencies without manually downloading files.

# Example: npm (Node Package Manager) for JavaScript.

Why do we need it?
# - Automates dependency installation
# - Handles version control
# - Makes collaboration easier



15. What is npm?
# npm (Node Package Manager) is the default package manager for Node.js.
# It provides:
# - Dependency management
# - Access to thousands of open-source packages


# // Check npm version
# // Command: npm -v


16. How to initialize a Node.js project?
Run: npm init -y
It creates a package.json file to store project metadata and dependencies.



17. What is package.json and Why Important?
# package.json is a config file for Node.js projects that stores:
# - Project name, version, scripts
# - Dependencies (libraries used in project)

Example package.json:
{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.18.2"
  }
}


18. What is package-lock.json?
# - Stores the exact versions of installed packages
# - Ensures consistent installations across environments



19. What is node_modules?
# - Directory that contains all installed dependencies
# - Should not be uploaded to GitHub (use .gitignore)



20. Installing and using an external module
# Example: Using "is-even" module


// Step 1: npm install is-even
const isEven = require("is-even");
console.log(isEven(4)); // true
console.log(isEven(5)); // false


21. What is Express.js? Why is it used?
# Express.js is a minimal Node.js framework for creating servers and APIs easily.
# Why use it?
# - Simplifies routing
# - Middleware support
# - Easy integration with databases

# const http = require('http');
# const server = http.createServer((req, res) => {
#   if (req.url === '/' && req.method === 'GET') {
#     res.writeHead(200, {'Content-Type': 'text/plain'});
#     res.end('Home Page');
#   } else if (req.url === '/about') {
#     res.end('About Page');
#   } else {
#     res.writeHead(404);
#     res.end('Not Found');
#   }
# });

# server.listen(3000, () => console.log('Server running on port 3000'));

# Use http.createServer() to create a server.
# Manually parse URLs, query strings, and request body.
# Write routing logic using if/else or switch statements.
# Set headers and send responses manually.
# Handle static files, cookies, and middleware by yourself.

# Express.js is a minimal and flexible Node.js web application framework that provides features to build web and API servers easily.
# Routing – Handles different HTTP methods (GET, POST, etc.) and URL paths.
# Middleware Support – Allows processing requests before sending responses.
# Fast & Lightweight – Built on Node.js, optimized for performance.
# Template Engine Support – Integrates with view egines like EJS, Pug.
# Easy to Build REST APIs – Simplifies creation of APIs for web and mobile apps.



22. Installing Express
Command: npm install express



23. Key Express Concepts
- Port: Communication channel for the server (e.g., localhost:3000)
- Request (req): Data sent by client
- Response (res): Data sent back by server
- Route: URL path for handling requests
- Endpoint: Specific route performing an action


24. Create Basic Express Server


const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my Express Server!");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});


25. What is Nodemon?
# Nodemon restarts the server automatically when changes are made.
# Install globally: npm install -g nodemon
# Run: nodemon index.js



26. What are Middlewares in Express?
# Middlewares are functions that run between request and response.
# Used for:
# - Authentication
# - Logging
# - Parsing request body
# Example:

app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});


27. What is the difference between dependencies and devDependencies?
# - dependencies: Required in production (e.g., express)
# - devDependencies: Required only in development (e.g., nodemon)
# Add dependency: npm install express
# Add devDependency: npm install nodemon --save-dev



28. Why use Express when Node.js can create servers?
# Express simplifies server creation by providing routing, middleware, and easier code structure.









// MVC Pattern & Middleware - Notes

// 1️⃣ Understanding Express Router
// ---------------------------------
// Express Router allows modularizing route definitions for clean and organized code.

// ✅ Why Use Routers?
// - Keeps routes modular and maintainable
// - Prevents index.js from becoming cluttered
// - Helps scale large applications

// ✅ How It Works?
// - Routers define routes in separate files.
// - Use `app.use('/baseRoute', routerFile)` to mount them.

// ---------------------------------
// 2️⃣ MVC Pattern in Express
// ---------------------------------
// MVC = Model-View-Controller (Design Pattern)

// ✅ Responsibilities:
// - Model: Handles data and database logic.
// - View: UI layer (mostly for frontend, not used in REST APIs).
// - Controller: Handles request/response logic.

// ✅ Benefits:
// - Clear separation of concerns
// - Easier debugging and testing
// - Scalable for large projects

// ✅ Common Folder Structure:
// |- controllers
// |   |- userController.js
// |- models
// |   |- userModel.js
// |- routes
// |   |- userRoutes.js
// |- index.js

// ---------------------------------
// 3️⃣ Middleware in Express
// ---------------------------------
// ✅ What is Middleware?
// A function that runs between the request and response cycle.

// ✅ Why Use Middleware?
// - Data validation
// - Logging, authentication
// - Error handling
// - Reusable logic across routes

// ✅ Middleware Structure:
// (req, res, next) => {
//     // Do something
//     next(); // Pass control to the next middleware/route
// };

// ✅ Types of Middleware:
// - Application-level: app.use(logger)
// - Router-level: router.use(authMiddleware)
// - Built-in: express.json()
// - Error-handling: Handles errors globally
// - Third-party: cors, helmet, morgan, etc.

// ✅ Built-in Middleware Example:
// app.use(express.json()); // Parses JSON body

// ---------------------------------
// ✅ Summary
// - Express Router modularizes routes for better organization.
// - MVC pattern separates concerns: Models, Views, Controllers.
// - Middlewares enhance request-response cycle for validation, logging, security.
