

// export let INCREMENT = "INCREMENT";
// export let DECREMENT = "DECREMENT";

// export let increment = () => ({ type: INCREMENT });
// export let decrement = () => ({ type: DECREMENT });




// export let ADD_TODO = "ADD_TODO";
// export let TOGGLE_TODO = "TOGGLE_TODO";
// export let DELETE_TODO = "DELETE_TODO";

// export let addTodo = (title) => ({
//   type: ADD_TODO,
//   payload: {
//     id: Date.now(),
//     title,
//     status: false,
//   },
// });
// export let toggleTodo = (id) => ({
//   type: TOGGLE_TODO,
//   payload: id,
// });
// export let deleteTodo = (id) => ({
//   type: DELETE_TODO,
//   payload: id,
// });




// export let ADD_BOOK = "ADD_BOOK";
// export let DELETE_BOOK = "DELETE_BOOK";
// export let TOGGLE_READ = "TOGGLE_READ";
// export let UPDATE_BOOK = "UPDATE_BOOk";
// export let SET_FILTER = "SET_FILTER";

// export let addBook = (book) => ({
//   type: ADD_BOOK,
//   payload: book,
// });
// export let deleteBook = (id) => ({
//   type: DELETE_BOOK,
//   payload: id,
// });
// export let toggleRead = (id) => ({
//   type: TOGGLE_READ,
//   payload: id,
// });
// export let updateBook = (book) => ({
//   type: UPDATE_BOOK,
//   payload: book,
// });
// export let setFilter = (filter) => ({
//   type: SET_FILTER,
//   payload: filter,
// });





// export const FETCH_MATCHES_REQUEST = "FETCH_MATCHES_REQUEST";
// export const FETCH_MATCHES_SUCCESS = "FETCH_MATCHES_SUCCESS";
// export const FETCH_MATCHES_FAILURE = "FETCH_MATCHES_FAILURE";

// export const fetchMatches = () => async (dispatch) => {
//   try {
//     dispatch({ type: FETCH_MATCHES_REQUEST });

//     const res = await fetch(
//       "https://jsonmock.hackerrank.com/api/football_matches?page=2"
//     );
//     const data = await res.json();

//     dispatch({ type: FETCH_MATCHES_SUCCESS, payload: data.data });
//   } catch (error) {
//     dispatch({ type: FETCH_MATCHES_FAILURE });
//   }
// };



// export const GET_COFFEE_REQUEST = "GET_COFFEE_REQUEST";
// export const GET_COFFEE_SUCCESS = "GET_COFFEE_SUCCESS";
// export const GET_COFFEE_FAILURE = "GET_COFFEE_FAILURE";

// export const getCoffee =
//   (sortBy = "") =>
//   async (dispatch) => {
//     try {
//       dispatch({ type: GET_COFFEE_REQUEST });

//       let url =
//         "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee";
//       if (sortBy) url += `?sort=price&order=${sortBy}`;

//       const res = await fetch(url);
//       const data = await res.json();

//       dispatch({ type: GET_COFFEE_SUCCESS, payload: data.data });
//     } catch (err) {
//       dispatch({ type: GET_COFFEE_FAILURE });
//     }
//   };
