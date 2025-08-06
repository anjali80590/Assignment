const express = require("express");
const router = express.Router();
// let studentController=require('../controllers/studentController')

router.post("/", studentController.createStudent);
router.delete("/:id", studentController.softDeleteStudent);
router.get("/:id/courses", studentController.getStudentCourses);

module.exports = router;
