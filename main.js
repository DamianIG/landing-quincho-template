// ===============================
// GALERÍA (IMÁGENES POR CATEGORÍA)
// ===============================
const galeriaInfo = {
  piscina: [
    "img/quincho_disponibles.webp",
    "img/quincho_disponibles2.webp",
    "img/quincho_disponibles3.webp",
    "img/quincho_disponibles4.webp",
    "img/quincho_disponibles5.png",
  ],
  salon: [
    "img/salon_climatizado1.jpg",
    "img/salon_climatizado2.jpg",
    "img/salon_climatizado3.jpg",
    "img/salon_climatizado4.jpg",
    "img/salon_climatizado5.jpg"
  ],
  parrilla: [
    "img/quincho_parrillero1.jpg",
    "img/quincho_parrillero2.jpg",
    "img/quincho_parrillero3.jpg",
    "img/quincho_parrillero4.jpg",
    "img/quincho_parrillero5.jpg"
  ],
  cocina: [
    "img/patio_futbol_relax1.jpg",
    "img/patio_futbol_relax2.jpg",
    "img/patio_futbol_relax3.jpg",
    "img/patio_futbol_relax4.jpg",
    "img/patio_futbol_relax5.jpg"
  ],
};

let currentCategory = "";
let currentIndex = 0;

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-lightbox");

function showImage() {
  const images = galeriaInfo[currentCategory];
  lightboxImg.src = images[currentIndex];
}

// Abrir Galería: CLICK en card
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    currentCategory = card.getAttribute("data-category");
    currentIndex = 0;
    showImage();
    lightbox.style.display = "flex";
  });
});

// Navegación
document.querySelector(".next").addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % galeriaInfo[currentCategory].length;
  showImage();
});

document.querySelector(".prev").addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + galeriaInfo[currentCategory].length) % galeriaInfo[currentCategory].length;
  showImage();
});

// Cerrar
closeBtn.onclick = () => lightbox.style.display = "none";
lightbox.onclick = (e) => { if (e.target === lightbox) lightbox.style.display = "none"; };

// ===============================
// NAVBAR RESPONSIVE (MOBILE)
// ===============================
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Cerrar menú al tocar un link
  navLinks.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

// ===============================
// AÑO AUTOMÁTICO FOOTER
// ===============================
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mostrar cantidad de fotos en cada card (opcional en si probe y no anduve no si fue por la cache)
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".card").forEach(card => {
    const cat = card.getAttribute("data-category");
    const counter = card.querySelector(".image-counter");
    if (galeriaInfo[cat] && counter) {
      counter.innerHTML = `<i class="fas fa-camera"></i> Ver ${galeriaInfo[cat].length} fotos`;
    }
  });
});
