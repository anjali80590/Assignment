const express = require("express");
const {
  addBook,
  getAllBooks,
  deleteBook,
  updateBook,
} = require("../controllers/adminController");

const router = express.Router();

// Admin endpoints
router.post("/books", addBook);
router.get("/books", getAllBooks);
router.delete("/books/:id", deleteBook);
router.put("/books/:id", updateBook);

module.exports = router;
