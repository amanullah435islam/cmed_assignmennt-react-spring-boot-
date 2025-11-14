import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn, logout, getToken } from "../utils/auth";

export default function Navbar(){
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav style={{ padding: 10, background: "#eee" }}>
      <Link to="/" style={{ marginRight: 10 }}>Login</Link>
      <Link to="/register" style={{ marginRight: 10 }}>Register</Link>
      {isLoggedIn() && (
        <>
          <Link to="/prescriptions" style={{ marginRight: 10 }}>Prescriptions</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </nav>
  );
}
