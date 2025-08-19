const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  const u = await User.create(req.body);
  res.json(u);
};

exports.login = async (req, res) => {
  const u = await User.findOne({ username: req.body.username });
  if (!u || !(await bcrypt.compare(req.body.password, u.password)))
    return res.sendStatus(401);
  const token = jwt.sign({ id: u._id }, process.env.JWT_SECRET);
  res.json({ token });
};
