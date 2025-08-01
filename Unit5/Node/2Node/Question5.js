const express = require("express");
const EventEmitter = require("events");
const app = express();
const eventLogger = new EventEmitter();


eventLogger.on("log", (message) => {
  console.log(`[LOG]: ${message} | Time: ${new Date().toISOString()}`);
});


function delayMessage(message, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, time);
  });
}


app.get("/test", (req, res) => {
  res.send("Test route is working!");
});

app.get("/emit", (req, res) => {
  const { message } = req.query;
  if (!message) {
    return res.status(400).json({ error: "Please provide a message" });
  }
  eventLogger.emit("log", message);
  res.json({
    status: "Event logged",
    timestamp: new Date().toISOString(),
  });
});

app.get("/delay", async (req, res) => {
  const { message, time } = req.query;
  if (!message || !time) {
    return res
      .status(400)
      .json({ error: "Provide both message and time in ms" });
  }

  const delay = parseInt(time);
  if (isNaN(delay)) {
    return res.status(400).json({ error: "Time must be a number" });
  }

  await delayMessage(message, delay);
  res.json({
    message,
    delay: `${delay}ms`,
  });
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
