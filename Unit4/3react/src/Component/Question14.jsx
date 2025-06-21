import React, { useState } from "react";

function Question14() {
  const [tasks, setTasks] = useState(["Buy milk", "Study React"]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    const trimmed = newTask.trim();
    if (trimmed === "") return;
    setTasks([...tasks, trimmed]);
    setNewTask("");
  };

  const clearAll = () => {
    setTasks([]);
  };

  return (
    <div>
      <h2>Todo List</h2>

      <input
        type="text"
        placeholder="Enter a task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>
      <button onClick={clearAll}>Clear All</button>

      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Question14;
