// ================= Navbar Injector =================

// HTML code for navbar
const navbarHTML = `
<nav>
  <div class="nav-left">
    <img src="vigilant.PNG" alt="Vigilance Proprietary Security Logo">
    <span>VIGILANCE PROPRIETARY SECURITY</span>
  </div>

  <ul>
    <li><a href="index.html">HOME</a></li>
    <li><a href="services.html">SERVICES</a></li>
    <li><a href="about.html">ABOUT</a></li>
    <li><a href="contact.html">CONTACT</a></li>
  </ul>
</nav>
`;

// Function to inject navbar into element with ID "navbar"
function injectNavbar() {
  const navbarContainer = document.getElementById("navbar");
  if (navbarContainer) {
    navbarContainer.innerHTML = navbarHTML;
  }
}

// Run after page loads
window.addEventListener('DOMContentLoaded', injectNavbar);