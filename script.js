// Load blocks
function loadHTMLBlock(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data)
        .then(() => {
            // Post-load setups
            setupHamburger();
            setupDarkMode();
            setupStickyNav();
            setupScrollTop();
        });
}
loadHTMLBlock("navbar", "navbar.html");
loadHTMLBlock("footer", "footer.html");

// Hamburger menu
function setupHamburger() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    hamburger.addEventListener('click', () => navMenu.classList.toggle('active'));
}

// Dark mode
function setupDarkMode() {
    const toggle = document.getElementById('darkModeToggle');
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        toggle.innerHTML = document.body.classList.contains('dark-mode') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
}

// Sticky nav
function setupStickyNav() {
    const nav = document.getElementById('main-nav');
    const sticky = nav.offsetTop;
    window.onscroll = () => {
        if (window.pageYOffset > sticky) nav.classList.add('sticky');
        else nav.classList.remove('sticky');
    };
}

// Scroll to top
function setupScrollTop() {
    const btn = document.getElementById('scrollTop');
    window.addEventListener('scroll', () => {
        btn.style.display = window.scrollY > 100 ? 'block' : 'none';
    });
    btn.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));
}

// Smooth scrolling
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.href.includes('#')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        target.scrollIntoView({behavior: 'smooth'});
    }
});

// Form submit (placeholder API)
function submitForm(event) {
    event.preventDefault();
    // Validate
    const form = event.target;
    if (form.checkValidity()) {
        fetch('https://example.com/api/submit', { // Replace with real endpoint
            method: 'POST',
            body: new FormData(form)
        }).then(() => alert('Inquiry sent!')).catch(() => alert('Error sending.'));
    }
}

// Slider
let slideIndex = 0;
function showSlides() {
    const slides = document.querySelectorAll('.testimonial');
    if (slides.length) {
        slides.forEach(s => s.style.display = 'none');
        slideIndex = (slideIndex + 1) % slides.length;
        slides[slideIndex].style.display = 'block';
        setTimeout(showSlides, 4000);
    }
}
showSlides();

// Parallax
window.addEventListener('scroll', () => {
    document.querySelectorAll('.parallax').forEach(el => {
        el.style.backgroundPositionY = (window.pageYOffset * 0.5) + 'px';
    });
});