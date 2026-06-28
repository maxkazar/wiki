/* quiz.js — reusable retrieval-practice widget for the DDD-in-Rails course.
 *
 * Markup contract:
 *   <div class="quiz" data-quiz>
 *     <p class="q">Question text…</p>
 *     <button data-correct>Right answer</button>
 *     <button>Distractor</button>
 *     <button>Distractor</button>
 *     <p class="explain" hidden>Why this is the answer…</p>
 *   </div>
 *
 * Keep answer options the SAME length (desirable difficulty: no formatting tells).
 * Feedback is immediate and automatic — the tight loop that builds storage strength.
 */
(function () {
  function wire(quiz) {
    var buttons = quiz.querySelectorAll("button");
    var explain = quiz.querySelector(".explain");
    var answered = false;

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (answered) return;
        answered = true;
        var correct = btn.hasAttribute("data-correct");

        buttons.forEach(function (b) {
          b.disabled = true;
          if (b.hasAttribute("data-correct")) b.classList.add("is-correct");
        });
        if (!correct) btn.classList.add("is-wrong");
        if (explain) explain.hidden = false;

        var retry = quiz.querySelector(".retry");
        if (retry) retry.hidden = false;
      });
    });

    var retry = quiz.querySelector(".retry");
    if (retry) {
      retry.addEventListener("click", function () {
        answered = false;
        buttons.forEach(function (b) {
          b.disabled = false;
          b.classList.remove("is-correct", "is-wrong");
        });
        if (explain) explain.hidden = true;
        retry.hidden = true;
      });
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-quiz]").forEach(wire);
  });
})();
