import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const addTask = () => {
    const trimmedTitle = title.trim();
    if (trimmedTitle === "") return;

    const newTask = {
      id: Date.now(), 
      title: trimmedTitle,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTitle("");
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={title}
        placeholder="Enter task"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none", 
                marginRight: 10,
              }}
            >
              {task.title}
            </span>
            <button onClick={() => toggleComplete(task.id)}>
              {task.completed ? "InComplete" : "Complete"}
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
