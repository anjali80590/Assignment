import React from "react";
import { useDispatch } from "react-redux";
import { addToWatchlist } from "../redux/watchlistActions";

function MovieCard({ movie }) {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <img src={movie.Poster} alt={movie.Title} width="100" />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <button onClick={() => dispatch(addToWatchlist(movie))}>
        Add to Watchlist
      </button>
    </div>
  );
}

export default MovieCard;
