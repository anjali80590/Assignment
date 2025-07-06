import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function CountrySearch() {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [page, setPage] = useState(1);
  const [usePagination, setUsePagination] = useState(true);
  const queryRef = useRef("");

  const getCountries = async () => {
    try {
      const res = await axios.get(`https://api.first.org/data/v1/countries`);
      const entries = Object.entries(res.data.data);
      const filtered = entries.filter(([code, country]) =>
        country.country.toLowerCase().includes(queryRef.current.toLowerCase())
      );
      setCountries(filtered);
    } catch (err) {
      console.log("Error fetching countries");
    }
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      queryRef.current = query;
      getCountries();
      setPage(1);
    }, 500);

    return () => clearTimeout(debounce);
  }, [query]);

  const itemsPerPage = 10;
  const start = (page - 1) * itemsPerPage;
  const paginated = countries.slice(start, start + itemsPerPage);

  const visibleItems = usePagination ? paginated : countries;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Country Search</h2>
      <input
        type="text"
        placeholder="Type country..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <div style={{ margin: "1rem 0" }}>
        <label>
          <input
            type="checkbox"
            checked={usePagination}
            onChange={() => setUsePagination(!usePagination)}
          />{" "}
          Use Pagination
        </label>
      </div>
      <ul>
        {visibleItems.map(([code, country]) => (
          <li key={code}>{country.country}</li>
        ))}
      </ul>
      {usePagination && (
        <div style={{ marginTop: "1rem" }}>
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
          >
            Prev
          </button>
          <span style={{ margin: "0 1rem" }}>Page: {page}</span>
          <button
            onClick={() =>
              setPage((p) =>
                p < Math.ceil(countries.length / itemsPerPage) ? p + 1 : p
              )
            }
            disabled={start + itemsPerPage >= countries.length}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
