// =============================
// INIT AOS (Animate On Scroll)
// =============================
AOS.init({
  duration: 700,
  once: true,
  offset: 60,
  easing: 'ease-out-cubic'
});

// =============================
// NAVBAR: efek scroll + active link
// =============================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section[id]');

function handleScroll(){
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}
window.addEventListener('scroll', handleScroll);
handleScroll();

// =============================
// MOBILE MENU TOGGLE
// =============================
const navBurger = document.getElementById('navBurger');
const navMenu = document.getElementById('navMenu');

navBurger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  const icon = navBurger.querySelector('i');
  icon.className = navMenu.classList.contains('open') ? 'ri-close-line' : 'ri-menu-3-line';
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navBurger.querySelector('i').className = 'ri-menu-3-line';
  });
});

// =============================
// PROJECT FILTER
// =============================
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const projectsEmpty = document.getElementById('projectsEmpty');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    let visibleCount = 0;

    projectCards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.style.display = match ? '' : 'none';
      if (match) visibleCount++;
    });

    projectsEmpty.hidden = visibleCount !== 0;
  });
});

// =============================
// CONTACT FORM VALIDATION
// =============================
const form = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

function setError(fieldId, message){
  const group = document.getElementById(fieldId).closest('.form-group');
  const errorEl = document.getElementById(`${fieldId}Error`);
  if (message) {
    group.classList.add('has-error');
    errorEl.textContent = message;
  } else {
    group.classList.remove('has-error');
    errorEl.textContent = '';
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formSuccess.hidden = true;

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let valid = true;

  if (!name) { setError('name', 'Nama wajib diisi.'); valid = false; }
  else { setError('name', ''); }

  if (!email) { setError('email', 'Email wajib diisi.'); valid = false; }
  else if (!emailPattern.test(email)) { setError('email', 'Format email tidak valid.'); valid = false; }
  else { setError('email', ''); }

  if (!message) { setError('message', 'Pesan wajib diisi.'); valid = false; }
  else { setError('message', ''); }

  if (!valid) return;

  // NOTE: Ini form statis (tanpa backend). Untuk pengiriman email sungguhan,
  // hubungkan ke layanan seperti Formspree/EmailJS lalu ganti bagian ini
  // dengan fetch()/EmailJS call sesuai dokumentasi layanan tersebut.
  formSuccess.hidden = false;
  form.reset();
});

// =============================
// BACK TO TOP
// =============================
const backToTop = document.getElementById('backToTop');
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// =============================
// FOOTER: tahun otomatis
// =============================
document.getElementById('year').textContent = new Date().getFullYear();
