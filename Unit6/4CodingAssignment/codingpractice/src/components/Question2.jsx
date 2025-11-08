import React, { useState, useEffect } from "react";

const JokeApp = () => {
  const [currentJoke, setCurrentJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState([]);
  const [jokeCount, setJokeCount] = useState(1);

  const fetchJoke = async (count = 1) => {
    setLoading(true);
    setError(null);

    try {
      const jokes = [];
      for (let i = 0; i < count; i++) {
        const response = await fetch(
          "https://official-joke-api.appspot.com/random_joke"
        );
        const joke = await response.json();
        jokes.push(joke);
      }

      if (count === 1) {
        setCurrentJoke(jokes[0]);
      }

      setHistory((prev) => {
        const newHistory = [...jokes, ...prev];
        return newHistory.slice(0, 5);
      });
    } catch (err) {
      setError("Failed to fetch joke.");
    } finally {
      setLoading(false);
    }
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const getLongestSetup = () => {
    if (history.length === 0) return null;
    return history.reduce((longest, joke) =>
      joke.setup.length > longest.setup.length ? joke : longest
    );
  };

  const longestJoke = getLongestSetup();

  return (
    <div>
      <div>
        <button onClick={() => fetchJoke(1)} disabled={loading}>
          Get Random Joke
        </button>

        <div>
          <input
            type="number"
            min="1"
            max="5"
            value={jokeCount}
            onChange={(e) => setJokeCount(Number(e.target.value))}
          />
          <button onClick={() => fetchJoke(jokeCount)} disabled={loading}>
            Fetch {jokeCount} Joke{jokeCount > 1 ? "s" : ""}
          </button>
        </div>

        <button onClick={clearHistory}>Clear History</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {currentJoke && !loading && (
        <div>
          <h3>Current Joke:</h3>
          <p>{currentJoke.setup}</p>
          <p>{currentJoke.punchline}</p>
        </div>
      )}

      <div>
        <h3>Last 5 Jokes:</h3>
        <ul>
          {history.map((joke, index) => (
            <li
              key={index}
              style={{
                backgroundColor:
                  longestJoke && joke.setup === longestJoke.setup
                    ? "#ffffcc"
                    : "transparent",
              }}
            >
              <p>{joke.setup}</p>
              <p>{joke.punchline}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JokeApp;
