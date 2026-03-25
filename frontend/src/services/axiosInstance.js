import axios from "axios";

const isProduction = false;

const baseURL = isProduction ? "deployment-url" : "http://localhost:5000";

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

export default axiosInstance;
