const express = require("express");
const Note = require("../models/Note");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();
router.use(authMiddleware);

router.post("/", async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content)
      return res
        .status(400)
        .json({ message: "Title and content are required" });

    const note = await Note.create({ title, content, createdBy: req.user._id });
    res.status(201).json({ message: "Note created", note });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


router.get("/", async (req, res) => {
  try {
    const notes = await Note.find({ createdBy: req.user._id });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


router.put("/:id", async (req, res) => {
  try {
    const note = await Note.findOne({
      _id: req.params.id,
      createdBy: req.user._id,
    });
    if (!note) return res.status(404).json({ message: "Note not found" });

    note.title = req.body.title || note.title;
    note.content = req.body.content || note.content;
    await note.save();

    res.json({ message: "Note updated", note });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const note = await Note.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user._id,
    });
    if (!note) return res.status(404).json({ message: "Note not found" });

    res.json({ message: "Note deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
