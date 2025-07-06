export const GET_COFFEE_REQUEST = "GET_COFFEE_REQUEST";
export const GET_COFFEE_SUCCESS = "GET_COFFEE_SUCCESS";
export const GET_COFFEE_FAILURE = "GET_COFFEE_FAILURE";

export const getCoffee =
  (sortBy = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_COFFEE_REQUEST });

      let url =
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee";
      if (sortBy) url += `?sort=price&order=${sortBy}`;

      const res = await fetch(url);
      const data = await res.json();

      dispatch({ type: GET_COFFEE_SUCCESS, payload: data.data });
    } catch (err) {
      dispatch({ type: GET_COFFEE_FAILURE });
    }
  };
