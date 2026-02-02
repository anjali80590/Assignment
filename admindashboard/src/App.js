import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Projects from "./Projects";
import ProjectDetail from "./ProjectDetail";
import Notes from "./Notes";
import NoteDetail from "./NoteDetail";
import Login from "./Login";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/projects"
        element={
          <ProtectedRoute>
            <Projects />
          </ProtectedRoute>
        }
      />

      <Route
        path="/projects/:projectId"
        element={
          <ProtectedRoute>
            <ProjectDetail />
          </ProtectedRoute>
        }
      />

      <Route
        path="/notes"
        element={
          <ProtectedRoute>
            <Notes />
          </ProtectedRoute>
        }
      />

      <Route
        path="/notes/:noteId"
        element={
          <ProtectedRoute>
            <NoteDetail />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
