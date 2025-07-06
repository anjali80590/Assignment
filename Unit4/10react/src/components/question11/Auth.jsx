import React, { useReducer } from "react";

const initialState = { email: "", password: "", isAuth: false };

const reducer = (state, action) => {
  switch (action.type) {
    case "email":
    case "password":
      return { ...state, [action.type]: action.payload };
    case "login":
      return { ...state, isAuth: true };
    case "logout":
      return initialState;
    default:
      throw new Error("Invalid action type");
  }
};

export default function Auth() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ padding: "2rem" }}>
      {state.isAuth ? (
        <div>
          <p>Welcome, {state.email}</p>
          <button onClick={() => dispatch({ type: "logout" })}>Logout</button>
        </div>
      ) : (
        <>
          <input
            placeholder="Email"
            onChange={(e) =>
              dispatch({ type: "email", payload: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              dispatch({ type: "password", payload: e.target.value })
            }
          />
          <button onClick={() => dispatch({ type: "login" })}>Login</button>
        </>
      )}
    </div>
  );
}
