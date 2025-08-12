require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

const authRoutes = require("./routes/auth");
const blogRoutes = require("./routes/blogs");

const app = express();
app.use(bodyParser.json());
connectDB(process.env.MONGO_URI);


app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);


app.get("/", (req, res) => res.send("Blog API running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
