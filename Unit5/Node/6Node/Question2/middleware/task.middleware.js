module.exports.validateTaskData = (req, res, next) => {
  const { title, description, priority } = req.body;
  if (!title || !description || !priority) {
    return res.status(400).json({ message: "Incomplete Data Received" });
  }

  const allowedPriorities = ["low", "medium", "high"];
  if (!allowedPriorities.includes(priority.toLowerCase())) {
    return res
      .status(400)
      .json({ message: "Priority must be 'low', 'medium', or 'high'" });
  }

  // Normalize priority to lowercase
  req.body.priority = priority.toLowerCase();

  next();
};
