import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function useRestoreRoute() {
  const nav = useNavigate();

  useEffect(() => {
    const last = localStorage.getItem("lastRoute");
    if (last) nav(last);
  }, []);
}
