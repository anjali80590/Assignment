import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!title.trim()) return;
    fetch(`https://www.omdbapi.com/?t=${title}&apikey=4afc61b2`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "True") {
          setError(false);
          navigate(`/movie/${data.imdbID}`);
        } else {
          setError(true);
        }
      });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Movie Search</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setError(false);
        }}
        placeholder="Enter movie title"
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p>Movie not found</p>}
    </div>
  );
}

export default Home;
