const express = require("express");
const Dish = require("../models/Dish");
const auth = require("../middleware/auth");
const roleCheck = require("../middleware/roleCheck");

const router = express.Router();

router.post("/", auth, roleCheck(["admin"]), async (req, res) => {
  const dish = await Dish.create(req.body);
  res.json(dish);
});

router.get("/", async (req, res) => {
  res.json(await Dish.find());
});

module.exports = router;
