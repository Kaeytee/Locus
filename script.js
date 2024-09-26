document.addEventListener("DOMContentLoaded", () => {
    // Toggle the nav panel
    function toggleNavPanel() {
        const navPanel = document.getElementById('nav-panel');
        navPanel.style.width = (navPanel.style.width === '250px' || navPanel.style.width === '') ? '0' : '250px';
    }

    // Close the nav panel when a nav link is clicked
    document.querySelectorAll('.nav-panel a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('nav-panel').style.width = '0';
            document.body.style.overflow = 'auto';  // Re-enable scrolling after closing
        });
    });

    // Close the nav panel when clicking outside of it
    document.addEventListener('click', (event) => {
        const navPanel = document.getElementById('nav-panel');
        const hamburgerIcon = document.querySelector('.hamburger-icon');
        if (navPanel.style.width === '250px' && !navPanel.contains(event.target) && !hamburgerIcon.contains(event.target)) {
            navPanel.style.width = '0';
            document.body.style.overflow = 'auto';
        }
    });

    // Intersection Observer for cards
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

    // Apply observer to all cards
    cards.forEach(card => observer.observe(card));

    // Apply behavior only for screens less than 768px wide
    if (window.innerWidth <= 768) {
        cards.forEach(card => observer.observe(card));
    }
});
