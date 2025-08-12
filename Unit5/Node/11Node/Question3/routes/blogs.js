const express = require("express");
const Blog = require("../models/Blog");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();
router.use(authMiddleware);


router.post("/", async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    if (!title || !content)
      return res.status(400).json({ message: "Title and content required" });

    const blog = await Blog.create({
      title,
      content,
      tags: Array.isArray(tags) ? tags : tags ? [tags] : [],
      createdBy: req.user._id,
    });

    res.status(201).json({ message: "Blog created", blog });
  } catch (err) {
    console.error("Create blog error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find({ createdBy: req.user._id }).sort({
      createdAt: -1,
    });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updated = await Blog.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user._id },
      {
        $set: {
          title: req.body.title,
          content: req.body.content,
          tags: req.body.tags
            ? Array.isArray(req.body.tags)
              ? req.body.tags
              : [req.body.tags]
            : undefined,
        },
      },
      { new: true, runValidators: true }
    );

    if (!updated)
      return res.status(404).json({ message: "Blog not found or not allowed" });
    res.json({ message: "Blog updated", blog: updated });
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ message: "Server error" });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Blog.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user._id,
    });
    if (!deleted)
      return res.status(404).json({ message: "Blog not found or not allowed" });
    res.json({ message: "Blog deleted" });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ message: "Server error" });
  }
});


router.get("/stats", async (req, res) => {
  try {
    const agg = Blog.aggregate([
      {
        $group: {
          _id: "$createdBy",
          count: { $sum: 1 },
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "user",
        },
      },
      { $unwind: "$user" },
      {
        $project: {
          _id: 0,
          userId: "$user._id",
          name: "$user.name",
          email: "$user.email",
          blogCount: "$count",
        },
      },
    ]);

    const tagsAgg = Blog.aggregate([
      { $unwind: { path: "$tags", preserveNullAndEmptyArrays: false } },
      { $group: { _id: "$tags", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $project: { _id: 0, tag: "$_id", count: 1 } },
      { $limit: 10 },
    ]);


    const totalPromise = Blog.countDocuments();

    const [byUser, topTags, totalBlogs] = await Promise.all([
      agg.exec(),
      tagsAgg.exec(),
      totalPromise,
    ]);

    res.json({
      totalBlogs,
      blogsPerUser: byUser,
      topTags: topTags,
    });
  } catch (err) {
    console.error("Stats error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
