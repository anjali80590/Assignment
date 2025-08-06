const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/BookRental");
    console.log(" MongoDB Connected");
  } catch (err) {
    console.error(" DB Connection Failed:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
