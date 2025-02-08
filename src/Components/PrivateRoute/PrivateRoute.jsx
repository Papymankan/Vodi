import React from "react";
import { useNavigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const navigate = useNavigate();

  let sessionId = localStorage.getItem("sessionId")

  return <>{sessionId ? <>{children}</> : navigate("/")}</>;
}
