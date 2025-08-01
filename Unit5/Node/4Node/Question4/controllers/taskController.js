const { readTasks, writeTasks } = require("../models/taskModel");

// Get all tasks
const getAllTasks = (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
};

// Filter tasks by tag
const filterTasksByTag = (req, res) => {
  const { tag } = req.query;
  if (!tag)
    return res.status(400).json({ error: "Tag query parameter is required" });

  const tasks = readTasks();
  const filtered = tasks.filter(
    (task) => task.tag.toLowerCase() === tag.toLowerCase()
  );
  res.json(filtered);
};

// Add a task
const addTask = (req, res) => {
  const { title, description, tag, priority, status } = req.body;
  if (!title || !description || !tag || !priority || !status) {
    return res
      .status(400)
      .json({
        error:
          "All fields (title, description, tag, priority, status) are required",
      });
  }

  const tasks = readTasks();
  const newTask = {
    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
    title,
    description,
    tag,
    priority,
    status,
  };

  tasks.push(newTask);
  writeTasks(tasks);

  res.status(201).json({ message: "Task added successfully", task: newTask });
};

// Update a task
const updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description, tag, priority, status } = req.body;
  const tasks = readTasks();

  const index = tasks.findIndex((task) => task.id === parseInt(id));
  if (index === -1) return res.status(404).json({ error: "Task not found" });

  if (title !== undefined) tasks[index].title = title;
  if (description !== undefined) tasks[index].description = description;
  if (tag !== undefined) tasks[index].tag = tag;
  if (priority !== undefined) tasks[index].priority = priority;
  if (status !== undefined) tasks[index].status = status;

  writeTasks(tasks);
  res.json({ message: "Task updated successfully", task: tasks[index] });
};

// Delete a task
const deleteTask = (req, res) => {
  const { id } = req.params;
  let tasks = readTasks();
  const index = tasks.findIndex((task) => task.id === parseInt(id));

  if (index === -1) return res.status(404).json({ error: "Task not found" });

  const deleted = tasks.splice(index, 1);
  writeTasks(tasks);

  res.json({ message: "Task deleted successfully", deleted });
};

module.exports = {
  getAllTasks,
  filterTasksByTag,
  addTask,
  updateTask,
  deleteTask,
};

