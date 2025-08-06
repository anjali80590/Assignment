const express = require("express");
const connectDB = require("./config/db");
const routes = require("./routes/app.routes");

const app = express();
app.use(express.json());
app.use("/", routes);

const PORT = 8080;
app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running on http://localhost:${PORT}`);
});
