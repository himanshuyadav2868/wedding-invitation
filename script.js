// HERO
lottie.loadAnimation({
  container: document.getElementById("heroAnimation"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "animations/hero.json"
});

// GROOM
lottie.loadAnimation({
  container: document.getElementById("groomAnimation"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "animations/groom.json"
});

// BRIDE
lottie.loadAnimation({
  container: document.getElementById("brideAnimation"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "animations/bride.json"
});

// COUNTDOWN
const weddingDate = new Date("2026-02-01T17:00:00");

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

// LOCATION
const locationBtn = document.getElementById("locationBtn");
const locationAnim = document.getElementById("locationAnimation");

locationBtn.addEventListener("click", () => {
  locationAnim.classList.remove("hidden");

  lottie.loadAnimation({
    container: locationAnim,
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "animations/location.json"
  });

  document.getElementById("mapLink").href =
    "https://maps.google.com";
});
