const express = require("express");
const router = express.Router();
const {
  getAllTodos,
  createTodo,
  searchTodos,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

router.get("/", getAllTodos);
router.post("/", createTodo);
router.get("/search", searchTodos);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
