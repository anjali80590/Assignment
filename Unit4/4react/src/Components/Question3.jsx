import React, { useState, useEffect } from "react";
import axios from "axios";

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
      setMemes(res.data.data.memes);
    } catch (err) {
      setError("Something went wrong while fetching memes.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let temp = [...memes];

    if (search) {
      temp = temp.filter((meme) =>
        meme.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (filterBy === "width") {
      temp = temp.filter((meme) => meme.width > 500);
    } else if (filterBy === "height") {
      temp = temp.filter((meme) => meme.height > 500);
    }

    if (sortBy === "name") {
      temp.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "width") {
      temp.sort((a, b) => a.width - b.width);
    }

    setFilteredMemes(temp);
  }, [memes, search, sortBy, filterBy]);

  const handleReset = () => {
    setSearch("");
    setSortBy("");
    setFilterBy("");
  };

  const toggleTheme = () => {
    const updatedTheme = theme === "light" ? "dark" : "light";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };

  return (
    <div className={`app ${theme}`}>
      <h2>Meme Explorer</h2>

      <div className="controls">
        <button onClick={fetchMemes}>Fetch Memes</button>

        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="">Sort</option>
          <option value="name">Name</option>
          <option value="width">Width</option>
        </select>

        <select value={filterBy} onChange={(e) => setFilterBy(e.target.value)}>
          <option value="">Filter</option>
          <option value="width">Width 500</option>
          <option value="height">Height  500</option>
        </select>

        <button onClick={handleReset}>Reset</button>
        <button onClick={toggleTheme}>
          {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>

      {loading && <p>Loading memes...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && filteredMemes.length === 0 && !error && (
        <p>No memes found.</p>
      )}

      <div className="grid">
        {filteredMemes.map((meme) => (
          <div key={meme.id} className="card">
            <img src={meme.url} alt={meme.name} />
            <p>{meme.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Question3;
