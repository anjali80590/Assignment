const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  profileName: {
    type: String,
    enum: ["fb", "twitter", "github", "instagram"],
    required: true,
  },
  url: {
    type: String,
    required: true,
    match: [/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/, "Invalid URL"],
  },
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password must be at least 6 characters"],
  },
  profiles: [profileSchema],
});

module.exports = mongoose.model("User", userSchema);
