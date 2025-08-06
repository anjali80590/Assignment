const express = require("express");
const connectDB = require("./config/db");
const libraryRoutes = require("./routes/library.routes");

const app = express();
app.use(express.json());

app.use("/library", libraryRoutes);

app.get("/", (req, res) => {
  res.send("Advanced Library Management System is Running!");
});

const PORT = 8080;
app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running on port ${PORT}`);
});
