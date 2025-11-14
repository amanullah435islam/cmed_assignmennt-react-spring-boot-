import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { registerUser } from "../api/authAPI";

export default function Register(){
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "", name: "", email: "", role: "Patient" });

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form);
      Swal.fire("Success", "Registration successful", "success");
      navigate("/");
    } catch (err) {
      console.error(err);
      Swal.fire("Error", err?.response?.data || "Registration failed", "error");
    }
  };

  return (
    <div style={{ padding:20 }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div><input name="username" placeholder="Username" value={form.username} onChange={handleChange} required/></div>
        <div><input name="name" placeholder="Name" value={form.name} onChange={handleChange} required/></div>
        <div><input name="email" placeholder="Email" value={form.email} onChange={handleChange} required/></div>
        <div><input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required/></div>
        <div>
          <select name="role" value={form.role} onChange={handleChange}>
            <option value="Patient">Patient</option>
            <option value="Doctor">Doctor</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
