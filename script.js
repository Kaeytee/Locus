document.addEventListener("DOMContentLoaded", () => {
    function toggleNavPanel() {
        const navPanel = document.getElementById('nav-panel');
        navPanel.style.width = (navPanel.style.width === '250px' || navPanel.style.width === '') ? '0' : '250px';
    }

    document.querySelectorAll('.nav-panel a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('nav-panel').style.width = '0';
            document.body.style.overflow = 'auto';
        });
    });

    document.addEventListener('click', (event) => {
        const navPanel = document.getElementById('nav-panel');
        const hamburgerIcon = document.querySelector('.hamburger-icon');
        if (navPanel.style.width === '250px' && !navPanel.contains(event.target) && !hamburgerIcon.contains(event.target)) {
            navPanel.style.width = '0';
            document.body.style.overflow = 'auto';
        }
    });

    const cards = document.querySelectorAll('.card');
    const observerOptions = { threshold: 0.3 };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('card-active');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    cards.forEach(card => observer.observe(card));

    if (window.innerWidth <= 768) {
        cards.forEach(card => observer.observe(card));
    }
});

const modal = document.getElementById("blogModal");
const closeModal = document.querySelector(".close");
const readMoreBtns = document.querySelectorAll(".read-more-btn");

function openModal(title, content, imageSrc) {
    modal.style.display = "block";
    document.querySelector(".modal-title").innerText = title;
    document.querySelector(".modal-text").innerText = content;
    document.querySelector(".modal-img").src = imageSrc;
}

closeModal.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

readMoreBtns.forEach(btn => {
    btn.addEventListener("click", function() {
        const title = this.previousElementSibling.previousElementSibling.innerText;
        const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ligula sed magna dictum porta. Vivamus suscipit tortor eget felis porttitor volutpat.";
        const imageSrc = this.parentElement.querySelector("img").src;
        
        openModal(title, content, imageSrc);
    });
});
