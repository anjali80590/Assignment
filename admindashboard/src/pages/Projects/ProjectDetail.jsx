import { useParams } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase/firebase";
import { useEffect, useState } from "react";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    onValue(ref(db, `projects/${projectId}`), (snap) => setProject(snap.val()));
  }, [projectId]);

  return <div>{project?.title}</div>;
}
