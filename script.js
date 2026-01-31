// script.js — Vigilant Proprietary Security Website
// Updated for reliable loading on GitHub Pages + local dev

// Helper: Determine base path automatically
const getBasePath = () => {
    const pathname = window.location.pathname;
    // If served from a subfolder like /vigilant-security/, use that as base
    if (pathname.includes('/vigilant-security/')) {
        return '/vigilant-security/';
    }
    // Otherwise assume root (common for user sites or local)
    return '/';
};

const BASE_PATH = getBasePath();

// Load HTML snippets (navbar and footer)
function loadHTMLBlock(id, file) {
    const url = BASE_PATH + file;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${file}: ${response.status} ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            const element = document.getElementById(id);
            if (element) {
                element.innerHTML = data;
            } else {
                console.warn(`Element with id "${id}" not found`);
            }
        })
        .then(() => {
            // Run setup functions after content is loaded
            setupHamburger();
            setupDarkMode();
            setupStickyNav();
            setupScrollTop();
        })
        .catch(error => {
            console.error(error);
            // Optional: show fallback message in UI
            const element = document.getElementById(id);
            if (element) {
                element.innerHTML = `<p style="color:red; text-align:center;">Failed to load navigation/footer. Please refresh.</p>`;
            }
        });
}

// Load navbar and footer
loadHTMLBlock("navbar", "navbar.html");
loadHTMLBlock("footer", "footer.html");

// Hamburger menu for mobile
function setupHamburger() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

// Dark mode toggle
function setupDarkMode() {
    const toggle = document.getElementById('darkModeToggle');
    if (toggle) {
        toggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            toggle.innerHTML = document.body.classList.contains('dark-mode')
                ? '<i class="fas fa-sun"></i>'
                : '<i class="fas fa-moon"></i>';
        });
    }
}

// Sticky navbar on scroll
function setupStickyNav() {
    const nav = document.getElementById('main-nav');
    if (nav) {
        const sticky = nav.offsetTop;
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > sticky) {
                nav.classList.add('sticky');
            } else {
                nav.classList.remove('sticky');
            }
        });
    }
}

// Scroll-to-top button
function setupScrollTop() {
    const btn = document.getElementById('scrollTop');
    if (btn) {
        window.addEventListener('scroll', () => {
            btn.style.display = window.scrollY > 100 ? 'block' : 'none';
        });
        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// Smooth scrolling for anchor links
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.href.includes('#')) {
        const href = e.target.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
});

// Contact form submission (placeholder — replace URL with real endpoint later)
function submitForm(event) {
    event.preventDefault();
    const form = event.target;
    if (form.checkValidity()) {
        // For now using placeholder — change to your Formspree, Netlify Forms, etc.
        fetch('https://example.com/api/submit', {
            method: 'POST',
            body: new FormData(form)
        })
            .then(() => alert('Inquiry sent successfully!'))
            .catch(() => alert('There was an error sending your message. Please try again

    const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});                           
