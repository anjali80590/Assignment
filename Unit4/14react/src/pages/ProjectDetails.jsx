import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { ref, get, remove, update, push } from "firebase/database";
import { useParams, useNavigate } from "react-router-dom";

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState(null);
  const [taskInput, setTaskInput] = useState("");
  const [priority, setPriority] = useState("low");

  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("createdAt");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProject = async () => {
    try {
      const snapshot = await get(ref(db, `projects/${id}`));
      if (snapshot.exists()) {
        setProject(snapshot.val());
      }
    } catch (err) {
      setError("Failed to load project.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProject();
  }, [id]);

  const addTask = async () => {
    if (taskInput.trim() === "") return;
    const taskRef = ref(db, `projects/${id}/tasks`);
    const newTask = {
      title: taskInput,
      completed: false,
      priority,
      createdAt: new Date().toISOString(),
    };
    await push(taskRef, newTask);
    setTaskInput("");
    setPriority("low");
    fetchProject();
  };

  const toggleComplete = async (taskId, currentVal) => {
    const taskRef = ref(db, `projects/${id}/tasks/${taskId}`);
    await update(taskRef, { completed: !currentVal });
    fetchProject();
  };

  const deleteTask = async (taskId) => {
    await remove(ref(db, `projects/${id}/tasks/${taskId}`));
    fetchProject();
  };

  const deleteProject = async () => {
    await remove(ref(db, `projects/${id}`));
    navigate("/");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // Filtering, Searching, Sorting, Pagination
  const filteredTasks = Object.entries(project.tasks || {})
    .filter(([_, task]) => {
      if (filter === "all") return true;
      if (filter === "completed") return task.completed;
      if (filter === "incomplete") return !task.completed;
      return task.priority === filter;
    })
    .filter(([_, task]) =>
      task.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort(([, a], [, b]) => {
      if (sortBy === "createdAt")
        return new Date(a.createdAt) - new Date(b.createdAt);
      const p = { low: 1, medium: 2, high: 3 };
      return p[b.priority] - p[a.priority];
    });

  const totalPages = Math.ceil(filteredTasks.length / tasksPerPage);
  const paginatedTasks = filteredTasks.slice(
    (currentPage - 1) * tasksPerPage,
    currentPage * tasksPerPage
  );

  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <button onClick={deleteProject}>Delete Project</button>

      <hr />
      <h3>Add Task</h3>
      <input
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Task title"
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={addTask}>Add</button>

      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
        style={{ marginBottom: "10px", padding: "5px" }}
      />

      <div>
        <label>Filter: </label>
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>

        <label style={{ marginLeft: "10px" }}>Sort by: </label>
        <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
          <option value="createdAt">Created Time</option>
          <option value="priority">Priority</option>
        </select>
      </div>

      <ul>
        {paginatedTasks.map(([tid, task]) => (
          <li key={tid}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                marginRight: "10px",
              }}
            >
              {task.title} ({task.priority})
            </span>
            <button onClick={() => toggleComplete(tid, task.completed)}>
              {task.completed ? "Undo" : "Done"}
            </button>
            <button onClick={() => deleteTask(tid)}>Delete</button>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "10px" }}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            disabled={i + 1 === currentPage}
            style={{
              margin: "2px",
              fontWeight: i + 1 === currentPage ? "bold" : "normal",
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProjectDetails;
