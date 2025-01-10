const hoverText = document.querySelector(".content-name");
const hoverImage = document.getElementById("moi");

// Afficher l'image avec animation au survol
hoverText.addEventListener("mouseover", () => {
  hoverImage.classList.add("visible");
});

// Mettre à jour la position de l'image
hoverText.addEventListener("mousemove", (e) => {
  const offsetX = -100; // Décalage horizontal
  const offsetY = -100; // Décalage vertical

  hoverImage.style.left = `${e.pageX + offsetX}px`; // Position horizontale
  hoverImage.style.top = `${e.pageY + offsetY}px`; // Position verticale
});

// Cacher l'image avec animation lorsque la souris quitte le texte
hoverText.addEventListener("mouseout", () => {
  hoverImage.classList.remove("visible");
});
