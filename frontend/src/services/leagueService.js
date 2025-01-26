// services/authService.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/v1", // Adjust baseURL to match your setup
  withCredentials: true, // Include cookies in requests
});

export const getLeagues = async () => {
  const data = await API.get("/leagues/all-names");
  return data;
};

export const getLeague = async (id) => {
  const data = await API.get(`/leagues/${id}`);
  return data;
};
