import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <Link to="/projects">Projects</Link>
      <Link to="/notes">Notes</Link>
      <Link to="/profile">Profile</Link>
    </>
  );
}
