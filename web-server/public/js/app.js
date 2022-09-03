/* global window socket Scene */
"use strict";

(function () {
  window["App"] = {
    router: initRouter(),
    scene: Scene(socket),
  };

  function initRouter() {
    return new Router([
      new Route("dev", "dev.html"),
      new Route("start", "start.html", true),
      new Route("sceneA", "sceneA.html"),
      new Route("sceneB1", "sceneB1.html"),
      new Route("sceneB2", "sceneB2.html"),
      new Route("sceneC1", "sceneC1.html"),
      new Route("sceneC2", "sceneC2.html"),
      new Route("sceneD1", "sceneD1.html"),
      new Route("sceneD2", "sceneD2.html"),
      new Route("sceneE", "sceneE.html"),
      new Route("sceneF", "sceneF.html"),
      new Route("end", "end.html"),
      new Route("connectAB2", "connectAB2.html"),
      new Route("connectAF", "connectAF.html"),
      new Route("connectB1C1", "connectB1C1.html"),
      new Route("connectB1D1", "connectB1D1.html"),
      new Route("connectC1E", "connectC1E.html"),
      new Route("connectD1C2", "connectD1C2.html"),
      new Route("connectD1E", "connectD1E.html"),
      new Route("connectFC2", "connectFC2.html"),
      new Route("connectFE", "connectFE.html"),
    ]);
  }
})();
