const express = require("express");
const bodyParser = require("body-parser");
const todoRoutes = require("./routes/todoRoutes");

const app = express();
app.use(bodyParser.json());

app.use("/todos", todoRoutes);

// Handle 404
app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
