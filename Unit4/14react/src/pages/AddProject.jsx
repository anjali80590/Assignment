import React, { useState } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import { ref, push } from "firebase/database";
import { useNavigate } from "react-router-dom";

function AddProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const projectRef = ref(db, "projects");
    const newProject = {
      title,
      description,
      createdAt: new Date().toISOString(),
      tasks: {},
    };
    push(projectRef, newProject);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Project</h2>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Add Project</button>
    </form>
  );
}

export default AddProject;
