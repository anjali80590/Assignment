require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(express.json());

connectDB();

app.use("/tasks", taskRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
