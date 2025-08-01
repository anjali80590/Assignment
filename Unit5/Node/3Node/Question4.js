const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

const DB_FILE = "./db4.json";


const readData = () => JSON.parse(fs.readFileSync(DB_FILE, "utf-8"));
const writeData = (data) =>
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));


app.post("/books", (req, res) => {
  const { title, author, year } = req.body;
  if (!title || !author || !year) {
    return res
      .status(400)
      .json({ message: "Title, author, and year are required" });
  }

  const data = readData();
  const books = data.books;

  const newBook = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    title,
    author,
    year,
  };

  books.push(newBook);
  writeData(data);

  res.status(201).json(newBook);
});


app.get("/books", (req, res) => {
  const data = readData();
  res.status(200).json(data.books);
});

app.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const data = readData();
  const book = data.books.find((b) => b.id === id);

  if (!book) return res.status(404).json({ message: "Book not found" });

  res.status(200).json(book);
});


app.put("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author, year } = req.body;

  const data = readData();
  const books = data.books;
  const index = books.findIndex((b) => b.id === id);

  if (index === -1) return res.status(404).json({ message: "Book not found" });

  books[index] = {
    ...books[index],
    title: title || books[index].title,
    author: author || books[index].author,
    year: year || books[index].year,
  };

  writeData(data);
  res.status(200).json(books[index]);
});


app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const data = readData();
  const books = data.books;

  const updatedBooks = books.filter((b) => b.id !== id);
  if (updatedBooks.length === books.length) {
    return res.status(404).json({ message: "Book not found" });
  }

  data.books = updatedBooks;
  writeData(data);
  res.status(200).json({ message: "Book deleted successfully" });
});


app.get("/books/search", (req, res) => {
  const { author, title } = req.query;

  if (!author && !title) {
    return res
      .status(400)
      .json({ message: "Please provide author or title to search" });
  }

  const data = readData();
  let books = data.books;

  if (author) {
    books = books.filter((b) =>
      b.author.toLowerCase().includes(author.toLowerCase())
    );
  }
  if (title) {
    books = books.filter((b) =>
      b.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  if (books.length === 0) {
    return res.status(404).json({ message: "No books found" });
  }

  res.status(200).json(books);
});


app.use((req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});


app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});
