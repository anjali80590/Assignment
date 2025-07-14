import React, { useState } from "react";

enum Priority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}

interface Task {
  id: number;
  description: string;
  priority: Priority;
  completed: boolean;
}

function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [desc, setDesc] = useState<string>("");
  const [priority, setPriority] = useState<Priority>(Priority.Low);
  const [filter, setFilter] = useState<"all" | "completed" | "incomplete">(
    "all"
  );

  function addTask() {
    if (desc.trim()) {
      const newTask: Task = {
        id: Date.now(),
        description: desc,
        priority,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setDesc("");
    }
  }

  function toggleComplete(id: number) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  return (
    <div>
      <h2>Task Manager</h2>
      <input
        type="text"
        placeholder="Task description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as Priority)}
      >
        <option value={Priority.Low}>Low</option>
        <option value={Priority.Medium}>Medium</option>
        <option value={Priority.High}>High</option>
      </select>
      <button onClick={addTask}>Add</button>

      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("incomplete")}>Incomplete</button>
      </div>

      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
            />
            {task.description} ({task.priority})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
