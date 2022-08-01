"use strict";

(function () {
  function init() {
    new Router([
      new Route("home", "home.html", true),
      new Route("video1", "video1.html"),
      new Route("video2", "video2.html"),
      new Route("video3", "video3.html"),
    ]);
  }
  init();
})();
