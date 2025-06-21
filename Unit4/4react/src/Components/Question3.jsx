import React, { useState } from "react";
import axios from "axios";
import '../styles/Question3.css'

function Question3() {
  const [memes, setMemes] = useState([]);
  const [filteredMemes, setFilteredMemes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const fetchMemes = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get("https://api.imgflip.com/get_memes");
      const data = res.data.data.memes;
      setMemes(data);
      setFilteredMemes(data);
    } catch (err) {
      setError("Failed to fetch memes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = (data) => {
    let result = [...data];

    if (search) {
      result = result.filter((meme) =>
        meme.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (filterBy === "width") {
      result = result.filter((meme) => meme.width > 500);
    }

    if (filterBy === "height") {
      result = result.filter((meme) => meme.height > 500);
    }

    if (sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "width") {
      result.sort((a, b) => a.width - b.width);
    }

    setFilteredMemes(result);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    applyFilters(memes);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
    applyFilters(memes);
  };

  const handleFilter = (e) => {
    setFilterBy(e.target.value);
    applyFilters(memes);
  };

  const handleReset = () => {
    setSearch("");
    setSortBy("");
    setFilterBy("");
    setFilteredMemes(memes);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className={`app ${theme}`}>
      <div className="controls">
        <button onClick={fetchMemes}>Load Memes</button>
        <input
          type="text"
          placeholder="Search memes"
          value={search}
          onChange={handleSearch}
        />
        <select value={sortBy} onChange={handleSort}>
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="width">Width</option>
        </select>
        <select value={filterBy} onChange={handleFilter}>
          <option value="">Filter By</option>
          <option value="width">Width  500</option>
          <option value="height">Height 500</option>
        </select>
        <button onClick={handleReset}>Reset</button>
        <button onClick={toggleTheme}>
          Toggle {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && filteredMemes.length === 0 && !error && (
        <p>No memes found.</p>
      )}

      <div className="grid">
        {filteredMemes.map((meme) => (
          <div key={meme.id} className="card">
            <img src={meme.url} alt={meme.name} />
            <h4>{meme.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Question3;
