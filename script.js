// Toggle the nav panel
function toggleNavPanel() {
    const navPanel = document.getElementById('nav-panel');
    if (navPanel.style.width === '250px' || navPanel.style.width === '') {
        navPanel.style.width = '0';
    } else {
        navPanel.style.width = '250px';
    }
}

// Close the nav panel when a nav link is clicked
document.querySelectorAll('.nav-panel a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('nav-panel').style.width = '0';
        document.body.style.overflow = 'auto';  // Re-enable scrolling after closing
    });
});

// Close the nav panel when clicking outside of it
document.addEventListener('click', function(event) {
    const navPanel = document.getElementById('nav-panel');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    if (navPanel.style.width === '250px' && !navPanel.contains(event.target) && !hamburgerIcon.contains(event.target)) {
        navPanel.style.width = '0';
        document.body.style.overflow = 'auto';
    }
});
