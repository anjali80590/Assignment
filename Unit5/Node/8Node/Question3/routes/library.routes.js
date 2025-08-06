const express = require("express");
const {
  addBook,
  updateBook,
  deleteBook,
  getBookBorrowers,
} = require("../controllers/book.controller");

const {
  addMember,
  borrowBook,
  returnBook,
  getMemberBorrowedBooks,
} = require("../controllers/member.controller");

const router = express.Router();

// Book Routes
router.post("/add-book", addBook);
router.put("/update-book/:bookId", updateBook);
router.delete("/delete-book/:bookId", deleteBook);
router.get("/book-borrowers/:bookId", getBookBorrowers);

// Member Routes
router.post("/add-member", addMember);
router.post("/borrow-book", borrowBook);
router.post("/return-book", returnBook);
router.get("/member-borrowed-books/:memberId", getMemberBorrowedBooks);

module.exports = router;
