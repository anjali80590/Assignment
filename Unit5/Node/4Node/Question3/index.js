const express = require("express");
const bodyParser = require("body-parser");
const loggerMiddleware = require("./middlewares/loggerMiddleware");
const readerRoutes = require("./routes/readerRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();
app.use(bodyParser.json());
app.use(loggerMiddleware);

app.use("/reader", readerRoutes);
app.use("/admin", adminRoutes);

// 404 handler
app.use((req, res) => res.status(404).send("404 Not Found"));

app.listen(3000, () => console.log("Server running on port 3000"));
