document.addEventListener('DOMContentLoaded', function () {
    // Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeBtn = document.getElementById('closeBtn');
  
    if (hamburger && mobileMenu && closeBtn) {
      hamburger.addEventListener('click', () => {
        mobileMenu.classList.add('active');
      });
  
      closeBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
      });
    }


    // Gallery dropdown inside mobile menu
const galleryToggle = document.getElementById("mobileGalleryToggle");
const galleryDropdown = document.getElementById("mobileGalleryDropdown");

if (galleryToggle && galleryDropdown) {
  galleryToggle.addEventListener("click", function (e) {
    e.preventDefault();
    galleryDropdown.classList.toggle("show");
  });

  // Optional: Close the gallery dropdown if any other nav link is clicked
  document.querySelectorAll(".mobile-menu .nav-link").forEach(link => {
    if (link !== galleryToggle) {
      link.addEventListener("click", () => {
        galleryDropdown.classList.remove("show");
      });
    }
  });
}

  
    // Smooth Scroll Navigation
    document.querySelectorAll('a.nav-link').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            mobileMenu?.classList.remove('active');
            window.scrollTo({
              top: target.offsetTop - 70,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  
    // Form Validation (only on pages where the form exists)
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', function (event) {
        const name = document.getElementById('name')?.value;
        const email = document.getElementById('email')?.value;
        const message = document.getElementById('message')?.value;
  
        if (!name || !email || !message) {
          alert('Please fill in all required fields.');
          event.preventDefault();
          return;
        }
    });
      }
  });
  