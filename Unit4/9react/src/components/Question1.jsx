import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function Question1() {
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const currentPageRef = useRef(1);

  const fetchCharacters = async (page = 1) => {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    setCharacters(res.data.results);
    setTotalPages(res.data.info.pages);
  };

  useEffect(() => {
    fetchCharacters(currentPageRef.current);
  }, []);

  const changePage = (page) => {
    currentPageRef.current = page;
    fetchCharacters(page);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Rick & Morty Characters - Page {currentPageRef.current}</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "1rem",
        }}
      >
        {characters.map((char) => (
          <div
            key={char.id}
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              textAlign: "center",
            }}
          >
            <img
              src={char.image}
              alt={char.name}
              width="100"
              height="100"
              style={{ borderRadius: "50%" }}
            />
            <p>{char.name}</p>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        {[...Array(totalPages).keys()].map((num) => {
          const pageNum = num + 1;
          return (
            <button
              key={pageNum}
              onClick={() => changePage(pageNum)}
              style={{
                backgroundColor:
                  currentPageRef.current === pageNum ? "#90ee90" : "",
              }}
            >
              {pageNum}
            </button>
          );
        })}
      </div>
    </div>
  );
}
