const Library = require("../models/library.model");


const validateBook = (req, res, next) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ message: "Incomplete Data" });
  }
  next();
};

const checkBorrowLimit = async (req, res, next) => {
  const { borrowerName } = req.body;
  const borrowedBooks = await Library.find({
    borrowerName,
    status: "borrowed",
  });
  if (borrowedBooks.length >= 3) {
    return res
      .status(409)
      .json({ message: "Borrowing limit exceeded (3 books max)." });
  }
  next();
};

module.exports = {
  validateBook,
  checkBorrowLimit,
};
