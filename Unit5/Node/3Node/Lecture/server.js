const express = require("express");
const app = express();
app.use(express.json()); // Middleware to parse JSON data from body

// In-memory user database (array)
let users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
];

// ✅ 1. GET all users
app.get("/users", (req, res) => {
  res.json(users); // Send JSON response
});

// ✅ 2. GET a user by ID (Dynamic Routing using req.params)
app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id == req.params.id);
  if (!user) return res.status(404).send("User not found");
  res.json(user);
});

// ✅ 3. Search user by query parameter
app.get("/search", (req, res) => {
  const keyword = req.query.q;
  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(keyword.toLowerCase())
  );
  res.json(filteredUsers);
});

// ✅ 4. POST - Create new user
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// ✅ 5. PUT - Update user by ID
app.put("/users/:id", (req, res) => {
  const user = users.find((u) => u.id == req.params.id);
  if (!user) return res.status(404).send("User not found");

  user.name = req.body.name || user.name; // Update only name
  res.json(user);
});

// ✅ 6. DELETE - Remove user by ID
app.delete("/users/:id", (req, res) => {
  users = users.filter((u) => u.id != req.params.id);
  res.send("User deleted successfully");
});

// ✅ 7. Demonstrating res.send() vs res.json()
app.get("/send", (req, res) => {
  res.send("<h1>Welcome to My API</h1>"); // Sends HTML
});

app.get("/json", (req, res) => {
  res.json({ message: "Hello, this is JSON!" }); // Sends JSON
});

// ✅ Server running
app.listen(3000, () => console.log("🚀 Server running on port 3000"));
