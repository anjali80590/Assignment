const Enrollment = require("../models/Enrollment");
const Student = require("../models/Student");
const Course = require("../models/Course");

exports.enrollStudent = async (req, res) => {
  const { studentId, courseId } = req.body;

  const student = await Student.findById(studentId);
  const course = await Course.findById(courseId);

  if (!student || !student.isActive)
    return res.status(400).json({ error: "Invalid or inactive student" });

  if (!course || !course.isActive)
    return res.status(400).json({ error: "Invalid or inactive course" });

  const enrollment = await Enrollment.create({ studentId, courseId });
  res.json(enrollment);
};
