const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

const DB_FILE = "./db5.json";
const readData = () => JSON.parse(fs.readFileSync(DB_FILE, "utf-8"));
const writeData = (data) =>
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));

app.post("/students", (req, res) => {
  const { name, course, batch } = req.body;
  if (!name || !course || !batch) {
    return res
      .status(400)
      .json({ message: "Name, course, and batch are required" });
  }

  const data = readData();
  const students = data.students;

  const newStudent = {
    id: students.length ? students[students.length - 1].id + 1 : 1,
    name,
    course,
    batch,
  };

  students.push(newStudent);
  writeData(data);

  res.status(201).json(newStudent);
});

app.get("/students", (req, res) => {
  const data = readData();
  res.status(200).json(data.students);
});

app.get("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const data = readData();
  const student = data.students.find((s) => s.id === id);

  if (!student) return res.status(404).json({ message: "Student not found" });

  res.status(200).json(student);
});

app.put("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, course, batch } = req.body;

  const data = readData();
  const students = data.students;
  const index = students.findIndex((s) => s.id === id);

  if (index === -1)
    return res.status(404).json({ message: "Student not found" });

  students[index] = {
    ...students[index],
    name: name || students[index].name,
    course: course || students[index].course,
    batch: batch || students[index].batch,
  };

  writeData(data);
  res.status(200).json(students[index]);
});
app.delete("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const data = readData();
  const students = data.students;

  const updatedStudents = students.filter((s) => s.id !== id);
  if (updatedStudents.length === students.length) {
    return res.status(404).json({ message: "Student not found" });
  }

  data.students = updatedStudents;
  writeData(data);
  res.status(200).json({ message: "Student deleted successfully" });
});

app.get("/students/search", (req, res) => {
  const { course } = req.query;

  if (!course) {
    return res.status(400).json({ message: "Please provide a course name" });
  }

  const data = readData();
  const students = data.students.filter((s) =>
    s.course.toLowerCase().includes(course.toLowerCase())
  );

  if (students.length === 0) {
    return res.status(404).json({ message: "No students found" });
  }

  res.status(200).json(students);
});


app.use((req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});


app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});
