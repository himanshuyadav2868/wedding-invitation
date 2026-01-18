
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

// COVER ENTRY LOGIC — FINAL & CLEAN
document.addEventListener("DOMContentLoaded", () => {
  const cover = document.getElementById("cover");
  if (!cover) return;

  document.body.classList.add("cover-active");

  let entered = false;

  function enterInvitation() {
    if (entered) return;
    entered = true;
    
    cover.classList.add("hide-cover");
    document.body.classList.remove("cover-active");

    setTimeout(() => {
      cover.style.display = "none";
      
    }, 800);
  }

 document.addEventListener("DOMContentLoaded", () => {
  const cover = document.getElementById("cover");
  const music = document.getElementById("bgMusic");
  if (!cover || !music) return;

  document.body.classList.add("cover-active");

  let entered = false;

  function enterInvitationUI() {
    if (entered) return;
    entered = true;

    cover.classList.add("hide-cover");
    document.body.classList.remove("cover-active");

    setTimeout(() => {
      cover.style.display = "none";
    }, 800);
  }

  // 🔥 ANDROID-SAFE: DIRECT USER GESTURE
  cover.ontouchstart = () => {
    music.volume = 0.4;
    music.play();      // MUST be first
    enterInvitationUI();
    cover.ontouchstart = null;
  };

  // Desktop fallback
  cover.onclick = () => {
    music.volume = 0.4;
    music.play();
    enterInvitationUI();
    cover.onclick = null;
  };
});


});







