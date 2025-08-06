const Course = require("../models/Course");
const Enrollment = require("../models/Enrollment");

exports.createCourse = async (req, res) => {
  const course = await Course.create(req.body);
  res.json(course);
};

exports.softDeleteCourse = async (req, res) => {
  const { id } = req.params;
  await Course.findByIdAndUpdate(id, { isActive: false });
  await Enrollment.updateMany({ courseId: id }, { isActive: false });
  res.json({ message: "Course and related enrollments marked inactive" });
};

exports.getCourseStudents = async (req, res) => {
  const { id } = req.params;
  const students = await Enrollment.find({
    courseId: id,
    isActive: true,
  }).populate({ path: "studentId", match: { isActive: true } });
  res.json(students.map((e) => e.studentId).filter((s) => s));
};
