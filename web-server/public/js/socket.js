/* global io */
const socket = io();

// Connection opened
socket.on("connect", () => {
  console.log(`socket opened: ${socket.id}`);
});

// Connection closed
socket.on("disconnect", () => {
  console.log(`socket closed: ${socket.id}`);
});
