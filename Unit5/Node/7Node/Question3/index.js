require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const vehicleRoutes = require("./routes/vehicleRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();
app.use(express.json());

connectDB();

app.use("/api/vehicles", vehicleRoutes);
app.use(errorHandler);

app.listen(3000, () => console.log("Server running on port 3000"));
