import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://lema-assessment-backend-frsm.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});
