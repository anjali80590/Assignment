const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/AdvancedLibrarySystem");
    console.log(" MongoDB connected");
  } catch (error) {
    console.error(" DB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
