
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  fetchCountryByName,
  fetchWeatherByCity,
  fetchTopNewsByCountry,
} from "../api/api";
import Loading from "../components/Loading";
import ErrorBox from "../components/ErrorBox";
import { useFavorites } from "../context/FavoritesContext";

export default function CountryDetails() {
  const { cca2 } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState(null);
  const [news, setNews] = useState(null);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    setLoading(true);
    async function load() {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${cca2}`);
        const data = await res.json();
        const c = data[0];
        setCountry(c);
        if (c.capital && c.capital[0]) {
          try {
            const w = await fetchWeatherByCity(c.capital[0]);
            setWeather(w);
          } catch {}
        }
        if (c.cca2) {
          try {
            const newsRes = await fetchTopNewsByCountry(c.cca2);
            if (newsRes && newsRes.articles) setNews(newsRes.articles);
          } catch {}
        }
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load country details.");
        setLoading(false);
      }
    }
    load();
  }, [cca2]);

  if (loading) return <Loading />;
  if (error) return <ErrorBox message={error} />;
  if (!country) return <ErrorBox message="Country not found." />;

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "—";
  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((c) => c.name)
        .join(", ")
    : "—";
  const latlng = country.latlng || [];
  const borders = country.borders || [];

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={country.flags?.svg}
          alt={country.name.common}
          className="w-full md:w-1/3 h-auto rounded"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{country.name.official}</h1>
          <p className="mt-2">
            <strong>Capital:</strong> {country.capital?.[0] || "—"}
          </p>
          <p>
            <strong>Region:</strong> {country.region}
          </p>
          <p>
            <strong>Population:</strong> {country.population?.toLocaleString()}
          </p>
          <p>
            <strong>Languages:</strong> {languages}
          </p>
          <p>
            <strong>Currencies:</strong> {currencies}
          </p>
          <p>
            <strong>Borders:</strong>{" "}
            {borders.length
              ? borders.map((b) => (
                  <Link className="underline mr-2" key={b} to={`/country/${b}`}>
                    {b}
                  </Link>
                ))
              : "None"}
          </p>

          <div className="mt-4">
            {isFavorite(country.cca2) ? (
              <button
                onClick={() => removeFavorite(country.cca2)}
                className="px-3 py-1 border rounded"
              >
                Remove Favorite
              </button>
            ) : (
              <button
                onClick={() =>
                  addFavorite({
                    name: country.name,
                    flags: country.flags,
                    cca2: country.cca2,
                    capital: country.capital,
                  })
                }
                className="px-3 py-1 border rounded"
              >
                Add Favorite
              </button>
            )}
          </div>
        </div>
      </div>

      <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded bg-white dark:bg-gray-800">
          <h3 className="font-semibold">Map</h3>
          {latlng.length ? (
            <iframe
              title="map"
              width="100%"
              height="250"
              loading="lazy"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${
                latlng[1] - 1
              }%2C${latlng[0] - 1}%2C${latlng[1] + 1}%2C${
                latlng[0] + 1
              }&layer=mapnik&marker=${latlng[0]}%2C${latlng[1]}`}
              style={{ border: 0 }}
            />
          ) : (
            <p>No coords available.</p>
          )}
        </div>

        <div className="p-4 border rounded bg-white dark:bg-gray-800">
          <h3 className="font-semibold">Current Weather (Capital)</h3>
          {weather ? (
            <div>
              <p>
                {weather.name} — {Math.round(weather.main.temp)}°C
              </p>
              <p>{weather.weather?.[0]?.description}</p>
            </div>
          ) : (
            <p>No weather data available.</p>
          )}
        </div>
      </section>

      <section className="mt-6 p-4 border rounded bg-white dark:bg-gray-800">
        <h3 className="font-semibold">Top News</h3>
        {news && news.length ? (
          <ul className="space-y-2 mt-2">
            {news.map((a, idx) => (
              <li key={idx}>
                <a
                  href={a.url}
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  {a.title}
                </a>
                <div className="text-sm opacity-70">{a.source.name}</div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No news found for this country.</p>
        )}
      </section>
    </div>
  );
}
