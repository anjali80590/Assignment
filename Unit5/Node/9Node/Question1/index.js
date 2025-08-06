require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const studentRoutes = require("./routes/studentRoutes");
const courseRoutes = require("./routes/courseRoutes");
const enrollmentRoutes = require("./routes/enrollmentRoutes");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/studentDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/students", studentRoutes);
app.use("/courses", courseRoutes);
app.use("/enroll", enrollmentRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
