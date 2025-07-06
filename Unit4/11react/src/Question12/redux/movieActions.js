import axios from "axios";

export const searchMovies = (query) => async (dispatch) => {
  dispatch({ type: "SEARCH_MOVIES_REQUEST" });
  try {
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=your_api_key&s=${query}`
    );
    dispatch({ type: "SEARCH_MOVIES_SUCCESS", payload: res.data.Search });
  } catch (err) {
    dispatch({ type: "SEARCH_MOVIES_FAILURE" });
  }
};
