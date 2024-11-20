import collection from "./collection.js";
import "./components/_darkMode.js";
import card from "./components/_card.js";
const scrollNavbar = () => {
    const header = document.querySelector(".header");
    const themeSwitch = document.querySelector(".dark-mode-switch");
    const scrollIndicator = document.querySelector(".hero-scroll-indicator");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            header.classList.add("scrolled");
            scrollIndicator.style.display = "none";
        }
        else {
            header.classList.remove("scrolled");
            scrollIndicator.style.display = "block";
        }
        themeSwitch.style.top = window.scrollY > 0 ? "1.25rem" : "2.5rem";
    });
};
const createCard = () => {
    const cardContainer = document.querySelector(".card-container");
    if (!cardContainer) {
        console.warn("Card container not found.");
        return;
    }
    collection.forEach((item) => {
        const cardElement = card(item.ref, item.category, item.name, item.picture, item.pieceCount, item.minifigCount, item.weight, item.releaseYear, item.links);
        cardContainer.appendChild(cardElement);
    });
};
document.addEventListener("DOMContentLoaded", () => {
    scrollNavbar();
    createCard();
});
