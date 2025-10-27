
import axios from "axios";
const REST_COUNTRIES_BASE = "https://restcountries.com/v3.1";
const OPENWEATHER_BASE = "https://api.openweathermap.org/data/2.5";
const NEWSAPI_BASE = "https://newsapi.org/v2";
const OPENWEATHER_KEY = process.env.REACT_APP_OPENWEATHER_KEY || "{OPENWEATHER_API_KEY}";
const NEWSAPI_KEY = process.env.REACT_APP_NEWSAPI_KEY || "{NEWSAPI_KEY}";

export async function fetchAllCountries() {
  const url = `${REST_COUNTRIES_BASE}/all?fields=name,cca2,capital,region,flags,population,area,latlng,languages,currencies,borders,cca3,cioc`;
  const { data } = await axios.get(url);
  return data;
}
export async function fetchCountryByName(name) {
  const url = `${REST_COUNTRIES_BASE}/name/${encodeURIComponent(name)}?fullText=true`;
  const { data } = await axios.get(url);
  return data[0];
}
export async function fetchWeatherByCity(city) {
  const url = `${OPENWEATHER_BASE}/weather?q=${encodeURIComponent(city)}&units=metric&appid=${OPENWEATHER_KEY}`;
  const { data } = await axios.get(url);
  return data;
}
export async function fetchTopNewsByCountry(countryCode) {
  const url = `${NEWSAPI_BASE}/top-headlines?country=${countryCode.toLowerCase()}&pageSize=3&apiKey=${NEWSAPI_KEY}`;
  const { data } = await axios.get(url);
  return data;
}
