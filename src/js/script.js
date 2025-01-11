// Image Hover
const hoverText = document.querySelector(".content-name");
const hoverImage = document.getElementById("moi");

hoverText.addEventListener("mouseover", () => {
  hoverImage.classList.add("hover-visible");
});

hoverText.addEventListener("mousemove", (e) => {
  const offsetX = -100;
  const offsetY = -100;

  hoverImage.style.left = `${e.pageX + offsetX}px`;
  hoverImage.style.top = `${e.pageY + offsetY}px`;
});

hoverText.addEventListener("mouseout", () => {
  hoverImage.classList.remove("hover-visible");
});

// Animation Scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll(".hidden").forEach((element) => {
  observer.observe(element);
});

// Heure
function heure() {
  const date = new Date();

  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Europe/Paris",
  };

  const heureFr = new Intl.DateTimeFormat("fr-FR", options).format(date);

  document.getElementById("heure").innerHTML = heureFr;

  setTimeout(heure, 1000);
}

heure();
