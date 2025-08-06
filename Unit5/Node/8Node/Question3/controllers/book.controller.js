const Book = require("../models/book.model");
const Member = require("../models/member.model");

exports.addBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json({ message: "Book added", book });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.bookId, req.body, {
      new: true,
    });
    res.json({ message: "Book updated", book });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.bookId);
    if (!book) return res.status(404).json({ message: "Book not found" });

    await Member.updateMany(
      { borrowedBooks: book._id },
      { $pull: { borrowedBooks: book._id } }
    );

    await Book.findByIdAndDelete(book._id);
    res.json({ message: "Book deleted and removed from member records" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getBookBorrowers = async (req, res) => {
  try {
    const book = await Book.findById(req.params.bookId).populate("borrowers");
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
