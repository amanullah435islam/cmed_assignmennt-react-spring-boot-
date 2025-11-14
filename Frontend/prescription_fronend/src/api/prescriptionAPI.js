import api from "./axiosInstance";

export const fetchPrescriptions = (startDate, endDate) => {
  const params = {};
  if (startDate) params.startDate = startDate;
  if (endDate) params.endDate = endDate;
  return api.get("/prescriptions", { params });
};

export const fetchPrescriptionById = (id) => api.get(`/prescriptions/${id}`);

export const createPrescription = (data) => api.post("/prescriptions", data);

export const updatePrescription = (id, data) => api.put(`/prescriptions/${id}`, data);

export const deletePrescription = (id) => api.delete(`/prescriptions/${id}`);

export const fetchDaywiseReport = () => api.get("/prescriptions/report/daywise");
