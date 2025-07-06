const initialState = {
  loading: false,
  error: false,
  movies: [],
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return { ...state, loading: true, error: false };
    case "SEARCH_MOVIES_SUCCESS":
      return { ...state, loading: false, movies: action.payload };
    case "SEARCH_MOVIES_FAILURE":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
