

export const FETCH_MATCHES_REQUEST = "FETCH_MATCHES_REQUEST";
export const FETCH_MATCHES_SUCCESS = "FETCH_MATCHES_SUCCESS";
export const FETCH_MATCHES_FAILURE = "FETCH_MATCHES_FAILURE";

export const fetchMatches = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_MATCHES_REQUEST });

    const res = await fetch(
      "https://jsonmock.hackerrank.com/api/football_matches?page=2"
    );
    const data = await res.json();

    dispatch({ type: FETCH_MATCHES_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: FETCH_MATCHES_FAILURE });
  }
};
