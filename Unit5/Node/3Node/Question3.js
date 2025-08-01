const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json()); 
const DB_FILE = "./db3.json";
const readData = () => JSON.parse(fs.readFileSync(DB_FILE, "utf-8"));
const writeData = (data) =>
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
app.post("/dishes", (req, res) => {
  const { name, price, category } = req.body;
  if (!name || !price || !category) {
    return res
      .status(400)
      .json({ message: "All fields (name, price, category) are required" });
  }

  const data = readData();
  const dishes = data.dishes;

  const newDish = {
    id: dishes.length ? dishes[dishes.length - 1].id + 1 : 1,
    name,
    price,
    category,
  };

  dishes.push(newDish);
  writeData(data);

  res.status(201).json(newDish);
});

// Get
app.get("/dishes", (req, res) => {
  const data = readData();
  res.status(200).json(data.dishes);
});

// Get By Id
app.get("/dishes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const data = readData();
  const dish = data.dishes.find((d) => d.id === id);

  if (!dish) {
    return res.status(404).json({ message: "Dish not found" });
  }
  res.status(200).json(dish);
});

// Update by Id
app.put("/dishes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, price, category } = req.body;

  const data = readData();
  const dishes = data.dishes;
  const dishIndex = dishes.findIndex((d) => d.id === id);

  if (dishIndex === -1) {
    return res.status(404).json({ message: "Dish not found" });
  }

  dishes[dishIndex] = {
    ...dishes[dishIndex],
    name: name || dishes[dishIndex].name,
    price: price || dishes[dishIndex].price,
    category: category || dishes[dishIndex].category,
  };

  writeData(data);
  res.status(200).json(dishes[dishIndex]);
});

// Delete by Id
app.delete("/dishes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const data = readData();
  const dishes = data.dishes;

  const filteredDishes = dishes.filter((d) => d.id !== id);

  if (dishes.length === filteredDishes.length) {
    return res.status(404).json({ message: "Dish not found" });
  }

  data.dishes = filteredDishes;
  writeData(data);

  res.status(200).json({ message: "Dish deleted successfully" });
});

// get Searh by name
app.get("/dishes/get", (req, res) => {
  const name = req.query.name?.toLowerCase();
  if (!name)
    return res
      .status(400)
      .json({ message: "Please provide a dish name to search" });

  const data = readData();
  const dishes = data.dishes.filter((d) => d.name.toLowerCase().includes(name));

  if (dishes.length === 0) {
    return res.status(404).json({ message: "No dishes found" });
  }

  res.status(200).json(dishes);
});

// ✅ Handle Undefined Routes (404)
app.use((req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});

// ✅ Start Server
app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});
