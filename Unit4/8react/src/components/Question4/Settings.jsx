import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

function Settings() {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  return (
    <div style={{ padding: 20 }}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={() => setUser({ name, email })}>Update</button>
    </div>
  );
}

export default Settings;
