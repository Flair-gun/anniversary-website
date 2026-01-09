// 🎈 Handle Letter Open
function openLetter() {
    const letter = document.querySelector('.letter');
    letter.classList.toggle('open');
  }

// 🔥 Handle Flame Clicks
const flames = document.querySelectorAll(".flame");

flames.forEach((flame, idx) => {
  flame.addEventListener("click", () => {
    flame.style.display = "none";
    checkAllFlamesOut();
  });
});

function checkAllFlamesOut() {
  const allOut = Array.from(flames).every(f => f.style.display === "none");
  if (allOut) {
    triggerHearts();
  }
}

// 🎉 Countdown to Next Anniversary
function updateCountdown() {
  const countdown = document.getElementById("countdown");

  const now = new Date();
  const currentYear = now.getFullYear();

  // June is month 5 (0-indexed)
  let nextAnniversary = new Date(currentYear, 5, 9);

  // If June 9 has already passed this year, use next year
  if (now > nextAnniversary) {
    nextAnniversary = new Date(currentYear + 1, 5, 9);
  }

  const diff = nextAnniversary - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  countdown.textContent = `Next Anniversary In: ${days}d ${hrs}h ${mins}m ${secs}s`;
}

setInterval(updateCountdown, 1000);

// 💖 Hearts Animation
function triggerHearts() {
  for (let i = 0; i < 10; i++) {
    const heart = document.createElement("div");
    heart.textContent = "💗";
    heart.classList.add("heart");
    heart.style.left = i*10 + "vw";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}

// Handles the flower animation
const images = ["images/HiPaint_1749076079832.png", "images/HiPaint_1749076084811.png"];
let index = 0;
setInterval(() => {
    index = (index + 1) % images.length;
    document.getElementById("animImage").src = images[index];
}, 1000);