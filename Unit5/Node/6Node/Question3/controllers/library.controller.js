const Library = require("../models/library.model");

const addBook = async (req, res) => {
  try {
    const book = await Library.create(req.body);
    res.status(201).json({ message: "Book added successfully", book });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding book", error: error.message });
  }
};


const borrowBook = async (req, res) => {
  try {
    const book = await Library.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    if (book.status !== "available")
      return res.status(409).json({ message: "Book is not available" });

    const borrowDate = new Date();
    const dueDate = new Date(borrowDate);
    dueDate.setDate(dueDate.getDate() + 14);

    book.status = "borrowed";
    book.borrowerName = req.body.borrowerName;
    book.borrowDate = borrowDate;
    book.dueDate = dueDate;

    await book.save();
    res.status(200).json({ message: "Book borrowed successfully", book });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error borrowing book", error: error.message });
  }
};

const returnBook = async (req, res) => {
  try {
    const book = await Library.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    if (book.status !== "borrowed")
      return res.status(409).json({ message: "Book is not borrowed" });

    const returnDate = new Date();
    book.returnDate = returnDate;
    book.status = "available";
    book.borrowerName = null;
    book.borrowDate = null;
    book.dueDate = null;

    const overdueDays = Math.ceil(
      (returnDate - book.dueDate) / (1000 * 60 * 60 * 24)
    );
    book.overdueFees = overdueDays > 0 ? overdueDays * 10 : 0;

    await book.save();
    res
      .status(200)
      .json({ message: "Book returned", overdueFees: book.overdueFees });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error returning book", error: error.message });
  }
};


const getBooks = async (req, res) => {
  try {
    const { status, title } = req.query;
    const query = {};
    if (status) query.status = status;
    if (title) query.title = new RegExp(title, "i");

    const books = await Library.find(query);
    res.status(200).json({ books });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching books", error: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await Library.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    if (book.status === "borrowed")
      return res.status(409).json({ message: "Cannot delete a borrowed book" });

    await Library.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting book", error: error.message });
  }
};

module.exports = {
  addBook,
  borrowBook,
  returnBook,
  getBooks,
  deleteBook,
};
