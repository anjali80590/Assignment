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
