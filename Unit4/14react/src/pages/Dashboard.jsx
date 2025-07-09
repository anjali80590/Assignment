import React, { useEffect, useState } from "react";
import axios from "../axios";
import { Link } from "react-router-dom";

function Dashboard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await axios.get("/projects.json");
      const loaded = Object.entries(res.data || {}).map(([id, val]) => ({
        id,
        ...val,
      }));
      setProjects(loaded);
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <h1>All Projects</h1>
      <Link to="/add">Add New Project</Link>
      <ul>
        {projects.map((proj) => (
          <li key={proj.id}>
            <Link to={`/project/${proj.id}`}>{proj.title}</Link>
            <Link to={`/edit/${proj.id}`} style={{ marginLeft: "10px" }}>
              Edit
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
