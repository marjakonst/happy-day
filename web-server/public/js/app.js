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
      new Route("sceneStart", "sceneStart.html", true),
      new Route("sceneA", "sceneA.html"),
      new Route("sceneB1", "sceneB1.html"),
      new Route("sceneB2", "sceneB2.html"),
      new Route("sceneC1", "sceneC1.html"),
      new Route("sceneC2", "sceneC2.html"),
      new Route("sceneD1", "sceneD1.html"),
      new Route("sceneD2", "sceneD2.html"),
      new Route("sceneE", "sceneE.html"),
      new Route("sceneF", "sceneF.html"),
      new Route("sceneEnd", "sceneEnd.html"),
      new Route("sceneAB2", "sceneAB2.html"),
      new Route("sceneAF", "sceneAF.html"),
      new Route("sceneB1C1", "sceneB1C1.html"),
      new Route("sceneB1D1", "sceneB1D1.html"),
      new Route("sceneC1D2", "sceneC1D2.html"),
      new Route("sceneC1E", "sceneC1E.html"),
      new Route("sceneD1C2", "sceneD1C2.html"),
      new Route("sceneD1E", "sceneD1E.html"),
      new Route("sceneFC2", "sceneFC2.html"),
      new Route("sceneFE", "sceneFE.html"),
    ]);
  }
})();
