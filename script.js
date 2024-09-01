document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll for nav links
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
// script.js
function toggleNavPanel() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
});
