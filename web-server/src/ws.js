const { Server } = require("socket.io");
const debug = require("debug")("happy-day:server:ws");

module.exports = addWsServer;

function addWsServer(httpServer) {
  // web-socket server
  const io = new Server(httpServer);

  // websocket listener
  io.on("connection", (socket) => {
    debug(`client connected, (socketId: ${socket.id})`);

    socket.on("disconnect", function () {
      debug("client disconnected");
    });
  });

  debug("ws-server ready");

  return io;
}
