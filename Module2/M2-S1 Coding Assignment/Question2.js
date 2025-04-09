
const movies = [
  { title: "Drishyam", genre: "Thriller", rating: 8.5, watchTime: 140 },
  { title: "Lagaan", genre: "Drama", rating: 8.1, watchTime: 180 },
  { title: "Dangal", genre: "Sports", rating: 8.3, watchTime: 161 },
  { title: "Gully Boy", genre: "Musical", rating: 7.4, watchTime: 130 },
  { title: "Kabir Singh", genre: "Romance", rating: 6.9, watchTime: 150 },
];

const moviesWithHours = movies.map((movie) => ({
  ...movie,
  watchTime: (movie.watchTime / 60).toFixed(2), 
}));


const highlyRatedMovies = moviesWithHours.filter((movie) => movie.rating > 7.5);


const totalWatchTime = highlyRatedMovies.reduce(
  (sum, movie) => sum + parseFloat(movie.watchTime),
  0
);

const bestMovies = highlyRatedMovies.map((movie) => ({
  title: movie.title,
  watchTime: movie.watchTime,
}));

console.log("List of Highly Rated Movies with Watch Time in Hours:", bestMovies);
console.log( "Total Watch Time of Highly Rated Movies:", totalWatchTime.toFixed(2),"hours");
