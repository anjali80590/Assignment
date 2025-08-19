// npm install express mongoose bcrypt jsonwebtoken nodemailer dotenv
const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(express.json());

connectDB();

app.use("/", authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on http://localhost:${process.env.PORT}`);
});
