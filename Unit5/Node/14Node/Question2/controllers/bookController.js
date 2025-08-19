const Book = require("../models/bookModel");
const client = require("../config/redis");

exports.getBooks = async (req, res) => {
  const key = `books:${req.user.id}`;
  const cached = await client.get(key);
  if (cached) return res.json(JSON.parse(cached));
  const books = await Book.find({ userId: req.user.id });
  await client.set(key, JSON.stringify(books));
  res.json(books);
};

exports.addBook = async (req, res) => {
  await Book.create({ ...req.body, userId: req.user.id });
  await client.del(`books:${req.user.id}`);
  res.send("Book added");
};

exports.updateBook = async (req, res) => {
  await Book.findOneAndUpdate(
    { _id: req.params.id, userId: req.user.id },
    req.body
  );
  await client.del(`books:${req.user.id}`);
  res.send("Book updated");
};

exports.deleteBook = async (req, res) => {
  await Book.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
  await client.del(`books:${req.user.id}`);
  res.send("Book deleted");
};

exports.bulkBooks = async (req, res) => {
  await client.set(`bulk:${req.user.id}`, JSON.stringify(req.body.books));
  res.send("Books will be added later");
};
