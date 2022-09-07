"use strict";

function getRouter(logger = console) {
  function Router(routes) {
    try {
      if (!routes) {
        throw "error: routes param is mandatory";
      }
      this.constructor(routes);
      this.init();
    } catch (e) {
      logger.error(e);
    }
  }

  Router.prototype = {
    routes: undefined,
    rootElem: undefined,
    constructor: function (routes) {
      this.routes = routes;
      this.rootElem = document.getElementById("app");
    },
    init: function () {
      const r = this.routes;
      (function (scope, r) {
        window.addEventListener("hashchange", function (e) {
          scope.hasChanged(scope, r);
        });
      })(this, r);
      this.hasChanged(this, r);
    },
    hasChanged: function (scope, r) {
      const hash = window.location.hash;
      let unknownRoute = true;
      if (hash.length > 0) {
        for (let i = 0, length = r.length; i < length; i++) {
          const route = r[i];
          if (route.isActiveRoute(hash.substr(1))) {
            unknownRoute = false;
            scope.goToRoute(route.htmlName);
          }
        }
      } else {
        for (let i = 0, length = r.length; i < length; i++) {
          const route = r[i];
          if (route.default) {
            unknownRoute = false;
            scope.goToRoute(route.htmlName);
          }
        }
      }
      if (unknownRoute) logger.error(`unknown route ${hash}`);
    },
    goToRoute: function (htmlName) {
      (function (scope) {
        const url = "views/" + htmlName;
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState === 4) {
            if (this.status === 200) {
              scope.rootElem.innerHTML = this.responseText;
            } else {
              logger.error(`failed to request ${url}`);
            }
          }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
      })(this);
    },
  };

  return Router;
}
