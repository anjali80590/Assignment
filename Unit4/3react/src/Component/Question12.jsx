import React, { useState, useEffect } from "react";
function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");
  const [filterPriority, setFilterPriority] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filteredTasks, setFilteredTasks] = useState([]);
  function addTask() {
    const trimmed = title.trim();
    if (!trimmed) return;
    const newTask = {
      id: Date.now(),
      title: trimmed,
      priority,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTitle("");
  }
  function toggleComplete(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }
  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }
  useEffect(() => {
    let temp = [...tasks];
    if (filterPriority === "Low") {
      temp = temp.filter((task) => task.priority === "Low");
    } else if (filterPriority === "Medium") {
      temp = temp.filter((task) => task.priority === "Medium");
    } else if (filterPriority === "High") {
      temp = temp.filter((task) => task.priority === "High");
    } 
    if (filterStatus === "Completed") {
      temp = temp.filter((task) => task.completed);
    } else if (filterStatus === "Incomplete") {
      temp = temp.filter((task) => !task.completed);
    }

    setFilteredTasks(temp);
  }, [tasks, filterPriority, filterStatus]);
  return (
    <div>
      <h2>Task Manager</h2>

      <div>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>

      <div>
        <label>Filter Priority: </label>
        <select
          value={filterPriority}
          onChange={(e) => setFilterPriority(e.target.value)}
        >
          <option>All</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <label>Filter Status: </label>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option>All</option>
          <option>Completed</option>
          <option>Incomplete</option>
        </select>
      </div>

      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            {task.title} ({task.priority})
            <button onClick={() => toggleComplete(task.id)}>
              {task.completed ? "Completed" : "Incomplete"}
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TaskManager;
