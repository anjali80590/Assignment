const express = require("express");
const { borrowBook, returnBook } = require("../controllers/readerController");
const returnCheckMiddleware = require("../middlewares/returnCheckMiddleware");

const router = express.Router();

router.post("/borrow/:id", borrowBook);
router.post("/return/:id", returnCheckMiddleware, returnBook);

module.exports = router;
