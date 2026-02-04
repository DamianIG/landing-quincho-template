// ===============================
// GALERÍA (IMÁGENES POR CATEGORÍA)
// ===============================
const galeriaInfo = {
  piscina: [
    "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560067174-c5a3a8f37060?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1470472304068-4398a9daab57?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=1400&auto=format&fit=crop"
  ],
  salon: [
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1400&auto=format&fit=crop&sat=-10",
    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1400&auto=format&fit=crop&con=-10",
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1400&auto=format&fit=crop"
  ],
  parrilla: [
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=1400&auto=format&fit=crop&sat=-10"
  ],
  cocina: [
    "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541544181051-e46601c0f3d2?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6da?q=80&w=1400&auto=format&fit=crop"
  ]
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
