import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWatchlist } from "../redux/watchlistActions";

function Watchlist() {
  const dispatch = useDispatch();
  const { watchlist } = useSelector((state) => state.watchlist);

  return (
    <div>
      <h2>My Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>No movies in watchlist</p>
      ) : (
        watchlist.map((movie) => (
          <div key={movie.imdbID}>
            <span>{movie.Title}</span>
            <button onClick={() => dispatch(removeFromWatchlist(movie.imdbID))}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Watchlist;
