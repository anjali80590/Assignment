import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { ref, get, update } from "firebase/database";
import { useNavigate, useParams } from "react-router-dom";

function EditProject() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchProject = async () => {
      const projectRef = ref(db, `projects/${id}`);
      const snapshot = await get(projectRef);
      if (snapshot.exists()) {
        const data = snapshot.val();
        setTitle(data.title || "");
        setDescription(data.description || "");
      }
    };
    fetchProject();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const projectRef = ref(db, `projects/${id}`);
    await update(projectRef, {
      title,
      description,
    });
    navigate("/");
  };

  return (
    <form onSubmit={handleUpdate}>
      <h2>Edit Project</h2>
      <input
        type="text"
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
      <button type="submit">Update</button>
    </form>
  );
}

export default EditProject;
