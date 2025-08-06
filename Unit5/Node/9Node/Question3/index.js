require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const mentorRoutes = require("./routes/mentors");
const learnerRoutes = require("./routes/learners");
const sessionRoutes = require("./routes/sessions");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/mentorDB")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/mentors", mentorRoutes);
app.use("/learners", learnerRoutes);
app.use("/sessions", sessionRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
