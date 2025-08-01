const express = require("express");
const path = require("path");
const url = require("url");

const app = express();


app.get("/test", (req, res) => {
  res.send("Test route is working!");
});


app.get("/fileinfo", (req, res) => {
  const { filepath } = req.query;
  if (!filepath) return res.send("Please provide a filepath");

  res.json({
    fileName: path.basename(filepath),
    extension: path.extname(filepath),
    directory: path.dirname(filepath),
  });
});


app.get("/parseurl", (req, res) => {
  const { url: inputUrl } = req.query;
  if (!inputUrl) return res.send("Please provide a URL");

  const parsed = new URL(inputUrl);
  const queryParams = {};
  parsed.searchParams.forEach((value, key) => {
    queryParams[key] = value;
  });

  res.json({
    hostname: parsed.hostname,
    pathname: parsed.pathname,
    query: queryParams,
  });
});


app.listen(3000, () => console.log("Server running at http://localhost:3000"));
