require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const authMiddleware = require("./middleware/authMiddleware");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());

connectDB(process.env.MONGO_URI);
app.use("/api/auth", authRoutes);


app.get("/api/profile", authMiddleware, (req, res) => {
  res.json({ message: "Protected profile", user: req.user });
});


app.get("/", (req, res) => res.send("API is running"));


app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ message: "Internal server error." });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
