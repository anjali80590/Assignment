const Student = require("../models/Student");
const Enrollment = require("../models/Enrollment");

exports.createStudent = async (req, res) => {
  const student = await Student.create(req.body);
  res.json(student);
};

exports.softDeleteStudent = async (req, res) => {
  const { id } = req.params;
  await Student.findByIdAndUpdate(id, { isActive: false });
  await Enrollment.updateMany({ studentId: id }, { isActive: false });
  res.json({ message: "Student and related enrollments marked inactive" });
};

exports.getStudentCourses = async (req, res) => {
  const { id } = req.params;
  const courses = await Enrollment.find({
    studentId: id,
    isActive: true,
  }).populate({ path: "courseId", match: { isActive: true } });
  res.json(courses.map((e) => e.courseId).filter((c) => c));
};
