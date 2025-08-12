const User = require("../models/user.model");

const addUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ message: "User created successfully", user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { addUser };

// This controller handles basic User operations:
// - addUser: Creates a new user and returns the created user data