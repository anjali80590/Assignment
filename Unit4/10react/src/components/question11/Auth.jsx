import React, { useReducer } from "react";

const initialState = {
  email: "",
  password: "",
  isAuth: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "set_email":
      return { ...state, email: action.payload };

    case "set_password":
      return { ...state, password: action.payload };

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
            value={state.email}
            onChange={(e) =>
              dispatch({ type: "set_email", payload: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            value={state.password}
            onChange={(e) =>
              dispatch({ type: "set_password", payload: e.target.value })
            }
          />
          <button onClick={() => dispatch({ type: "login" })}>Login</button>
        </>
      )}
    </div>
  );
}
