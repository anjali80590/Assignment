let express = require("express");
let fs = require("fs");
let app = express();

app.get("/", (req, res) => {
  res.send("home page");
});

app.get("/read", (req, res) => {
  fs.readFile("data3.txt", "utf-8", (err, data) => {
    if (err) {
      return res.status(500).send("errro reading file");
    }
    res.send(data);
  });
});
app.listen(1000, () => {
  console.log("http://localhost:1000");
});
