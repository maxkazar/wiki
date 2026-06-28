/* trainer.js — interleaved classification trainer for the DDD-in-Rails course.
 *
 * Skill practice (not knowledge): many small cases, mixed categories, immediate
 * automatic feedback, a running score, and a final tally. Interleaving + retrieval
 * = storage strength. Keep the option set CONSISTENT across cards so the learner
 * discriminates between categories instead of pattern-matching one question.
 *
 * Markup contract:
 *   <div class="trainer" data-trainer>
 *     <div class="trainer-bar">
 *       <span class="trainer-progress"></span><span class="trainer-score"></span>
 *     </div>
 *     <div class="tcard" data-tcard>
 *       <p class="scenario">…</p>
 *       <button data-correct>…</button>
 *       <button>…</button>
 *       <p class="explain" hidden>…</p>
 *     </div>
 *     … more .tcard …
 *     <div class="trainer-final" hidden></div>
 *   </div>
 */
(function () {
  function wire(trainer) {
    var cards = Array.prototype.slice.call(trainer.querySelectorAll("[data-tcard]"));
    var total = cards.length;
    var answered = 0;
    var score = 0;

    var progressEl = trainer.querySelector(".trainer-progress");
    var scoreEl = trainer.querySelector(".trainer-score");
    var finalEl = trainer.querySelector(".trainer-final");

    function render() {
      if (progressEl) progressEl.textContent = "Кейс " + answered + " / " + total;
      if (scoreEl) scoreEl.textContent = "Счёт: " + score;
      if (answered === total && finalEl) {
        var pct = Math.round((score / total) * 100);
        var verdict =
          pct >= 90 ? "Уверенно держишь все четыре уровня лестницы — готов к Лессону 04." :
          pct >= 70 ? "Хорошая база. Пересмотри кейсы, где ошибся, — там зона роста." :
          "Стоит вернуться к лессонам 01–03 и пройти тренажёр ещё раз. Это нормально — навык строится повтором.";
        finalEl.innerHTML =
          "<b>Итог: " + score + " / " + total + " (" + pct + "%)</b><br>" + verdict;
        finalEl.hidden = false;
        finalEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }

    cards.forEach(function (card) {
      var buttons = card.querySelectorAll("button");
      var explain = card.querySelector(".explain");
      var locked = false;

      buttons.forEach(function (btn) {
        btn.addEventListener("click", function () {
          if (locked) return;
          locked = true;
          var correct = btn.hasAttribute("data-correct");
          if (correct) score++;
          buttons.forEach(function (b) {
            b.disabled = true;
            if (b.hasAttribute("data-correct")) b.classList.add("is-correct");
          });
          if (!correct) btn.classList.add("is-wrong");
          if (explain) explain.hidden = false;
          card.classList.add(correct ? "tcard-ok" : "tcard-miss");
          answered++;
          render();
        });
      });
    });

    render();
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-trainer]").forEach(wire);
  });
})();
