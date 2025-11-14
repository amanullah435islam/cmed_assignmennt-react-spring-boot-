import React, { useState, useEffect } from "react";
import { createPrescription, fetchPrescriptionById, updatePrescription } from "../api/prescriptionAPI";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function PrescriptionForm(){
  const navigate = useNavigate();
  const { id } = useParams();
  const [form, setForm] = useState({
    prescriptionDate: "",
    patientName: "",
    patientAge: "",
    patientGender: "Male",
    diagnosis: "",
    medicines: "",
    nextVisitDate: ""
  });

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const res = await fetchPrescriptionById(id);
          // map response data to form
          const d = res.data;
          setForm({
            prescriptionDate: d.prescriptionDate ? d.prescriptionDate.split("T")[0] : "",
            patientName: d.patientName || "",
            patientAge: d.patientAge || "",
            patientGender: d.patientGender || "Male",
            diagnosis: d.diagnosis || "",
            medicines: d.medicines || "",
            nextVisitDate: d.nextVisitDate ? d.nextVisitDate.split("T")[0] : ""
          });
        } catch (err) {
          console.error(err);
        }
      })();
    }
  }, [id]);

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await updatePrescription(id, form);
        Swal.fire("Updated", "Prescription updated", "success");
      } else {
        await createPrescription(form);
        Swal.fire("Created", "Prescription created", "success");
      }
      navigate("/prescriptions");
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Save failed", "error");
    }
  };

  return (
    <div style={{ padding:20 }}>
      <h2>{id ? "Edit" : "Create"} Prescription</h2>
      <form onSubmit={handleSubmit}>
        <div><label>Date: <input name="prescriptionDate" type="date" value={form.prescriptionDate} onChange={handleChange} required/></label></div>
        <div><input name="patientName" placeholder="Patient Name" value={form.patientName} onChange={handleChange} required/></div>
        <div><input name="patientAge" type="number" placeholder="Age" value={form.patientAge} onChange={handleChange} required/></div>
        <div>
          <select name="patientGender" value={form.patientGender} onChange={handleChange}>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div><textarea name="diagnosis" placeholder="Diagnosis" value={form.diagnosis} onChange={handleChange}></textarea></div>
        <div><textarea name="medicines" placeholder="Medicines" value={form.medicines} onChange={handleChange}></textarea></div>
        <div><label>Next Visit: <input name="nextVisitDate" type="date" value={form.nextVisitDate} onChange={handleChange} /></label></div>
        <button type="submit">{id ? "Update" : "Create"}</button>
      </form>
    </div>
  );
}
