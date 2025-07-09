
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMatches } from "./redux/actions";

function FootballApp() {
  const dispatch = useDispatch();
  const { isLoading, isError, footballMatches } = useSelector(
    (state) => state.matches
  );

  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchMatches());
  }, [dispatch]);

  const filtered = footballMatches.filter((match) =>
    [match.team1, match.team2, match.venue].some((field) =>
      (field || "").toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>⚽ Football Matches</h1>

      <input
        type="text"
        placeholder="Search by team or venue"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", width: "100%", marginBottom: "20px" }}
      />

      {isLoading ? (
        <p>Loading matches...</p>
      ) : isError ? (
        <p style={{ color: "red" }}>Error loading matches</p>
      ) : filtered.length === 0 ? (
        <p>No matches found.</p>
      ) : (
        filtered.map((match, idx) => (
          <div
            key={idx}
            style={{
              border: "1px solid #ccc",
              marginBottom: "10px",
              padding: "10px",
              borderRadius: "6px",
              background: "#f9f9f9",
            }}
          >
            <strong>
              {match.team1} vs {match.team2}
            </strong>
            <p>Date: {match.date}</p>
            <p>Venue: {match.venue}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default FootballApp;
