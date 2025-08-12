const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema(
  {
    plan: { type: String, enum: ["free", "premium", "pro"], default: "free" },
    startAt: Date,
    expiresAt: Date,
  },
  { _id: false }
);

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    subscription: {
      type: subscriptionSchema,
      default: () => ({ plan: "free" }),
    },
    // store jti (or token ids) for refresh rotation if needed; not mandatory here
    refreshJtis: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
