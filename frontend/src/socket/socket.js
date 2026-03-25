import { io } from "socket.io-client";

const isProduction = false;

const baseURL = isProduction ? "deployment-url" : "http://localhost:5000";

const socket = io(baseURL, {
  transports: ["websocket"],
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
  withCredentials: true,
});

export default socket;
