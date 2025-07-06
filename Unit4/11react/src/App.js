// import React from 'react'
// import Counter from './Question8/Counter'
// import TodoApp from './Question9/TodoApp'
// import BookForm from './Question10/BookForm'
// import FilterBar from './Question10/FilterBar'
// import BookList from './Question10/BookList'
// import FootballApp from './Question11/FootballApp'

// function App() {
//   return (
//     <div>
//       {/* <Counter/> */}
//       {/* <TodoApp/> */}
//       {/* <h1>Book Library</h1>
//       <BookForm/>
//       <FilterBar/>
//       <BookList/> */}
//       <FootballApp/>
//     </div>
//   )
// }

// export default App









import React from "react";
import SearchBar from "./Question12/components/SearchBar";
import MovieCard from "./Question12/components/MovieCard";
import MovieList from "./Question12/components/MovieList";
import Watchlist from "./Question12/components/WatchList";

function App() {
  return (
    <div>
      <h1>🎬 Movie Search App</h1>
      <SearchBar />
      <MovieList />
      <Watchlist />
    </div>
  );
}

export default App;
