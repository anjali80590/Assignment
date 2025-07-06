import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

function MovieList() {
  const { loading, error, movies } = useSelector((state) => state.movies);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading movies.</p>;

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
