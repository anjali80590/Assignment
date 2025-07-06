import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "./redux/actions";
function FilterBar() {
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("");

  const dispatch = useDispatch();

  const applyFilters = () => {
    dispatch(setFilter({ genre, author, status }));
  };

  const resetFilters = () => {
    setGenre("");
    setAuthor("");
    setStatus("");
    dispatch(setFilter({ genre: "", author: "", status: "" }));
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Filter Books</h3>

      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        style={{ marginRight: "10px" }}
      >
        <option value="">All</option>
        <option value="read">Read</option>
        <option value="unread">Unread</option>
      </select>

      <button onClick={applyFilters}>Apply Filters</button>
      <button onClick={resetFilters} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}

export default FilterBar;
