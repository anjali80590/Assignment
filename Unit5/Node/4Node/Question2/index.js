const express = require("express");
const bodyParser = require("body-parser");
const ticketRoutes = require("./routes/ticketRoutes");

const app = express();
app.use(bodyParser.json());

app.use("/tickets", ticketRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
