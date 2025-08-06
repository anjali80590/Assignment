require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const doctorRoutes = require("./routes/doctorRoutes");
const patientRoutes = require("./routes/patientRoutes");
const consultationRoutes = require("./routes/consultationRoutes");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/doctorDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/doctors", doctorRoutes);
app.use("/patients", patientRoutes);
app.use("/consultations", consultationRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
