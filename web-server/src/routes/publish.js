const express = require("express");
const createError = require("http-errors");
const router = express.Router();
const debug = require("debug")("happy-day:server:routes:publish");

const data = "hi from the server!";

router.get("/:topic/:msg", (req, res, next) => {
  const topic = req.params["topic"];
  const msg = req.params["msg"];
  debug(`publishing "${topic}:${msg}"`);
  req.app.locals.io.sockets.timeout(3000).emit(topic, msg, (err, response) => {
    if (err) {
      debug(err);
      next(createError(err));
    } else {
      debug(`response: ${response}`);
      res.send(response);
    }
  });
});

module.exports = router;
