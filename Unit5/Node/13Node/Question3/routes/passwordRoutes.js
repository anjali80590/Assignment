const express = require("express");
const crypto = require("crypto");
const transporter = require("../config/mailer");
const User = require("../models/User");

const router = express.Router();

router.post("/forgot", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(404).json({ message: "No user found" });

  const token = crypto.randomBytes(20).toString("hex");
  user.resetToken = token;
  user.resetTokenExpiry = Date.now() + 3600000;
  await user.save();

  const resetLink = `http://localhost:${process.env.PORT}/reset/${token}`;
  await transporter.sendMail({
    to: user.email,
    subject: "Password Reset",
    text: resetLink,
  });

  res.json({ message: "Password reset link sent" });
});

router.post("/reset/:token", async (req, res) => {
  const user = await User.findOne({
    resetToken: req.params.token,
    resetTokenExpiry: { $gt: Date.now() },
  });
  if (!user)
    return res.status(400).json({ message: "Invalid or expired token" });

  user.password = req.body.password;
  user.resetToken = undefined;
  user.resetTokenExpiry = undefined;
  await user.save();

  res.json({ message: "Password reset successful" });
});

module.exports = router;
