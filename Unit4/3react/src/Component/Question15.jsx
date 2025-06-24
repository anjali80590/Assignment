import React, { useEffect, useState } from "react";

function Question15() {
  const [filterby, setFilterBy] = useState("all");
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [students, setStudents] = useState([
    { id: 1, name: "Anjali", present: true },
    { id: 2, name: "Ravi", present: false },
    { id: 3, name: "Sneha", present: true },
    { id: 4, name: "Arjun", present: false },
    { id: 5, name: "Maya", present: true },
  ]);
  function handlePresent(id) {
    const updated = students.map((student) =>
      student.id === id ? { ...student, present: !student.present } : student
    );
    setStudents(updated);
  }
  const presentCounter = students.filter((student) => student.present).length;
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

export default Question15;
