import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 bg-gray-200 flex gap-4">
        <Link to="/">Feedback</Link>
        <Link to="/admin">Admin</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



// import React from "react";
// import Timer from "./components/Timer";
// import APIFetch from "./components/APIFetch";
// import TaskManager from "./components/TaskManager";

// function App() {
//   return (
//     <div style={{ padding: "1rem" }}>
//       <Timer />
//       <hr />
//       <APIFetch />
//       <hr />
//       <TaskManager />
//     </div>
//   );
// }

// export default App;
