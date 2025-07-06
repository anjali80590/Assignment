import React, { useReducer } from "react";

const initialState = {
  name: "",
  establishment_year: "",
  address: {
    building: "",
    street: "",
    city: {
      name: "",
      locality: {
        pinCode: "",
        landmark: "",
      },
    },
    state: "",
    coordinates: { latitude: "", longitude: "" },
  },
  courses_offered: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "name":
    case "establishment_year":
    case "state":
      return { ...state, [action.type]: action.payload };
    case "address":
      return { ...state, address: { ...state.address, ...action.payload } };
    case "city":
      return {
        ...state,
        address: {
          ...state.address,
          city: { ...state.address.city, ...action.payload },
        },
      };
    case "locality":
      return {
        ...state,
        address: {
          ...state.address,
          city: {
            ...state.address.city,
            locality: { ...state.address.city.locality, ...action.payload },
          },
        },
      };
    case "coordinates":
      return {
        ...state,
        address: {
          ...state.address,
          coordinates: { ...state.address.coordinates, ...action.payload },
        },
      };
    case "courses_offered":
      return { ...state, courses_offered: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("invalid action type");
  }
};

export default function CollegeForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "2rem" }}>
      <input
        placeholder="College Name"
        onChange={(e) => dispatch({ type: "name", payload: e.target.value })}
      />
      <input
        placeholder="Year"
        onChange={(e) =>
          dispatch({ type: "establishment_year", payload: e.target.value })
        }
      />
      <input
        placeholder="State"
        onChange={(e) => dispatch({ type: "state", payload: e.target.value })}
      />
      <input
        placeholder="Latitude"
        onChange={(e) =>
          dispatch({
            type: "coordinates",
            payload: { latitude: e.target.value },
          })
        }
      />
      <input
        placeholder="Longitude"
        onChange={(e) =>
          dispatch({
            type: "coordinates",
            payload: { longitude: e.target.value },
          })
        }
      />
      <button type="submit">Submit</button>
      <button type="button" onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
    </form>
  );
}
