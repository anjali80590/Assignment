const express = require("express");
const bodyParser = require("body-parser");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(bodyParser.json());

app.use("/tasks", taskRoutes);

// Handle undefined routes
app.use((req, res) => res.status(404).send("404 Not Found"));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
