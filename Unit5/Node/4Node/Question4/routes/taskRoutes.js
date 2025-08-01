const express = require("express");
const {
  getAllTasks,
  filterTasksByTag,
  addTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const router = express.Router();

router.get("/", getAllTasks);
router.get("/filter", filterTasksByTag);
router.post("/", addTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
