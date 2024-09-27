document.addEventListener("DOMContentLoaded", () => {
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
            const title = this.getAttribute("data-title");
            const content = this.getAttribute("data-content");
            const imageSrc = this.getAttribute("data-image");
            
            openModal(title, content, imageSrc);
        });
    });

    if (window.innerWidth <= 768) {
        cards.forEach(card => observer.observe(card));
    }

    document.querySelector('.hamburger-icon').addEventListener('click', () => {
        const navPanel = document.getElementById('nav-panel');
        if (navPanel.style.width === '250px') {
            navPanel.style.width = '0';
            document.body.style.overflow = 'auto';
        } else {
            navPanel.style.width = '250px';
            document.body.style.overflow = 'hidden';
        }
    });
});
// Get the modal
const modal = document.getElementById("blogModal");

// Get the <span> element that closes the modal
const closeModal = document.querySelector(".close");

// Get all "Read More" buttons
const readMoreBtns = document.querySelectorAll(".read-more-btn");

// Function to open the modal
function openModal(title, content, imageSrc) {
    modal.style.display = "block";
    document.querySelector(".modal-title").innerText = title;   // Set the title
    document.querySelector(".modal-text").innerText = content;  // Set the content
    document.querySelector(".modal-img").src = imageSrc;        // Set the image
}

// Close the modal when the user clicks on <span> (x)
closeModal.onclick = function() {
    modal.style.display = "none";
};

// Close the modal when the user clicks anywhere outside the modal
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Add click event listeners to all "Read More" buttons
readMoreBtns.forEach(btn => {
    btn.addEventListener("click", function() {
        // Get the data attributes from the clicked button
        const title = this.getAttribute("data-title");
        const content = this.getAttribute("data-content");
        const imageSrc = this.getAttribute("data-image");
        
        // Open the modal with the dynamic content
        openModal(title, content, imageSrc);
    });
});