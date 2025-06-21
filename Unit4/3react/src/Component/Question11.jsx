import React, { useState } from "react";

function Question11() {
  const [taskInput, setTaskInput] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    const trimmed = taskInput.trim();
    if (trimmed === "") return;
    setTaskList([
      ...taskList,
      { id: Date.now(), text: trimmed, completed: false },
    ]);
    setTaskInput("");
  };

  const toggleComplete = (id) => {
    const updated = taskList.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTaskList(updated);
  };

  const deleteTask = (id) => {
    const updated = taskList.filter((task) => task.id !== id);
    setTaskList(updated);
  };

  return (
    <div>
      <h2>To-Do List</h2>

      <input
        type="text"
        placeholder="Enter task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      <ul>
        {taskList.map((task) => (
          <li key={task.id}>
            <span
              onClick={() => toggleComplete(task.id)}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question11;
