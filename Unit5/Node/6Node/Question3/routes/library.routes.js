const express = require("express");
const router = express.Router();
const {
  addBook,
  borrowBook,
  returnBook,
  getBooks,
  deleteBook,
} = require("../controllers/library.controller");

const {
  validateBook,
  checkBorrowLimit,
} = require("../middleware/library.middleware");

router.post("/books", validateBook, addBook);
router.patch("/borrow/:id", checkBorrowLimit, borrowBook);
router.patch("/return/:id", returnBook);
router.get("/books", getBooks);
router.delete("/books/:id", deleteBook);

module.exports = router;
