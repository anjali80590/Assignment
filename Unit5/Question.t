1. Basics of Node.js

# Q1: What is Node.js, and how does it work?
# A: Node.js is a runtime environment for executing JavaScript outside the browser. It uses the V8 engine and an event-driven, non-blocking I/O model.

# Q2: What are the key features of Node.js?
# A: Single-threaded, non-blocking I/O, event-driven, fast execution with V8, NPM for package management.

# Q3: What is the difference between Node.js and JavaScript in the browser?
# A: Node.js runs on the server and can access filesystem, network, and OS; browser JS runs in the client and cannot. Node.js supports CommonJS/ES Modules, browser JS uses ES Modules.

# Q4: What is the event loop in Node.js?
# A: The event loop allows Node.js to perform non-blocking asynchronous operations by processing callbacks in phases.

# Q5: What is the difference between synchronous and asynchronous code in Node.js?
# A: Synchronous code blocks execution line by line; asynchronous code allows operations to run concurrently without blocking.

# Q6: What are streams in Node.js?
# A: Streams are objects used to read or write data incrementally, reducing memory usage and improving performance.

# Q7: Explain process.nextTick(), setImmediate(), and setTimeout().
# A: 
# - process.nextTick(): executes before the next event loop iteration.
# - setImmediate(): executes at the end of the current event loop iteration.
# - setTimeout(): executes after a specified delay.

# ---

2. Modules & Packages

# Q1: What are Node.js modules? Explain CommonJS vs ES Modules.
# A: Modules are reusable blocks of code. CommonJS uses require() and module.exports, ES Modules use import/export syntax.

# Q2: How do you create a custom module in Node.js?
# A: By exporting functions or objects from a JS file using module.exports or export syntax.

# Q3: What is require() and module.exports?
# A: require() imports modules; module.exports exports functionality from a module.

# Q4: What is package.json? Explain its key fields.
# A: package.json manages project metadata and dependencies. Key fields: name, version, scripts, dependencies, devDependencies.

# Q5: How do you manage dependencies in Node.js?
# A: Using npm or yarn commands to install, update, or remove packages.

# Q6: Explain the difference between dependencies and devDependencies.
# A: dependencies are needed in production; devDependencies are only for development or testing.

---

3. Asynchronous Programming

# Q1: What are callbacks, and how do they work in Node.js?
# A: Callbacks are functions passed to other functions to execute after an asynchronous operation completes.

# Q2: What is "callback hell," and how can you avoid it?
# A: Callback hell occurs when callbacks are nested excessively, making code hard to read. Avoid by using Promises or async/await.

# Q3: Explain Promises in Node.js.
# A: Promises represent the eventual result of an asynchronous operation, allowing chaining and better error handling.

# Q4: How does async/await work in Node.js?
# A: async/await provides a way to write asynchronous code in a synchronous style, improving readability.

# Q5: What are event emitters in Node.js?
# A: Event emitters allow objects to emit named events and register listeners to respond to them.

---

4. Node.js APIs

# Q1: Explain the fs module and its methods.
# A: The fs module allows interacting with the filesystem for reading, writing, updating, and deleting files.

# Q2: How do you read/write files asynchronously in Node.js?
# A: By using the asynchronous methods provided by the fs module.

# Q3: What is the http module? How do you create a server using it?
# A: The http module allows creating an HTTP server to handle client requests.

# Q4: Explain the url and querystring modules.
# A: url parses URLs; querystring parses and formats URL query strings.

# Q5: What is the difference between spawn and fork in the child_process module?
# A: spawn launches a new process for executing a command; fork creates a new Node.js process and enables communication with the parent process.

---

5. Error Handling

# Q1: How do you handle errors in Node.js?
# A: Using try/catch for synchronous code and error callbacks, Promises, or async/await for asynchronous code.

# Q2: Difference between try/catch and error events.
# A: try/catch handles synchronous errors; error events handle asynchronous errors in event-driven code.

# Q3: Explain uncaught exceptions and unhandled promise rejections.
# A: Uncaught exceptions occur when errors are not caught in synchronous code; unhandled promise rejections occur when a Promise fails without a catch handler.

# Q4: How to handle asynchronous errors in Node.js?
# A: Using error-first callbacks, Promises with .catch(), or async/await with try/catch blocks.

# ---

6. Express.js & Web Development

# Q1: What is Express.js, and why is it used with Node.js?
# A: Express.js is a web framework for Node.js that simplifies building web applications and APIs.

# Q2: How do you create a basic REST API using Express?
# A: By defining routes using app.get(), app.post(), app.put(), and app.delete() methods.

# Q3: Explain middleware in Express.js.
# A: Middleware functions execute during request processing and can modify request/response objects or terminate requests.

# Q4: Difference between app.use() and app.get().
# A: app.use() mounts middleware for all HTTP methods and routes; app.get() handles GET requests for a specific route.

# Q5: How do you handle errors in Express?
# A: By defining error-handling middleware that takes four arguments (err, req, res, next).

# Q6: What is CORS, and how do you enable it in Express?
# A: CORS (Cross-Origin Resource Sharing) allows requests from other domains; enabled using the cors middleware.

---

7. Database Integration

# Q1: How do you connect Node.js with MongoDB?
# A: Using MongoDB drivers like Mongoose or the native MongoDB Node.js driver.

# Q2: Difference between SQL and NoSQL databases.
# A: SQL databases are relational with structured schemas; NoSQL databases are non-relational and schema-less.

# Q3: How do you handle database connections in Node.js efficiently?
# A: By using connection pooling or a singleton connection instance.

# Q4: What is Mongoose, and why is it used?
# A: Mongoose is an ODM for MongoDB, providing schema validation, object mapping, and easier database operations.

# ---

8. Security

# Q1: How do you secure a Node.js application?
# A: By using HTTPS, validating user input, handling authentication/authorization, and preventing common vulnerabilities.

# Q2: Explain JWT authentication in Node.js.
# A: JWT (JSON Web Token) provides a secure way to transmit user identity and authorization claims between client and server.

# Q3: How do you prevent SQL/NoSQL injection attacks?
# A: By using parameterized queries, input validation, and ORM/ODM libraries.

# Q4: What are common vulnerabilities in Node.js applications?
# A: XSS, CSRF, SQL/NoSQL injection, insecure authentication, improper error handling.

# ---

9. Advanced Concepts

# Q1: Explain clustering in Node.js.
# A: Clustering allows creating multiple Node.js processes to utilize multi-core CPU for better performance.

# Q2: What is the difference between process and os modules?
# A: process provides info about the Node.js process; os provides info about the underlying operating system.

# Q3: How do you handle scaling in Node.js applications?
# A: Using clustering, load balancers, and microservices architecture.

# Q4: Explain the difference between buffer and stream.
# A: Buffers store data in memory; streams handle data incrementally, allowing processing without loading everything into memory.

# Q5: What is event-driven architecture?
# A: Architecture where the flow is determined by events, and components communicate through event emitters or listeners.

# ---

10. Testing & Debugging

# Q1: How do you debug a Node.js application?
# A: Using console logs, Node.js debugger, or IDE/debugging tools.

# Q2: What are some popular testing frameworks for Node.js?
# A: Mocha, Jest, Chai, Jasmine.

# Q3: How do you write unit tests in Node.js?
# A: By testing individual functions or modules in isolation using a testing framework.

# Q4: How do you handle logging in Node.js applications?
# A: Using console methods or logging libraries like Winston or Bunyan.




