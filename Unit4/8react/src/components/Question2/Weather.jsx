import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Weather() {
  const { city } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`
    )
      .then((res) => res.json())
      .then(setData);
  }, [city]);

  if (!data) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>{data.name}</h2>
      <p>Temp: {data.main.temp}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Condition: {data.weather[0].main}</p>
      <iframe
        width="300"
        height="200"
        loading="lazy"
        src={`https://maps.google.com/maps?q=${data.name}&output=embed`}
      ></iframe>
    </div>
  );
}

export default Weather;
