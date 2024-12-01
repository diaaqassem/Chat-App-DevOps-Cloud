import { io } from "socket.io-client";

const socket = io("http://192.168.49.2:30001", {
  transports: ["websocket"],
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

export default socket;
