const { readTodos, writeTodos } = require("../models/todoModel");

let getAllTodos = (req, res) => {
  const todos = readTodos();
  res.json(todos);
};

let createTodo = (req, res) => {
  const todos = readTodos();
  const { title, completed } = req.body;

  if (!title) return res.status(400).json({ error: "Title is required" });

  const newTodo = {
    id: todos.length ? todos[todos.length - 1].id + 1 : 1,
    title,
    completed: completed || false,
  };

  todos.push(newTodo);
  writeTodos(todos);
  res.status(201).json(newTodo);
};

let searchTodos = (req, res) => {
  const { q } = req.query;
  if (!q)
    return res.status(400).json({ error: "Query parameter 'q' is required" });

  const todos = readTodos();
  const results = todos.filter((todo) =>
    todo.title.toLowerCase().includes(q.toLowerCase())
  );

  res.json(results);
};

let updateTodo = (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  const todos = readTodos();
  const index = todos.findIndex((todo) => todo.id === parseInt(id));

  if (index === -1) return res.status(404).json({ error: "Todo not found" });

  if (title !== undefined) todos[index].title = title;
  if (completed !== undefined) todos[index].completed = completed;

  writeTodos(todos);
  res.json(todos[index]);
};

let deleteTodo = (req, res) => {
  const { id } = req.params;
  let todos = readTodos();
  const index = todos.findIndex((todo) => todo.id === parseInt(id));

  if (index === -1) return res.status(404).json({ error: "Todo not found" });

  const deleted = todos.splice(index, 1);
  writeTodos(todos);
  res.json({ message: "Todo deleted", deleted });
};

module.exports = {
  getAllTodos,
  createTodo,
  searchTodos,
  updateTodo,
  deleteTodo,
};
