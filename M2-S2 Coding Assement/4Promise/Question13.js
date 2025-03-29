// What is a Promise and Why Do We Need It?
// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation.

// Why do we need Promises?
// Handles asynchronous operations efficiently – Helps manage operations like fetching data from an API, reading files, or executing timers.

// Prevents callback hell – Provides a structured way to handle multiple async operations.

// Better error handling – With .catch(), errors are easier to manage compared to traditional callbacks.

// .then() is executed when the promise is resolved.
// .catch() is executed when the promise is rejected.
// .finally() runs regardless of success or failure.

// Advantages of Using Promises
// ✔ Improved Readability – Avoids deep nesting.
// ✔ Better Error Handling – Errors can be handled in .catch().
// ✔ Easier to Maintain – Code is modular and scalable.

// What is Callback Hell?
// When multiple asynchronous functions are nested within each other, the code becomes difficult to read and maintain.