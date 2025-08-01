const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json()); 

app.get("/user/:id", (req, res) => {
  res.send(`User ID from params: ${req.params.id}`);
});

app.get("/search", (req, res) => {
  const { keyword, page } = req.query;
  res.send(`Searching for: ${keyword}, Page: ${page}`);
});


app.post("/add", (req, res) => {
  const { name, age } = req.body;
  res.send(`Received name: ${name}, age: ${age}`);
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
