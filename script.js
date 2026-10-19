
const envelope = document.getElementById("open-envelope");
const envelopeScene = document.getElementById("envelope-scene");
const invitation = document.getElementById("invitation");
const welcome = document.getElementById("welcome");
const hint = document.getElementById("envelope-hint");

// Open the envelope when the gold seal is clicked
envelope.addEventListener("click", () => {
  if (envelopeScene.classList.contains("is-open")) {
    return;
  }

  envelopeScene.classList.add("is-open");
  envelope.setAttribute("aria-expanded", "true");
  hint.textContent = "YOUR INVITATION IS OPENING...";

  setTimeout(() => {
    welcome.hidden = true;
    invitation.hidden = false;
    invitation.scrollIntoView({ behavior: "smooth" });
  }, 1400);
});

// Countdown to the nikah ceremony
const weddingDate = new Date("2026-11-08T11:30:00+05:30");

function updateCountdown() {
  const now = new Date();
  const difference = weddingDate.getTime() - now.getTime();

  if (difference <= 0) {
    document.getElementById("countdown").innerHTML =
      "<p>The blessed day has arrived!</p>";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference / (1000 * 60 * 60)) % 24
  );
  const minutes = Math.floor(
    (difference / (1000 * 60)) % 60
  );
  const seconds = Math.floor((difference / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);
