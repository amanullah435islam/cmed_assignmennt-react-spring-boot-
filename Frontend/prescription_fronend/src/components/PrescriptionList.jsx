import React, { useEffect, useState } from "react";
import { fetchPrescriptions, deletePrescription, fetchDaywiseReport } from "../api/prescriptionAPI";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { format } from "date-fns";

export default function PrescriptionList(){
  const [prescriptions, setPrescriptions] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [report, setReport] = useState([]);
  const navigate = useNavigate();

  const load = async () => {
    try {
      const res = await fetchPrescriptions(from || undefined, to || undefined);
      setPrescriptions(res.data);
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Could not load prescriptions", "error");
    }
  };

  useEffect(() => { load(); loadReport(); }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    load();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete?")) return;
    try {
      await deletePrescription(id);
      Swal.fire("Deleted", "Prescription deleted", "success");
      load();
      loadReport();
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Delete failed", "error");
    }
  };

  const loadReport = async () => {
    try {
      const res = await fetchDaywiseReport();
      // res.data expected as array of [date, count]
      setReport(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding:20 }}>
      <h2>Prescriptions</h2>
      <div style={{ marginBottom: 10 }}>
        <Link to="/prescriptions/new"><button>Create New</button></Link>
      </div>

      <form onSubmit={handleSearch} style={{ marginBottom: 10 }}>
        <label>From: <input type="date" value={from} onChange={e => setFrom(e.target.value)} /></label>
        <label style={{ marginLeft:10 }}>To: <input type="date" value={to} onChange={e => setTo(e.target.value)} /></label>
        <button type="submit" style={{ marginLeft:10 }}>Filter</button>
      </form>

      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>ID</th><th>Date</th><th>Patient</th><th>Age</th><th>Gender</th><th>Diagnosis</th><th>Medicines</th><th>Next Visit</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {prescriptions.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.prescriptionDate ? format(new Date(p.prescriptionDate), "yyyy-MM-dd") : ""}</td>
              <td>{p.patientName}</td>
              <td>{p.patientAge}</td>
              <td>{p.patientGender}</td>
              <td>{p.diagnosis}</td>
              <td>{p.medicines}</td>
              <td>{p.nextVisitDate ? format(new Date(p.nextVisitDate), "yyyy-MM-dd") : ""}</td>
              <td>
                <button onClick={() => navigate(`/prescriptions/edit/${p.id}`)}>Edit</button>
                <button onClick={() => handleDelete(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 style={{ marginTop:20 }}>Day-wise Report</h3>
      <table border="1" cellPadding="6">
        <thead><tr><th>Date</th><th>Count</th></tr></thead>
        <tbody>
          {report.map((r,i) => (
            <tr key={i}>
              <td>{r[0]}</td>
              <td>{r[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
