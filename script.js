document.addEventListener("DOMContentLoaded", () => {

  // ========================
  // 1️⃣ NAVBAR INJECTION
  // ========================
  const navbarHTML = `
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

  const mountPoint = document.getElementById("navbar");
  if (mountPoint) {
    mountPoint.innerHTML = navbarHTML;
  }

  // ========================
  // 2️⃣ SMOOTH SCROLL FOR INTERNAL LINKS
  // ========================
  const links = document.querySelectorAll('.vps-nav-links a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ========================
  // 3️⃣ HERO BUTTON CLICK (CTA)
  // ========================
  const heroBtn = document.querySelector('.hero-btn');
  if (heroBtn) {
    heroBtn.addEventListener('click', () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // ========================
  // 4️⃣ SERVICES CAROUSEL (GIFs)
  // ========================
  const carouselContainer = document.createElement('div');
  carouselContainer.id = 'services-carousel';
  carouselContainer.style.display = 'flex';
  carouselContainer.style.overflow = 'hidden';
  carouselContainer.style.gap = '15px';
  carouselContainer.style.marginTop = '30px';
  carouselContainer.style.justifyContent = 'center';

  const gifs = [
    'https://media.giphy.com/media/l0ExncehJzexFpRHq/giphy.gif', // patrol
    'https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif', // security alert
    'https://media.giphy.com/media/xUPGcmJ2dYtYZy1BuI/giphy.gif'  // surveillance
  ];

  gifs.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Security GIF';
    img.style.width = '250px';
    img.style.borderRadius = '8px';
    carouselContainer.appendChild(img);
  });

  const servicesSection = document.getElementById('services');
  if (servicesSection) {
    servicesSection.appendChild(carouselContainer);
  }

  // Simple auto-scroll effect for carousel
  let scrollPosition = 0;
  setInterval(() => {
    scrollPosition += 260; // width + gap
    if (carouselContainer.scrollWidth - scrollPosition < carouselContainer.clientWidth) {
      scrollPosition = 0;
    }
    carouselContainer.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  }, 4000);

  // ========================
  // 5️⃣ OPTIONAL: STATS COUNTER ANIMATION
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
        if (entry.isIntersecting) {
          lis.forEach(li => li.style.opacity = 1);
        }
      });
    }, { threshold: 0.3 });

    observer.observe(statsSection);
  }

});