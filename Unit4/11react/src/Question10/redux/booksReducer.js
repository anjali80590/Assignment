import { ADD_BOOK, DELETE_BOOK, TOGGLE_READ, UPDATE_BOOK} from './actions'
let initialState = [];

export let booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case TOGGLE_READ:
      return state.map((book) =>
        book.id == action.payload ? { ...book, read: !book.read } : book
      );
    case UPDATE_BOOK:
      return state.map((book) =>
        book.id == action.payload ? { ...book, ...action.payload } : book
      );
    default:
      return state;
  }
};
