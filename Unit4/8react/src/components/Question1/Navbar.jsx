import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: 10, display: "flex", gap: 10 }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;
