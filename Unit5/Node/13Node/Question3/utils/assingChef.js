const User = require("../models/User");

async function assignChef() {
  const chefs = await User.find({ role: "chef" });
  if (!chefs.length) return null;
  const randomIndex = Math.floor(Math.random() * chefs.length);
  return chefs[randomIndex]._id;
}

module.exports = assignChef;
