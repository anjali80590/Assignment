const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    // store current refresh token(s) — in production, hash these & allow multiple for multiple devices
    refreshTokens: [{ token: String, createdAt: Date }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
