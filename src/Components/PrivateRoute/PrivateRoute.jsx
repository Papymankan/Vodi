import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const navigate = useNavigate();

  const authenticated = useSelector((state) => state.Auth.authenticated);

  return <>{authenticated ? <>{children}</> : navigate("/")};</>;
}
