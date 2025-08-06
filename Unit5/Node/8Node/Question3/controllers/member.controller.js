const Member = require("../models/member.model");
const Book = require("../models/book.model");

exports.addMember = async (req, res) => {
  try {
    const member = await Member.create(req.body);
    res.status(201).json({ message: "Member added", member });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.borrowBook = async (req, res) => {
  try {
    const { memberId, bookId } = req.body;

    const member = await Member.findById(memberId);
    const book = await Book.findById(bookId);

    if (!member || !book)
      return res.status(404).json({ message: "Book or Member not found" });
    if (book.status === "borrowed")
      return res.status(409).json({ message: "Book already borrowed" });

    member.borrowedBooks.push(book._id);
    book.borrowers.push(member._id);
    book.status = "borrowed";

    await member.save();
    await book.save();

    res.json({ message: "Book borrowed successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.returnBook = async (req, res) => {
  try {
    const { memberId, bookId } = req.body;

    await Member.findByIdAndUpdate(memberId, {
      $pull: { borrowedBooks: bookId },
    });
    const book = await Book.findByIdAndUpdate(
      bookId,
      {
        $pull: { borrowers: memberId },
        status: "available",
      },
      { new: true }
    );

    res.json({ message: "Book returned", book });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getMemberBorrowedBooks = async (req, res) => {
  try {
    const member = await Member.findById(req.params.memberId).populate(
      "borrowedBooks"
    );
    res.json(member);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
