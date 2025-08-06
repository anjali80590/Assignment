require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const createRoutes = require("./routes/createRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");

const app = express();
app.use(express.json());

mongoose
  .connect('mongodb://localhost:27017/movieDB')
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use("/", createRoutes);
app.use("/analytics", analyticsRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
