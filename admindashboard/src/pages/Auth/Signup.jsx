import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";

export default function Signup() {
  const signup = () =>
    createUserWithEmailAndPassword(auth, "test@test.com", "123456");

  return <button onClick={signup}>Signup</button>;
}
