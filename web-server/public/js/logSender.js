"use strict";

function LogSender(socket) {
  return {
    log: (...theArgs) => {
      console.log(...theArgs);
      if (!socket) return;
      socket.emit("info", [...theArgs]);
    },

    error: (...theArgs) => {
      console.error(...theArgs);
      if (!socket) return;
      socket.emit("error", [...theArgs]);
    },
  };
}
