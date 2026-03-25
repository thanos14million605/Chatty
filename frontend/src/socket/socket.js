import { io } from "socket.io-client";

const isProduction = false;

const baseURL = isProduction
  ? "https://chatty-mb1r.onrender.com"
  : "http://localhost:5000";

const socket = io(baseURL, {
  transports: ["websocket"],
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
  withCredentials: true,
});

export default socket;
