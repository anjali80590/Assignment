const User = require("../models/user.model");
const Book = require("../models/book.model");

const addUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ message: "User created", user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const userRentals = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate("rentedBooks");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addUser, userRentals };
