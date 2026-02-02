import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";

export default function Login() {
  const login = () =>
    signInWithEmailAndPassword(auth, "test@test.com", "123456");

  return <button onClick={login}>Login</button>;
}
