import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchMovies } from "../redux/movieActions";

function SearchBar() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (query.trim()) dispatch(searchMovies(query));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search movie"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
