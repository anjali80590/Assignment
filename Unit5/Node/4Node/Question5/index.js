const express = require("express");
const bodyParser = require("body-parser");
const loggerMiddleware = require("./middlewares/loggerMiddleware");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();
app.use(bodyParser.json());
app.use(loggerMiddleware);

app.use("/employees", employeeRoutes);

// Handle 404
app.use((req, res) => res.status(404).send("404 Not Found"));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
