const r = require("express").Router();
const {
  getBooks,
  addBook,
  updateBook,
  deleteBook,
  bulkBooks,
} = require("../controllers/bookController");
const jwt = require("jsonwebtoken");

r.use((req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.sendStatus(401);
  req.user = jwt.verify(token, process.env.JWT_SECRET);
  next();
});

r.get("/", getBooks);
r.post("/", addBook);
r.put("/:id", updateBook);
r.delete("/:id", deleteBook);
r.post("/bulk", bulkBooks);

module.exports = r;
