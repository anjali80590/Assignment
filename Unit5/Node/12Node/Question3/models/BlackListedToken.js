const mongoose = require("mongoose");

const blacklistedTokenSchema = new mongoose.Schema({
  token: { type: String, required: true, unique: true },
  expiresAt: { type: Date, required: true },
  type: { type: String, enum: ["access", "refresh"], required: true },
  blacklistedAt: { type: Date, default: Date.now },
});

// Optional: TTL index to auto-remove expired blacklisted tokens
blacklistedTokenSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

module.exports = mongoose.model("BlacklistedToken", blacklistedTokenSchema);
