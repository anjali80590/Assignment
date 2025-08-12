const Content = require("../models/Content");

exports.createContent = async (req, res) => {
  try {
    const { title, body, category } = req.body;
    if (!title || !body)
      return res.status(400).json({ message: "title & body required" });
    if (!["free", "premium"].includes(category))
      return res.status(400).json({ message: "Invalid category" });

    const content = await Content.create({
      title,
      body,
      category,
      createdBy: req.user._id,
    });
    res.status(201).json({ message: "Content created", content });
  } catch (err) {
    console.error("Create content error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteContent = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Content.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Content not found" });
    res.json({ message: "Content deleted" });
  } catch (err) {
    console.error("Delete content error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getFree = async (req, res) => {
  try {
    const items = await Content.find({ category: "free" }).sort({
      createdAt: -1,
    });
    res.json(items);
  } catch (err) {
    console.error("Get free content error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getPremium = async (req, res) => {
  try {
    // user must be premium or pro
    const plan = req.user.subscription?.plan || "free";
    if (!["premium", "pro"].includes(plan))
      return res
        .status(403)
        .json({ message: "Upgrade to premium to access this content" });

    const items = await Content.find({ category: "premium" }).sort({
      createdAt: -1,
    });
    res.json(items);
  } catch (err) {
    console.error("Get premium content error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
