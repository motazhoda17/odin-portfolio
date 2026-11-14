// Small enhancements for the portfolio. The page works without JavaScript too.

// Mobile menu: show/hide the nav links when the "hamburger" button is clicked.
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

toggle.addEventListener("click", () => {
  const isOpen = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!isOpen));
  nav.classList.toggle("open", !isOpen);
});

// Close the menu after picking a link, so the section isn't hidden behind it.
nav.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
  }
});

// Keep the copyright year current.
document.getElementById("year").textContent = new Date().getFullYear();
