
// COUNTDOWN
const weddingDate = new Date("2026-02-05T17:00:00");

setInterval(() => {
  const now = new Date();
  const diff = weddingDate - now;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / 1000 / 60) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").innerHTML =
    `${d}d ${h}h ${m}m ${s}s`;
}, 1000);



// SCROLL REVEAL ANIMATION
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // animate once
      }
    });
  },
  {
    threshold: 0.2
  }
);

document.querySelectorAll(".animate-on-scroll").forEach(el => {
  observer.observe(el);
});

document.addEventListener("DOMContentLoaded", () => {
  const cover = document.getElementById("cover");
  const music = document.getElementById("bgMusic");
  const enterBtn = document.getElementById("enterBtn");

  if (!cover || !enterBtn) return;

  document.body.classList.add("cover-active");

  let entered = false;

  enterBtn.addEventListener("click", () => {
    if (entered) return;
    entered = true;

    // 🎵 ANDROID-PROOF AUDIO
    if (music) {
      music.volume = 0.4;
      music.play();
    }

    cover.classList.add("hide-cover");
    document.body.classList.remove("cover-active");

    setTimeout(() => {
      cover.style.display = "none";
    }, 800);
  });
});












