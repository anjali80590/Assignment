// npm install express ioredis dotenv
const express = require("express");
const Redis = require("ioredis");
const app = express();
const redis = new Redis();
app.use(express.json());

let items = [{ id: 1, name: "item1" }];

app.get("/items", async (req, res) => {
  const cache = await redis.get("items:all");
  if (cache) return res.json(JSON.parse(cache));
  await redis.set("items:all", JSON.stringify(items), "EX", 60);
  res.json(items);
});

app.post("/items", async (req, res) => {
  items.push({ id: Date.now(), name: req.body.name });
  await redis.del("items:all");
  res.json({ message: "Item added" });
});

app.put("/items/:id", async (req, res) => {
  items = items.map((i) =>
    i.id == req.params.id ? { ...i, name: req.body.name } : i
  );
  await redis.del("items:all");
  res.json({ message: "Item updated" });
});

app.delete("/items/:id", async (req, res) => {
  items = items.filter((i) => i.id != req.params.id);
  await redis.del("items:all");
  res.json({ message: "Item deleted" });
});

app.listen(5000, () => console.log("Server running"));
