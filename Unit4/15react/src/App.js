import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StudentDashboard from "./pages/StudentDashboard";
import MentorView from "./pages/MentorView";

function App() {
  return (

      <div className="p-4 bg-gray-100 min-h-screen">
        <nav className="mb-4 space-x-4 text-blue-600 underline">
          <Link to="/">Student</Link>
          <Link to="/mentor">Mentor</Link>
        </nav>
        <Routes>
          <Route path="/" element={<StudentDashboard />} />
          <Route path="/mentor" element={<MentorView />} />
        </Routes>
      </div>

  );
}

export default App;
