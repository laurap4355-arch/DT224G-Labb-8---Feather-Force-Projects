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




/* ==========================
   Funktion för filteringknappar
========================== */

/* Hämtar alla filterknappar */
const filterButtons = document.querySelectorAll(".event-filter");

/* Hämtar alla evenemangskort */
const eventCards = document.querySelectorAll(".event-card");

/* Går igenom alla filterknappar */
filterButtons.forEach(button => {

    /* När användaren klickar på en knapp */
    button.addEventListener("click", () => {

        /* Hämtar kategorin från den klickade knappen */
        const filter = button.dataset.filter;

        /* Går igenom alla filterknappar */
        filterButtons.forEach(btn => {

            /* Tar bort aktiv stil från alla knappar */
            btn.classList.remove("active");
            btn.setAttribute("aria-pressed", "false");

        });

        /* Lägger till aktiv stil på den klickade knappen */
        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");

        /* Går igenom alla evenemangskort */
        eventCards.forEach(card => {

            /* Hämtar kortets kategori */
            const category = card.dataset.category;

            /* Visar alla kort om användaren väljer All Events */
            if (filter === "all") {
                card.hidden = false;
            }

            /* Visar kort som matchar den valda kategorin */
            else if (filter === category) {
                card.hidden = false;
            }

            /* Döljer kort som inte matchar */
            else {
                card.hidden = true;
            }

        });

    });

});