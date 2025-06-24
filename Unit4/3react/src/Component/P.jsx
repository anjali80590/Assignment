import React, { useEffect, useState } from "react";

function P() {
  const [filterby, setFilterBy] = useState("all");

  const [students, setStudents] = useState([
    { id: 1, name: "Anjali", present: true },
    { id: 2, name: "Ravi", present: false },
    { id: 3, name: "Sneha", present: true },
    { id: 4, name: "Arjun", present: false },
    { id: 5, name: "Maya", present: true },
  ]);

  const [filteredStudents, setFilteredStudents] = useState([]);

  // Toggle present/absent
  function handlePresent(id) {
    const updated = students.map((student) =>
      student.id === id ? { ...student, present: !student.present } : student
    );
    setStudents(updated);
  }

  // Count of present students (from full list)
  const presentCounter = students.filter((student) => student.present).length;

  // Apply filtering
  useEffect(() => {
    let result = [...students];

    if (filterby === "present") {
      result = result.filter((student) => student.present);
    } else if (filterby === "absent") {
      result = result.filter((student) => !student.present);
    }

    setFilteredStudents(result);
  }, [filterby, students]);

  return (
    <div>
      <h1>Student Attendance</h1>
      <p>Present Count: {presentCounter}</p>

      <select value={filterby} onChange={(e) => setFilterBy(e.target.value)}>
        <option value="all">All</option>
        <option value="present">Present</option>
        <option value="absent">Absent</option>
      </select>

      <ul>
        {filteredStudents.map((student) => (
          <li key={student.id}>
            <span style={{ marginRight: "1rem" }}>{student.name}</span>
            <button onClick={() => handlePresent(student.id)}>
              {student.present ? "Present" : "Absent"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default P;
