require("dotenv").config();
const express = require("express");
const db = require("./config/db");
require("./jobs/bulkInsertJob");
const app = express();

app.use(express.json());
app.use("/auth", require("./routes/authRoutes"));
app.use("/books", require("./routes/bookRoutes"));

db().then(() => console.log("MongoDB connected"));

app.listen(process.env.PORT, () =>
  console.log(`Server running on ${process.env.PORT}`)
);
