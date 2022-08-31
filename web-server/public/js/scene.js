(function () {
  "use strict";

  createScene();

  function createScene() {
    const scene = {};

    scene.onVideoPlayed = () => {
      const el = document.getElementById("vid");
      // Coerce to number
      const count = 0 + (el.getAttribute("data-replay-count") || "0");

      // The video has been played before it gets here
      const remains = count - 1;
      if (remains === 1) {
        scene.showRestartMsg();
      }
      el.setAttribute("data-replay-count", `${remains}`);

      return remains >= 1;
    };

    scene.doChoiceOne = () => clickBtn("btnChoiceOne");

    scene.doChoiceTwo = () => clickBtn("btnChoiceTwo");

    scene.doRestart = () => clickBtn("btnRestart");

    scene.showRetryMsg = () => unhide("try-again-msg");

    scene.showRestartMsg = () => unhide("restart-msg");

    function unhide(id) {
      const el = document.getElementById(id);
      if (el) {
        el.hidden = false;
      } else {
        console.error(`Element with id=${id} not found`);
      }
    }

    function clickBtn(id) {
      const btn = document.getElementById(id);
      if (btn) {
        btn.click();
      } else {
        console.error(`Button with id=${id} not found`);
      }
    }

    window.Scene = scene;
  }
})();
