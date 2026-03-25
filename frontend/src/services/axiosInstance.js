import axios from "axios";

const isProduction = true;

const baseURL = isProduction
  ? "https://chatty-mb1r.onrender.com"
  : "http://localhost:5000";

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

export default axiosInstance;
