const express = require("express");
const router = express.Router();
const controller = require("../controllers/task.controller");
const { validateTaskData } = require("../middleware/task.middleware");

router.post("/tasks", validateTaskData, controller.createTask);
router.get("/tasks", controller.getTasks);
router.patch("/tasks/:id", validateTaskData, controller.updateTask);
router.delete("/tasks", controller.deleteTasks);

module.exports = router;
