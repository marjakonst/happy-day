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

socket.on("navigate-to-page", (msg, cb) => {
  console.log(`new navigate command message: ${JSON.stringify(msg)}`);
  const newHref = `${window.location.href.replace(/#.+\/?$/, "")}#${msg}`;
  console.log(`switching to ${newHref}`);
  window.location.assign(newHref);
  cb("OK");
});
