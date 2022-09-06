"use strict";

function Scene(socket) {
  init(socket);

  return {
    onVideoPlayed,
    doRestart,
    toggleHidden,

    // Exposed for debugging only
    _debug: {
      clickBtnById,
      findChosenButton,
      showRetryMsg,
      showRestartMsg,
    },
  };

  // Initiate the listener of the 'choice-msg' events.
  function init(emitter) {
    // listen to events and process them
    emitter.on("choice-msg", processChoiceMsg);
  }

  function showRestartMsg() {
    unhide("restart-msg");
  }

  function doRestart() {
    clickBtnById("btnRestart");
  }

  // Toggle visibility of the 'dev-els'
  function toggleHidden() {
    const el = document.getElementById("dev-els");
    if (!el) {
      console.log("[ERR] no element found with id 'dev-els'");
      return;
    }
    el.hidden = !el.hidden;
  }

  /**
   * Decrements the 'data-replay-count' attribute value of the '#vid' by one,
   * and shows the '#restart-msg' if the value == 1.
   * @return boolean True if the video shall be played again, false otherwise
   */
  function onVideoPlayed() {
    const el = document.getElementById("vid");
    // Coerce to number
    const count = 0 + (el.getAttribute("data-replay-count") || "0");

    // The video has already been played before it gets here
    const remains = count - 1;
    if (remains === 1) {
      // Show the '#restart-msg' before the last play
      showRestartMsg();
    }
    el.setAttribute("data-replay-count", `${remains}`);

    return remains >= 1;
  }

  // Processes the message containing the "choice".
  // ("choice" defines which "choice button" shall be programmatically clicked.
  function processChoiceMsg(msg, cb = () => {}) {
    console.log(`new controller message: ${JSON.stringify(msg)}`);

    const chosenBtn = findChosenButton(msg);

    if (!chosenBtn) {
      // No button found that match the `msg`
      console.log(`[ERR] unexpected controller msg: ${msg}`);
      showRetryMsg();
      return cb("ERR");
    }

    console.log(`[OK] chosen button: ${chosenBtn.id}`);
    chosenBtn.click();
    return cb("OK");
  }

  function unhide(id) {
    const el = document.getElementById(id);
    if (el) {
      el.hidden = false;
    } else {
      console.error(`Element with id=${id} not found`);
    }
    return el;
  }

  function clickBtnById(id) {
    const btn = document.getElementById(id);
    if (btn) {
      btn.click();
    } else {
      console.error(`Button with id=${id} not found`);
    }
    return btn;
  }

  /**
   * Iterates over buttons containing the 'data-choice-regex' attribute,
   * and finds the 1st one that matches the `choice` against the RegExp
   * created from the attribute value.
   * @param choice: string
   * @returns HTMLButtonElement|undefined
   */
  function findChosenButton(choice) {
    // Get all <button> elements which have the 'data-choice-regex' attribute
    const choiceButtons = Array.from(
      document.getElementsByTagName("button")
    ).filter((b) => !!b.getAttribute("data-choice-regex"));

    return choiceButtons.find((b) => {
      const regex = new RegExp(b.getAttribute("data-choice-regex"));
      return regex.exec(choice) !== null;
    });
  }

  function showRetryMsg() {
    const el = unhide("try-again-msg");
    if (!el) return;

    // Restart the CSS animation by removing then adding the class
    const animationClass = "blink-few-times";
    if (el && el.classList.contains(animationClass)) {
      el.classList.remove(animationClass);
      el.classList.add(animationClass);
      el.addEventListener("animationend", () => {
        el.hidden = true;
      });
    }
  }
}
