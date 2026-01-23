// Base de datos de imágenes por categoría
const galeriaInfo = {
    piscina: [
        'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1000',
        'https://images.unsplash.com/photo-1560067174-c5a3a8f37060?q=80&w=1000' // Agregá más URLs reales aquí
    ],
    salon: [
        'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1000'
    ],
    parrilla: [
        'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000'
    ],
    cocina: [
        'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000'
    ]
};

let currentCategory = "";
let currentIndex = 0;

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-lightbox");

// Abrir Galería
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        currentCategory = card.getAttribute("data-category");
        currentIndex = 0;
        showImage();
        lightbox.style.display = "flex";
    });
});

function showImage() {
    const images = galeriaInfo[currentCategory];
    lightboxImg.src = images[currentIndex];
}

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
lightbox.onclick = (e) => { if(e.target === lightbox) lightbox.style.display = "none"; };