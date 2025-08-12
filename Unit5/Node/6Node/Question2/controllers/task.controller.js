const Task = require("../models/task.model");

// - createTask: Adds a new task with a unique title.
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
// - getTasks: Retrieves tasks filtered by priority and completion status.
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
// - updateTask: Updates a task by ID and sets completionDate if marked completed.
// - updateTask: Updates a task by ID and sets completionDate if marked completed.
exports.updateTask = async (req, res) => {
  try {
    if (req.body.isCompleted === true || req.body.isCompleted === "true") {
      req.body.completionDate = new Date();
    }

    const updated = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updated) return res.status(404).json({ message: "Task not found" });

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// - deleteTasks: Deletes tasks filtered by a specific priority.
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




// groups document by speficifed key and perfom aggregations like sum 
// lookup join document from another collection 
// unwind convert array field into multiple documents 

