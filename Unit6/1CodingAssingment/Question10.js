const filteredMovies = movies
  .filter((movie) => movie.genre === "Sci-Fi" && movie.rating >= 8)
  .sort((a, b) => a.year - b.year);

const titles = filteredMovies.map((movie) => movie.title);
const averageRating = filteredMovies.reduce(
  (sum, movie, _, array) => sum + movie.rating / array.length,
  0
);

console.log("Filtered Movies:", titles);
console.log("Average Rating:", averageRating.toFixed(2));
