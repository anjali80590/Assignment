import { ref, onValue } from "firebase/database";
import { db } from "../../firebase/firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    onValue(ref(db, "projects"), (snap) => {
      const data = snap.val() || {};
      setProjects(Object.entries(data));
    });
  }, []);

  return projects.map(([id, p]) => (
    <Link key={id} to={`/projects/${id}`}>
      {p.title}
    </Link>
  ));
}
