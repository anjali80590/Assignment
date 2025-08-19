const express = require("express");
const Order = require("../models/Order");
const assignChef = require("../utils/assignChef");
const auth = require("../middleware/auth");
const roleCheck = require("../middleware/roleCheck");

const router = express.Router();

router.post("/", auth, roleCheck(["user"]), async (req, res) => {
  const chefId = await assignChef();
  const order = await Order.create({
    ...req.body,
    user: req.user.id,
    chef: chefId,
  });
  res.json(order);
});

router.put("/:id/status", auth, roleCheck(["chef"]), async (req, res) => {
  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.json(order);
});

module.exports = router;
