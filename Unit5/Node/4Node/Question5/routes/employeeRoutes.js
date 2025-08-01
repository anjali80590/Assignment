const express = require("express");
const {
  getAllEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");
const roleCheckMiddleware = require("../middlewares/roleCheckMiddleware");

const router = express.Router();

// Routes
router.get("/", roleCheckMiddleware(["admin", "hr"]), getAllEmployees);
router.post("/", roleCheckMiddleware(["admin"]), addEmployee);
router.put("/:id", roleCheckMiddleware(["admin", "hr"]), updateEmployee);
router.delete("/:id", roleCheckMiddleware(["admin"]), deleteEmployee);

module.exports = router;
