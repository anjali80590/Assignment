import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [city, setCity] = useState("");
  const navigate = useNavigate();
  return (
    <div style={{ padding: 20 }}>
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={() => navigate(`/weather/${city}`)}>Search</button>
    </div>
  );
}
