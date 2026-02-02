import { useParams } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase/firebase";
import { useEffect, useState } from "react";

export default function NoteDetail() {
  const { noteId } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    onValue(ref(db, `notes/${noteId}`), (snap) => setNote(snap.val()));
  }, [noteId]);

  return <div>{note?.text}</div>;
}
