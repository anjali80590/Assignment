const filteredCities = cities
  .filter((city) => city.pollution > 150)
  .filter((city) => city.population >= 15)
  .sort((a, b) => a.city.localeCompare(b.city));

const totalPollution = filteredCities.reduce(
  (sum, city) => sum + city.pollution,
  0
);

const top3Polluted = [...filteredCities]
  .sort((a, b) => b.pollution - a.pollution)
  .slice(0, 3);

const groupedByRegion = filteredCities.reduce((acc, city) => {
  if (!acc[city.region]) acc[city.region] = [];
  acc[city.region].push(city);
  return acc;
}, {});

console.log("Filtered Cities:", filteredCities);
console.log("Total Pollution:", totalPollution);
console.log("Top 3 Polluted:", top3Polluted);
console.log("Grouped by Region:", groupedByRegion);
