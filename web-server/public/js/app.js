"use strict";

(function () {
  function init() {
    new Router([
      new Route("start", "start.html"),
      new Route("sceneA", "sceneA.html"),
      new Route("sceneB", "sceneB.html"),
      new Route("sceneC1", "sceneC1.html"),
      new Route("sceneC2", "sceneC2.html"),
      new Route("sceneD", "sceneD.html"),
      new Route("sceneE", "sceneE.html"),
      new Route("sceneF", "sceneF.html"),
      new Route("end", "end.html"),
      new Route("dev", "dev.html", true),
    ]);
  }
  init();
})();
