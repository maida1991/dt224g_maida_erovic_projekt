"use strict";

/*
 * Miixi – Projekt DT224G
 * Namn: Maida Erovic
 */

// Hämta kontaktformuläret om det finns på den aktuella sidan.
const contactForm = document.querySelector("#contact-form");

if (contactForm) {
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const messageInput = document.querySelector("#message");
    const formStatus = document.querySelector("#form-status");

    // Använd JavaScript-validering i stället för webbläsarens felrutor.
    contactForm.noValidate = true;

    contactForm.addEventListener("submit", function (event) {
        // Förhindra omladdning och att formuläret skickas.
        event.preventDefault();

        const fields = [nameInput, emailInput, messageInput];
        let firstInvalidField = null;

        // Rensa tidigare felmeddelanden och status.
        formStatus.textContent = "";

        fields.forEach(function (field) {
            field.removeAttribute("aria-invalid");

            const errorElement = document.querySelector(
                "#" + field.id + "-error"
            );

            errorElement.textContent = "";
        });

        // Visa fel vid fältet och kom ihåg det första felaktiga fältet.
        function showError(field, message) {
            const errorElement = document.querySelector(
                "#" + field.id + "-error"
            );

            errorElement.textContent = message;
            field.setAttribute("aria-invalid", "true");

            if (firstInvalidField === null) {
                firstInvalidField = field;
            }
        }

        // Kontrollera att namnet inte bara innehåller blanksteg.
        if (nameInput.value.trim() === "") {
            showError(nameInput, "Ange ditt namn.");
        }

        // Kontrollera att e-postadressen är ifylld och har giltigt format.
        emailInput.value = emailInput.value.trim();

        if (emailInput.value === "") {
            showError(emailInput, "Ange din e-postadress.");
        } else if (emailInput.validity.typeMismatch) {
            showError(
                emailInput,
                "Ange en giltig e-postadress, till exempel namn@example.se."
            );
        }

        // Kontrollera att meddelandet inte bara innehåller blanksteg.
        if (messageInput.value.trim() === "") {
            showError(messageInput, "Skriv ett meddelande.");
        }

        // Flytta fokus till det första fältet som behöver rättas.
        if (firstInvalidField !== null) {
            formStatus.textContent = "Kontrollera de markerade fälten.";
            firstInvalidField.focus();
            return;
        }

        // Bekräfta valideringen utan att påstå att något skickats.
        formStatus.textContent =
            "Alla fält är korrekt ifyllda. Detta är en demonstration, " +
            "så inget meddelande har skickats.";
    });
}