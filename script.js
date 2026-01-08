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
const locations = {
  lagan: {
    map: "https://maps.app.goo.gl/LnxtseDMNt4USsDWA",
    animation: "animations/lagan-location.json"
  },
  wedding: {
    map: "https://maps.app.goo.gl/q92Qezh9k9zRQ8hZ7",
    animation: "animations/wedding-location.json"
  }
};

const buttons = document.querySelectorAll(".location-buttons button");
const locationAnimContainer = document.getElementById("locationAnimation");
const mapLink = document.getElementById("mapLink");

let currentAnimation = null;

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.type;

    // Clear previous animation
    locationAnimContainer.innerHTML = "";
    locationAnimContainer.classList.remove("hidden");
    mapLink.classList.remove("hidden");

    if (currentAnimation) currentAnimation.destroy();

    currentAnimation = lottie.loadAnimation({
      container: locationAnimContainer,
      renderer: "svg",
      loop: false,
      autoplay: true,
      path: locations[type].animation
    });

    mapLink.href = locations[type].map;
  });
});


