const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/, 
    unique: true,
  },
  age: { type: Number, required: true },
  addresses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Address" }],
});

module.exports = mongoose.model("User", userSchema);
