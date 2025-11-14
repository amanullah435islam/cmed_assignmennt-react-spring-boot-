import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { loginUser } from "../api/authAPI";
import { saveToken } from "../utils/auth";

export default function Login(){
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(form);
      // backend returns JSON string or JSON object - normalize:
      // if response is string '{"token":"..."}' axios will parse as string; but our backend returns JSON text - assume JSON-parsed
      let data = res.data;
      if (typeof data === "string") {
        // try parse
        try { data = JSON.parse(data); } catch (err) { /* leave as string */ }
      }
      if (data && data.token) {
        saveToken(data.token);
        Swal.fire("Success", "Login successful", "success");
        navigate("/prescriptions");
      } else {
        Swal.fire("Error", "Login failed: token missing", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", err?.response?.data || "Login failed", "error");
    }
  };

  return (
    <div style={{ padding:20 }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div><input name="username" placeholder="Username" value={form.username} onChange={handleChange} required/></div>
        <div><input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required/></div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
