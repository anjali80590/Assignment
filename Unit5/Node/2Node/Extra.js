// const express = require("express");
// const app = express();
// app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("Welcome to the homepage");
// });
// app.get("/user/:id", (req, res) => {
//   const userId = req.params.id;
//   res.send(`User ID from params: ${userId}`);
// });
// app.get("/search", (req, res) => {
//   const { keyword = "default", page = 1 } = req.query;
//   res.send(`Searching for: ${keyword}, Page: ${page}`);
// });
// app.get("/users", (req, res) => {
//   const users = [
//     { id: 1, name: "Anjali", age: 20 },
//     { id: 2, name: "Ravi", age: 22 },
//     { id: 3, name: "Pooja", age: 21 },
//   ];
//   res.json({
//     total: users.length,
//     users,
//   });
// });
// app.listen(3000, () => console.log("Server running at http://localhost:3000"));

const { db } = require("../7Node/Question2/models/User")




// const express = require("express");
// const EventEmitter = require("events");
// const app = express();
// const eventLogger = new EventEmitter();
// eventLogger.on("log", (msg) => {
//   console.log("📢 Custom Event Received:", msg);
// });
// app.get("/emit", (req, res) => {
//   const { message } = req.query;
//   if (!message) {
//     return res.status(400).json({ error: "Please provide a message" });
//   }
//   eventLogger.emit("log", message); // Trigger the event
//   res.json({
//     status: "Event logged",
//     timestamp: new Date().toISOString(),
//   });
// });
// app.listen(3000, () => console.log("Server running at http://localhost:3000"));



// EventEmitter in Node.js is used to create and handle custom events. It helps different parts of your app communicate by emitting (sending) and listening to events. It's useful when you want something to happen automatically after a specific action, like logging a message when someone sends a request.




// other collection  field in current filed in other collection 
db.loans.aggregate([
  {
    $lookup:{
      from:"books",
      localField:"_bookId"
    }
  }
])