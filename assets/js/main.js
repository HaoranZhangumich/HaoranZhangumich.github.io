// Theme toggle (remembers the choice when storage is available), and looping
// thumbnail videos that play only while on screen, with a visible pause button.
(function () {
  var root = document.documentElement;

  function systemDark() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  var toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") || (systemDark() ? "dark" : "light");
      var next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch (e) {}
    });
  }

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var videos = Array.prototype.slice.call(document.querySelectorAll("video[data-autoplay]"));

  function play(v) {
    var p = v.play();
    if (p && p.catch) p.catch(function () {});
  }

  videos.forEach(function (v) {
    v.muted = true;
    // Reduced motion: start paused, as if the visitor had pressed pause.
    if (reduce) v.setAttribute("data-user-paused", "");

    var btn = v.parentNode.querySelector(".vid-toggle");
    if (!btn) return;
    function sync() {
      var paused = v.paused;
      btn.classList.toggle("is-paused", paused);
      btn.setAttribute("aria-label", paused ? "Play video" : "Pause video");
    }
    btn.addEventListener("click", function () {
      if (v.paused) {
        v.removeAttribute("data-user-paused");
        play(v);
      } else {
        v.setAttribute("data-user-paused", "");
        v.pause();
      }
    });
    v.addEventListener("play", sync);
    v.addEventListener("pause", sync);
    sync();
  });

  if (!("IntersectionObserver" in window)) {
    videos.forEach(function (v) {
      if (!v.hasAttribute("data-user-paused")) play(v);
    });
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        var v = entry.target;
        if (entry.isIntersecting) {
          if (!v.hasAttribute("data-user-paused")) play(v);
        } else {
          v.pause();
        }
      });
    },
    { rootMargin: "120px 0px" }
  );
  videos.forEach(function (v) {
    io.observe(v);
  });
})();
