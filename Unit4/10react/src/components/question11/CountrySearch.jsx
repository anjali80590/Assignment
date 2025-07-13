import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CountrySearch() {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [page, setPage] = useState(1);

  const itemsPerPage = 10;

  useEffect(() => {
    axios.get("https://api.first.org/data/v1/countries").then((res) => {
      const entries = Object.entries(res.data.data);
      setCountries(entries);
      setFiltered(entries);
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const result = countries.filter(([_, country]) =>
        country.country.toLowerCase().includes(query.toLowerCase())
      );
      setFiltered(result);
      setPage(1);
    }, 500);

    return () => clearTimeout(timer);
  }, [query, countries]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const paginated = filtered.slice(start, start + itemsPerPage);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>🌍 Country Search (Debounced)</h2>

      <input
        type="text"
        placeholder="Search country..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul>
        {paginated.map(([code, country]) => (
          <li key={code}>{country.country}</li>
        ))}
      </ul>

      <div style={{ marginTop: "1rem" }}>
        <button onClick={() => setPage((p) => Math.max(p - 1, 1))}>Prev</button>
        <span style={{ margin: "0 10px" }}>Page {page}</span>
        <button onClick={() => setPage((p) => Math.min(p + 1, totalPages))}>
          Next
        </button>
      </div>
    </div>
  );
}
