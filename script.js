function toggleNavPanel() {
    const navPanel = document.getElementById('nav-panel');
    if (navPanel.style.width === '250px') {
        navPanel.style.width = '0';
    } else {
        navPanel.style.width = '250px';
    }
}
