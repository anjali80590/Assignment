export let ADD_BOOK = "ADD_BOOK";
export let DELETE_BOOK = "DELETE_BOOK";
export let TOGGLE_READ = "TOGGLE_READ";
export let UPDATE_BOOK = "UPDATE_BOOk";
export let SET_FILTER = "SET_FILTER";

export let addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});
export let deleteBook = (id) => ({
  type: DELETE_BOOK,
  payload: id,
});
export let toggleRead = (id) => ({
  type: TOGGLE_READ,
  payload: id,
});
export let updateBook = (book) => ({
  type: UPDATE_BOOK,
  payload: book,
});
export let setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});
