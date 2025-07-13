import React from "react";

export default function MentorDashboard({ students }) {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">📘 Mentor Dashboard</h2>
      {students.map((student, i) => (
        <div key={i} className="border p-3 rounded mb-4 bg-white">
          <p className="text-sm text-gray-600">Student {i + 1}</p>
          <p className="mb-2">{student.reflection}</p>
          <textarea
            placeholder="Add a positive comment..."
            className="w-full border p-2 rounded mb-2"
          />
          <button className="text-sm bg-blue-500 text-white px-3 py-1 rounded">
            Send Comment
          </button>
        </div>
      ))}
    </div>
  );
}
