import { ref, onValue } from "firebase/database";
import { db } from "../../firebase/firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    onValue(ref(db, "notes"), (snap) => {
      const data = snap.val() || {};
      setNotes(Object.entries(data));
    });
  }, []);

  return notes.map(([id, n]) => (
    <Link key={id} to={`/notes/${id}`}>
      {n.text}
    </Link>
  ));
}
