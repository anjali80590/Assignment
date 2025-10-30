const filteredMovies = movies
  .filter((movie) => movie.genre === "Sci-Fi")
  .filter((movie) => movie.rating >= 8)
  .sort((a, b) => a.year - b.year);

const titles = filteredMovies.map((movie) => movie.title);
const averageRating =
  filteredMovies.reduce((sum, movie) => sum + movie.rating, 0) /
  filteredMovies.length;
