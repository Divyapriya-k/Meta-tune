// axios instance with JWT interceptor
import axios from "axios";

const api = axios.create({
  baseURL: "https://meta-tunes-k34r.onrender.com/",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;