import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movie() {
  const { id } = useParams(); // IMDb ID
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=4afc61b2`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true));
  }, [id]);

  if (error) return <p>Movie not found</p>;
  if (!movie) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>
        {movie.Title} ({movie.Year})
      </h2>
      <img src={movie.Poster} alt={movie.Title} width="200" />
      <p>
        <strong>Genre:</strong> {movie.Genre}
      </p>
      <p>{movie.Plot}</p>
    </div>
  );
}

export default Movie;
