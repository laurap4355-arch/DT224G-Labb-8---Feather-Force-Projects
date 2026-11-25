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



/* ==========================
   VALIDERING AV KONTAKTFORMULÄR
========================== */

/* Hämtar formuläret */
const form = document.querySelector("#contact-form");

/* Hämtar formulärfälten */
const nameInput = document.querySelector("#contact-name");
const emailInput = document.querySelector("#contact-email");
const subjectInput = document.querySelector("#contact-subject");
const messageInput = document.querySelector("#contact-message");

/* Hämtar statusmeddelandet */
const formStatus = document.querySelector("#form-status");

/* Samlar alla formulärfält */
const fields = [
    nameInput,
    emailInput,
    subjectInput,
    messageInput
];

/* Funktion som visar felmeddelande */
function showError(input, message) {

    /* Hämtar felmeddelandet som hör till fältet */
    const error = document.querySelector("#" + input.id + "-error");

    /* Visar felet */
    error.textContent = message;
    input.classList.add("is-invalid");
    input.setAttribute("aria-invalid", "true");
}

/* Funktion som tar bort felmeddelande */
function clearError(input) {

    const error = document.querySelector("#" + input.id + "-error");

    /* Tar bort felet */
    error.textContent = "";
    input.classList.remove("is-invalid");
    input.setAttribute("aria-invalid", "false");
}

/* När användaren klickar på Send Message */
form.addEventListener("submit", function(event) {

    /* Hindrar formuläret från att ladda om sidan */
    event.preventDefault();

    /* Kontrollerar om formuläret är korrekt */
    let isValid = true;

    /* Tar bort gamla felmeddelanden */
    fields.forEach(function(input) {
        clearError(input);
    });

    formStatus.textContent = "";

    /* Kontrollerar namn */
    if (nameInput.value.trim() === "") {
        showError(nameInput, "Please enter your name.");
        isValid = false;
    }

    /* Kontrollerar e-postadress */
    if (emailInput.value.trim() === "") {
        showError(emailInput, "Please enter your email.");
        isValid = false;
    } else if (!emailInput.validity.valid) {
        showError(emailInput, "Please enter a valid email.");
        isValid = false;
    }

    /* Kontrollerar ämne */
    if (subjectInput.value === "") {
        showError(subjectInput, "Please choose a subject.");
        isValid = false;
    }

    /* Kontrollerar meddelande */
    if (messageInput.value.trim() === "") {
        showError(messageInput, "Please write a message.");
        isValid = false;
    }

    /* Om alla fält är korrekta */
    if (isValid === true) {
        formStatus.textContent =
            "Thank you for your message! We will get back to you soon.";
    } else {

        /* Flyttar fokus till första felaktiga fältet */
        const firstError = form.querySelector(".is-invalid");
        firstError.focus();
    }

});

/* Tar bort fel när användaren ändrar ett fält */
fields.forEach(function(input) {

    input.addEventListener("input", function() {
        clearError(input);
        formStatus.textContent = "";
    });

});
