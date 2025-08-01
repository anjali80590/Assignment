const { readBooks, writeBooks } = require("../models/bookModel");
const logTransaction = require("../middlewares/transactionLogger");

const borrowBook = (req, res) => {
  const { id } = req.params;
  const { user } = req.body;

  let books = readBooks();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return res.status(404).json({ error: "Book not found" });
  if (book.status !== "available")
    return res.status(400).json({ error: "Book is already borrowed" });

  book.status = "borrowed";
  book.borrowedBy = user;
  book.borrowedDate = new Date().toISOString();

  writeBooks(books);
  logTransaction(`${user} borrowed "${book.title}"`);

  res.json({ message: "Book borrowed successfully", book });
};

const returnBook = (req, res) => {
  const { id } = req.params;

  let books = readBooks();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return res.status(404).json({ error: "Book not found" });
  if (book.status === "available")
    return res.status(400).json({ error: "Book is not borrowed" });

  const user = book.borrowedBy;
  book.status = "available";
  book.borrowedBy = "";
  book.borrowedDate = "";

  writeBooks(books);
  logTransaction(`${user} returned "${book.title}"`);

  res.json({ message: "Book returned successfully", book });
};

module.exports = { borrowBook, returnBook };
