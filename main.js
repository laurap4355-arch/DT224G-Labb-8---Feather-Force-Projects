/* ==========================
   Funktion för burger meny
========================== */

// Hämtar hamburgermenyn och navigationen
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

// Öppnar och stänger mobilmenyn vid klick
menuToggle.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("is-open");

    // Uppdaterar menyns status för skärmläsare
    menuToggle.setAttribute("aria-expanded", String(isOpen));
});