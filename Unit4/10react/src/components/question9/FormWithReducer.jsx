import React, { useReducer } from "react";

const initialState = {
  email: "",
  password: "",
  submitted: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "email":
    case "password":
      return { ...state, [action.type]: action.payload };
    case "submit":
      return { ...state, submitted: true };
    case "reset":
      return initialState;
    default:
      throw new Error("invalid action type");
  }
};

export default function FormWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ padding: "2rem" }}>
      <input
        type="email"
        placeholder="Email"
        value={state.email}
        onChange={(e) => dispatch({ type: "email", payload: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={state.password}
        onChange={(e) =>
          dispatch({ type: "password", payload: e.target.value })
        }
      />
      <button onClick={() => dispatch({ type: "submit" })}>Submit</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

      {!state.submitted ? (
        <div>No details found</div>
      ) : (
        <div>
          <div>User Email: {state.email}</div>
          <div>User Password: {state.password}</div>
        </div>
      )}
    </div>
  );
}
