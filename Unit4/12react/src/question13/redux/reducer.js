import {
  GET_COFFEE_REQUEST,
  GET_COFFEE_SUCCESS,
  GET_COFFEE_FAILURE,
} from "./actions";

const initialState = {
  isLoading: false,
  isError: false,
  coffees: [],
};

export const coffeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COFFEE_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case GET_COFFEE_SUCCESS:
      return { ...state, isLoading: false, coffees: action.payload };
    case GET_COFFEE_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
