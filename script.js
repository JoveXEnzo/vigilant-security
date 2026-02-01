// AAA200001: FULL SITE SCRIPT – MOBILE-FIRST

document.addEventListener("DOMContentLoaded", () => {

  // ========================
  // 1️⃣ NAVBAR INJECTION
  // ========================
  const navbarHTML = `
    <!-- AAA273638: NAVBAR INJECTION -->
    <nav class="vps-navbar">
      <div class="vps-nav-left">
        <img src="vigilant.PNG" alt="Vigilance Logo" class="vps-logo">
        <span class="vps-brand">VIGILANCE PROPRIETARY SECURITY</span>
      </div>
      <ul class="vps-nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#stats">Crime Stats</a></li>
        <li><a href="#contact" class="cta">Get Protected</a></li>
      </ul>
    </nav>
  `;
  const navbarMount = document.getElementById("navbar");
  if (navbarMount) navbarMount.innerHTML = navbarHTML;

  // ========================
  // 2️⃣ FOOTER INJECTION
  // ========================
  const footerPoint = document.getElementById("footer");
  if (footerPoint) {
    footerPoint.innerHTML = `
      <!-- AAA273639: FOOTER INJECTION -->
      <footer class="vps-footer">
        <p>&copy; ${new Date().getFullYear()} Vigilance Proprietary Security. All Rights Reserved.</p>
      </footer>
    `;
  }

  // ========================
  // 3️⃣ SMOOTH SCROLL
  // ========================
  const scrollLinks = document.querySelectorAll('.vps-nav-links a[href^="#"], .hero-btn');
  scrollLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // ========================
  // 4️⃣ SERVICES CAROUSEL
  // ========================
  const carouselContainer = document.getElementById('services-carousel');
  if (carouselContainer) {
    const gifs = [
      'https://media.giphy.com/media/l0ExncehJzexFpRHq/giphy.gif',
      'https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif',
      'https://media.giphy.com/media/xUPGcmJ2dYtYZy1BuI/giphy.gif'
    ];
    gifs.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = 'Security GIF';
      img.style.borderRadius = '8px';
      carouselContainer.appendChild(img);
    });

    // Auto-scroll
    let pos = 0;
    setInterval(() => {
      pos += 260;
      if (carouselContainer.scrollWidth - pos < carouselContainer.clientWidth) pos = 0;
      carouselContainer.scrollTo({ left: pos, behavior: 'smooth' });
    }, 4000);
  }

  // ========================
  // 5️⃣ STATS FADE-IN
  // ========================
  const statsSection = document.getElementById('stats');
  if (statsSection) {
    const lis = statsSection.querySelectorAll('li');
    lis.forEach(li => {
      li.style.opacity = 0;
      li.style.transition = 'opacity 1s ease';
    });
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) lis.forEach(li => li.style.opacity = 1);
      });
    }, { threshold: 0.3 });
    observer.observe(statsSection);
  }

});

// AAA200001 – NAVBAR INJECTION
document.addEventListener("DOMContentLoaded", () => {
  const navbarTarget = document.getElementById("navbar");
  if (!navbarTarget) {
    console.error("Navbar target div not found");
    return;
  }

  fetch("navbar.html")
    .then(response => {
      if (!response.ok) throw new Error("Navbar HTML fetch failed");
      return response.text();
    })
    .then(data => {
      navbarTarget.innerHTML = data;
    })
    .catch(err => console.error("Error loading navbar:", err));
});

console.log("ANIMATIONS LOADED 🔥");
