import React, { useReducer } from "react";

const initialState = {
  email: "",
  password: "",
  submitted: false,
  users: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "email":
    case "password":
      return { ...state, [action.type]: action.payload };

    case "submit":
      const newUser = {
        email: state.email,
        password: state.password,
      };
      return {
        ...state,
        users: [...state.users, newUser],
        submitted: true,
        email: "",
        password: "",
      };

    case "reset":
      return initialState;

    default:
      throw new Error("Invalid action type");
  }
};

export default function FormWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ padding: "2rem" }}>
      <h3>📝 Form</h3>
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
          <h4>✅ Submitted Users:</h4>
          <ul>
            {state.users.map((user, index) => (
              <li key={index}>
                Email: {user.email}, Password: {user.password}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
