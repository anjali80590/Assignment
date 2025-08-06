const express = require("express");
const connectDB = require("./config/db");
const libraryRoutes = require("./routes/library.routes");

const app = express();
app.use(express.json());
app.use("/", libraryRoutes);

const PORT = 8080;
app.listen(PORT, async () => {
  await connectDB();
  console.log(` Server running on http://localhost:${PORT}`);
});
