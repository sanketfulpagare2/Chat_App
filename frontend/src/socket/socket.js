import { io } from "socket.io-client";
const ENDPOINT = `${import.meta.env.VITE_BACKEND_URL}`;
console.log("test:-"+ENDPOINT);
const socket = io("wss://chat-app-hbbt.vercel.app/", {
	reconnectionDelay: 1000,
	reconnection: true,
	reconnectionAttempts: 10,
	transports: ["websocket"],
	agent: false,
	upgrade: false,
	rejectUnauthorized: false,
});

export default socket;
