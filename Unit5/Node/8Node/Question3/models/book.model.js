const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
  },
  author: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["available", "borrowed"],
    default: "available",
  },
  borrowers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Member",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


bookSchema.pre("save", function (next) {
  if (
    this.isModified("status") &&
    this.status === "borrowed" &&
    this.borrowers.length === 0
  ) {
    return next(
      new Error("Book cannot be marked as borrowed without a borrower.")
    );
  }
  next();
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
