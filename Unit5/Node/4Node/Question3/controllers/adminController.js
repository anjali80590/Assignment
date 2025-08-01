const { readBooks, writeBooks } = require("../models/bookModel");

// Add a new book
const addBook = (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required" });

  const books = readBooks();
  const newBook = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    title,
    status: "available",
    borrowedBy: "",
    borrowedDate: "",
  };

  books.push(newBook);
  writeBooks(books);

  res.status(201).json({ message: "Book added successfully", book: newBook });
};

// View all books
const getAllBooks = (req, res) => {
  const books = readBooks();
  res.json(books);
};

// Delete a book
const deleteBook = (req, res) => {
  const { id } = req.params;
  let books = readBooks();
  const index = books.findIndex((b) => b.id === parseInt(id));

  if (index === -1) return res.status(404).json({ error: "Book not found" });

  const deleted = books.splice(index, 1);
  writeBooks(books);

  res.json({ message: "Book deleted successfully", deleted });
};

// Update a book (only title)
const updateBook = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  if (!title) return res.status(400).json({ error: "Title is required" });

  const books = readBooks();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return res.status(404).json({ error: "Book not found" });

  book.title = title;
  writeBooks(books);

  res.json({ message: "Book updated successfully", book });
};

module.exports = { addBook, getAllBooks, deleteBook, updateBook };
