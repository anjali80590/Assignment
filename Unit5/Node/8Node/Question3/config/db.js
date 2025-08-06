const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/LibrarySystem");
    console.log(" MongoDB Connected");
  } catch (err) {
    console.error(" DB Connection Error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
