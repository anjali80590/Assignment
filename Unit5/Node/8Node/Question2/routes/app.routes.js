const express = require("express");
const {
  addBook,
  rentBook,
  returnBook,
  bookRenters,
  updateBook,
  deleteBook,
} = require("../controllers/book.controller");

const { addUser, userRentals } = require("../controllers/user.controller");

const router = express.Router();

router.post("/add-user", addUser);
router.post("/add-book", addBook);
router.post("/rent-book", rentBook);
router.post("/return-book", returnBook);
router.get("/user-rentals/:userId", userRentals);
router.get("/book-renters/:bookId", bookRenters);
router.put("/update-book/:bookId", updateBook);
router.delete("/delete-book/:bookId", deleteBook);

module.exports = router;
