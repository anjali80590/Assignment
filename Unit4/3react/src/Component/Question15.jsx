import React, { useState } from "react";

function Question15() {
  const [filter, setFilter] = useState("All");

  const [students, setStudents] = useState([
    { id: 1, name: "Anjali", present: true },
    { id: 2, name: "Ravi", present: false },
    { id: 3, name: "Sneha", present: true },
    { id: 4, name: "Arjun", present: false },
    { id: 5, name: "Maya", present: true },
  ]);

  const toggleAttendance = (id) => {
    const updated = students.map((student) =>
      student.id === id ? { ...student, present: !student.present } : student
    );
    setStudents(updated);
  };

  const filteredStudents = students.filter((student) => {
    if (filter === "All") return true;
    if (filter === "Present") return student.present;
    if (filter === "Absent") return !student.present;
    return true;
  });

  const presentCount = students.filter((s) => s.present).length;

  return (
    <div>
      <h2>Attendance Manager</h2>

      <label>Filter: </label>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
      </select>

      <p>Total Present: {presentCount}</p>

      <ul>
        {filteredStudents.map((student) => (
          <li key={student.id}>
            <span
              style={{
                color: student.present ? "green" : "red",
                fontWeight: "bold",
                marginRight: "10px",
              }}
            >
              {student.name} - {student.present ? "Present" : "Absent"}
            </span>
            <button onClick={() => toggleAttendance(student.id)}>Toggle</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question15;
