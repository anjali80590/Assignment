const Task = require("../models/task.model");

exports.createTask = async (req, res) => {
  try {
    const existing = await Task.findOne({ title: req.body.title });
    if (existing)
      return res.status(400).json({ message: "Title must be unique." });

    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const { priority, isCompleted } = req.query;
    const filter = {};

    if (priority) filter.priority = priority.toLowerCase();
    if (isCompleted) filter.isCompleted = isCompleted === "true";

    const tasks = await Task.find(filter);
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    if (updates.isCompleted === true || updates.isCompleted === "true") {
      updates.completionDate = new Date();
    }

    const task = await Task.findByIdAndUpdate(id, updates, { new: true });

    if (!task) return res.status(404).json({ message: "Task not found" });

    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteTasks = async (req, res) => {
  try {
    const { priority } = req.query;
    if (!priority)
      return res.status(400).json({ message: "Priority filter is required" });

    const deleted = await Task.deleteMany({ priority: priority.toLowerCase() });
    res.status(200).json({ message: `${deleted.deletedCount} tasks deleted.` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
