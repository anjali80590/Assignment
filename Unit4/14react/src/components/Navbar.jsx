import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { currentUser, logout } = useAuth();

  return (
    <nav style={navStyle}>
      <div>
        <Link to="/" style={linkStyle}>
          Dashboard
        </Link>
        {currentUser && (
          <Link to="/add" style={linkStyle}>
            Add Project
          </Link>
        )}
      </div>
      <div>
        {currentUser ? (
          <>
            <span style={userStyle}>Hello, {currentUser.email}</span>
            <button onClick={logout} style={btnStyle}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" style={linkStyle}>
              Login
            </Link>
            <Link to="/signup" style={linkStyle}>
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

// Minimal inline styles
const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#0066cc",
  padding: "10px 20px",
  color: "white",
};

const linkStyle = {
  color: "white",
  marginRight: "15px",
  textDecoration: "none",
  fontWeight: "bold",
};

const userStyle = {
  marginRight: "10px",
  fontWeight: "bold",
};

const btnStyle = {
  backgroundColor: "white",
  color: "#0066cc",
  border: "none",
  padding: "6px 10px",
  borderRadius: "4px",
  cursor: "pointer",
};
