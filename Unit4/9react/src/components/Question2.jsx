import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Question2() {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const todosPerPage = 10;

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    });
  }, []);

  const totalPages = Math.ceil(todos.length / todosPerPage);
  const start = (currentPage - 1) * todosPerPage;
  const end = start + todosPerPage;
  const currentTodos = todos.slice(start, end);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Todos - Page {currentPage}</h2>
      <ul>
        {currentTodos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>

      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              backgroundColor: currentPage === i + 1 ? "#add8e6" : "",
            }}
          >
            {i + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
