const Book = require("../models/book.model");
const User = require("../models/user.model");

const addBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json({ message: "Book created", book });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const rentBook = async (req, res) => {
  try {
    const { userId, bookId } = req.body;

    const user = await User.findById(userId);
    const book = await Book.findById(bookId);

    if (!user || !book)
      return res.status(404).json({ message: "User or Book not found" });

    if (!user.rentedBooks.includes(bookId)) user.rentedBooks.push(bookId);
    if (!book.rentedBy.includes(userId)) book.rentedBy.push(userId);

    await user.save();
    await book.save();

    res.status(200).json({ message: "Book rented" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const returnBook = async (req, res) => {
  try {
    const { userId, bookId } = req.body;

    await User.findByIdAndUpdate(userId, { $pull: { rentedBooks: bookId } });
    await Book.findByIdAndUpdate(bookId, { $pull: { rentedBy: userId } });

    res.status(200).json({ message: "Book returned successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const bookRenters = async (req, res) => {
  try {
    const book = await Book.findById(req.params.bookId).populate("rentedBy");
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json({ book });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.bookId, req.body, {
      new: true,
    });
    res.json({ message: "Book updated", book });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.bookId);
    if (!book) return res.status(404).json({ message: "Book not found" });

    await User.updateMany(
      { rentedBooks: book._id },
      { $pull: { rentedBooks: book._id } }
    );

    await Book.findByIdAndDelete(book._id);
    res.json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addBook,
  rentBook,
  returnBook,
  bookRenters,
  updateBook,
  deleteBook,
};
