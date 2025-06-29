import React, { useEffect, useState } from "react";

function Question2() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      setQuote(data);
    } catch (e) {
      setQuote({ content: "Error fetching quote", author: "API" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
    const interval = setInterval(fetchQuote, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={fetchQuote}>Get New Quote</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>{quote?.content}</p>
          <small>- {quote?.author}</small>
        </>
      )}
    </div>
  );
}

export default Question2;
