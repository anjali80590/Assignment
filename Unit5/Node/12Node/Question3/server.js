require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

const authRoutes = require("./routes/auth");
const subRoutes = require("./routes/subscription");
const contentRoutes = require("./routes/content");

const app = express();
app.use(bodyParser.json());

connectDB(process.env.MONGO_URI);

app.use("/api/auth", authRoutes);
app.use("/api/subscription", subRoutes);
app.use("/api/content", contentRoutes);

app.get("/", (req, res) => res.send("Subscription App API running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
