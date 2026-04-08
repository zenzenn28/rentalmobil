/* =============================================
   DRIVEMAX — main.js (Enhanced with Animations)
   ============================================= */

// ── Car Data ──────────────────────────────────
const WA_NUMBER = '6281234567890';

const cars = [
  {
    id: 1,
    brand: 'Toyota',
    name: 'Innova Reborn',
    category: 'mpv',
    badge: 'POPULER',
    badgeClass: 'popular',
    price: '550.000',
    photo: 'https://wisatabalipenida.com/wp-content/uploads/2022/07/innova-reborn-hitam.jpg',
    specs: [
      { icon: '⚙️', label: 'Matic / Manual' },
      { icon: '👥', label: '7 Penumpang' },
      { icon: '❄️', label: 'AC Double' },
      { icon: '⛽', label: 'Diesel' },
      { icon: '📦', label: 'Bagasi Luas' },
    ],
  },
  {
    id: 2,
    brand: 'Toyota',
    name: 'Avanza',
    category: 'mpv',
    badge: 'TERLARIS',
    badgeClass: '',
    price: '350.000',
    photo: 'https://wallpapercave.com/wp/wp12186590.jpg',
    specs: [
      { icon: '⚙️', label: 'Matic / Manual' },
      { icon: '👥', label: '7 Penumpang' },
      { icon: '❄️', label: 'AC Dingin' },
      { icon: '⛽', label: 'Bensin' },
    ],
  },
  {
    id: 3,
    brand: 'Mitsubishi',
    name: 'Xpander',
    category: 'mpv',
    badge: 'BARU',
    badgeClass: 'new',
    price: '500.000',
    photo: 'https://imgcdnblog.carmudi.com.ph/wp-content/uploads/2023/01/26092907/20230113_145811-1.jpg',
    specs: [
      { icon: '⚙️', label: 'Matic' },
      { icon: '👥', label: '7 Penumpang' },
      { icon: '❄️', label: 'AC Double' },
      { icon: '⛽', label: 'Bensin' },
      { icon: '📱', label: 'Android Auto' },
    ],
  },
  {
    id: 4,
    brand: 'Daihatsu',
    name: 'Xenia',
    category: 'mpv',
    badge: '',
    badgeClass: '',
    price: '320.000',
    photo: 'https://radarpekalongan.disway.id/upload/2d3f0dece0b1c601a346a12bebcc5236.jpg',
    specs: [
      { icon: '⚙️', label: 'Matic / Manual' },
      { icon: '👥', label: '7 Penumpang' },
      { icon: '❄️', label: 'AC Dingin' },
      { icon: '⛽', label: 'Bensin' },
    ],
  },
  {
    id: 5,
    brand: 'Suzuki',
    name: 'Ertiga',
    category: 'mpv',
    badge: '',
    badgeClass: '',
    price: '380.000',
    photo: 'https://autopro8.mediacdn.vn/134505113543774208/2022/9/29/edit-ertigasuzuki-hybrid-ertiga-phoi-canh-2-1664388530670679821607-1664408913487-16644089142051205711402.jpeg',
    specs: [
      { icon: '⚙️', label: 'Matic / Manual' },
      { icon: '👥', label: '7 Penumpang' },
      { icon: '❄️', label: 'AC Dingin' },
      { icon: '⛽', label: 'Bensin' },
    ],
  },
  {
    id: 6,
    brand: 'Honda',
    name: 'Mobilio',
    category: 'mpv',
    badge: '',
    badgeClass: '',
    price: '350.000',
    photo: 'https://img.indianautosblog.com/2014/07/Honda-Mobilio-RS-India-live-image-front-quarter-angle.jpg',
    specs: [
      { icon: '⚙️', label: 'Matic / Manual' },
      { icon: '👥', label: '7 Penumpang' },
      { icon: '❄️', label: 'AC Dingin' },
      { icon: '⛽', label: 'Bensin' },
    ],
  },
  {
    id: 7,
    brand: 'Toyota',
    name: 'Rush',
    category: 'suv',
    badge: 'POPULER',
    badgeClass: 'popular',
    price: '450.000',
    photo: 'https://www.mitsuiautomotriz.com/sites/default/files/2023-02/CONOCELOS_TOYOTA_Rush-01.jpg',
    specs: [
      { icon: '⚙️', label: 'Matic' },
      { icon: '👥', label: '7 Penumpang' },
      { icon: '❄️', label: 'AC Double' },
      { icon: '⛽', label: 'Bensin' },
      { icon: '🏔️', label: 'Ground Clearance Tinggi' },
    ],
  },
  {
    id: 8,
    brand: 'Daihatsu',
    name: 'Terios',
    category: 'suv',
    badge: '',
    badgeClass: '',
    price: '430.000',
    photo: 'https://www.autoini.com/wp-content/uploads/2024/12/Daihatsu-Terios-Indonesia-autoini.webp',
    specs: [
      { icon: '⚙️', label: 'Matic / Manual' },
      { icon: '👥', label: '7 Penumpang' },
      { icon: '❄️', label: 'AC Dingin' },
      { icon: '⛽', label: 'Bensin' },
      { icon: '🏔️', label: 'Ground Clearance Tinggi' },
    ],
  },
  {
    id: 9,
    brand: 'Honda',
    name: 'Brio',
    category: 'city',
    badge: '',
    badgeClass: '',
    price: '270.000',
    photo: 'https://asset.kompas.com/crops/Oj3nvoDKhkdZVGjU_1Ef60LDuyI=/245x143:1326x864/1200x800/data/photo/2023/07/03/64a1d0dda18d4.jpg',
    specs: [
      { icon: '⚙️', label: 'Matic / Manual' },
      { icon: '👥', label: '5 Penumpang' },
      { icon: '❄️', label: 'AC Dingin' },
      { icon: '⛽', label: 'Bensin' },
      { icon: '🏙️', label: 'City Car' },
    ],
  },
  {
    id: 10,
    brand: 'Toyota',
    name: 'Agya',
    category: 'city',
    badge: '',
    badgeClass: '',
    price: '250.000',
    photo: 'https://gomechanic.in/blog/wp-content/uploads/2021/05/Tpyota-Agya-Front-Profile.jpeg',
    specs: [
      { icon: '⚙️', label: 'Matic / Manual' },
      { icon: '👥', label: '5 Penumpang' },
      { icon: '❄️', label: 'AC Dingin' },
      { icon: '⛽', label: 'Bensin' },
      { icon: '🏙️', label: 'City Car' },
    ],
  },
  {
    id: 11,
    brand: 'Toyota',
    name: 'Hiace Premio',
    category: 'van',
    badge: 'KAPASITAS BESAR',
    badgeClass: '',
    price: '900.000',
    photo: 'https://s3-ap-southeast-1.amazonaws.com/permaisuriban/img/20220822/portfolio/Facewheels_Premio_with_Toyota_Hiace_Premio_gallery_11.jpg',
    specs: [
      { icon: '⚙️', label: 'Manual' },
      { icon: '👥', label: '14 Penumpang' },
      { icon: '❄️', label: 'AC Double' },
      { icon: '⛽', label: 'Diesel' },
      { icon: '💺', label: 'Kursi Mewah' },
    ],
  },
  {
    id: 12,
    brand: 'Isuzu',
    name: 'Elf JETBUS',
    category: 'van',
    badge: '',
    badgeClass: '',
    price: '850.000',
    photo: 'https://gambarmobil.com/foto/isuzu/69496-isuzu-elf-microbus-lwb-20-seat-adiputro-img20170303143042.jpg',
    specs: [
      { icon: '⚙️', label: 'Manual' },
      { icon: '👥', label: '16 Penumpang' },
      { icon: '❄️', label: 'AC Kabin' },
      { icon: '⛽', label: 'Diesel' },
    ],
  },
];

// ── WhatsApp URL ────────────────────────────────
function buildWhatsAppURL(car) {
  const msg = encodeURIComponent(
    `Halo DRIVEMAX! 👋\n\nSaya ingin menyewa:\n🚗 *${car.brand} ${car.name}*\n\nMohon info ketersediaan dan harga lengkapnya. Terima kasih!`
  );
  return `https://wa.me/${WA_NUMBER}?text=${msg}`;
}

// ── Render Cars ─────────────────────────────────
function renderCars(filter = 'all') {
  const grid = document.getElementById('carsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const filtered = filter === 'all' ? cars : cars.filter(c => c.category === filter);

  filtered.forEach((car, i) => {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.dataset.category = car.category;

    const badgeHTML = car.badge
      ? `<div class="card-badge ${car.badgeClass}">${car.badge}</div>`
      : '';

    const specsHTML = car.specs
      .map(s => `<div class="spec-tag"><span class="spec-icon">${s.icon}</span>${s.label}</div>`)
      .join('');

    card.innerHTML = `
      ${badgeHTML}
      <div class="card-img">
        <img src="${car.photo}" alt="${car.brand} ${car.name}" loading="lazy" onerror="this.parentElement.classList.add('img-error')"/>
      </div>
      <div class="card-body">
        <div class="card-brand">${car.brand}</div>
        <div class="card-name">${car.name}</div>
        <div class="card-specs">${specsHTML}</div>
        <div class="card-footer">
          <div class="card-price">
            <span class="price-label">Mulai dari</span>
            <span class="price-value">Rp ${car.price}</span>
            <span class="price-unit">/ hari</span>
          </div>
          <a href="${buildWhatsAppURL(car)}" target="_blank" class="btn btn-wa">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Sewa Sekarang
          </a>
        </div>
      </div>`;

    grid.appendChild(card);

    // Staggered reveal per card
    requestAnimationFrame(() => {
      setTimeout(() => card.classList.add('card-visible'), 80 + i * 90);
    });
  });
}

// ── Filter Buttons ──────────────────────────────
function initFilters() {
  const btns = document.querySelectorAll('.filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCars(btn.dataset.filter);
    });
  });
}

// ── Navbar ──────────────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

// ── Mobile burger ────────────────────────────────
function initBurger() {
  const burger = document.getElementById('burger');
  const mobile = document.getElementById('navMobile');
  if (!burger) return;
  burger.addEventListener('click', () => {
    mobile.classList.toggle('open');
    burger.classList.toggle('open');
  });
  mobile.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobile.classList.remove('open');
      burger.classList.remove('open');
    });
  });
}

// ── Smooth scroll ────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ── Scroll Reveal (IntersectionObserver) ─────────
function initScrollReveal() {
  const selectors = [
    '.reveal-up',
    '.reveal-left',
    '.reveal-right',
    '.reveal-scale',
  ];

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = parseInt(el.dataset.revealDelay || '0', 10);
        setTimeout(() => el.classList.add('is-visible'), delay);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll(selectors.join(',')).forEach(el => obs.observe(el));
}

// ── Hero entrance (after loader) ─────────────────
function triggerHeroEntrance() {
  const heroEls = document.querySelectorAll('.anim-fade-up');
  heroEls.forEach(el => {
    const delay = parseInt(el.dataset.delay || '0', 10);
    setTimeout(() => el.classList.add('is-visible'), delay + 200);
  });
}

// ── Number Counter ───────────────────────────────
function animateCounter(el, target, duration = 1600) {
  const start = performance.now();
  const isLarge = target >= 1000;

  function formatNum(n) {
    if (isLarge) return (n / 1000).toFixed(1) + 'K';
    return Math.floor(n).toString();
  }

  function step(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = formatNum(eased * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = isLarge ? (target / 1000).toFixed(0) + 'K' : target;
  }

  requestAnimationFrame(step);
}

function initCounters() {
  const counterEls = document.querySelectorAll('[data-count]');
  if (!counterEls.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        animateCounter(el, target);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counterEls.forEach(el => obs.observe(el));
}

// ── Cursor Glow — dinonaktifkan untuk performa ───
function initCursorGlow() { /* disabled */ }

// ── Parallax — dinonaktifkan untuk performa ──────
function initParallax() { /* disabled */ }

// ── Loading Screen ───────────────────────────────
function initLoader() {
  const loader    = document.getElementById('loader');
  const bar       = document.getElementById('loaderBar');
  const status    = document.getElementById('loaderStatus');
  const navbar    = document.getElementById('navbar');

  if (!loader) return;

  document.body.classList.add('loading');

  const messages = [
    'Memuat armada...',
    'Menyiapkan penawaran...',
    'Hampir selesai...',
  ];

  let progress = 0;
  let msgIdx   = 0;

  // Animate progress bar
  const interval = setInterval(() => {
    progress += Math.random() * 18 + 6;
    if (progress > 100) progress = 100;
    bar.style.width = progress + '%';

    // Cycle status text
    const newMsg = messages[Math.floor(progress / 34)];
    if (newMsg && newMsg !== status.textContent) {
      status.style.opacity = '0';
      setTimeout(() => {
        status.textContent = newMsg;
        status.style.transition = 'opacity 0.3s';
        status.style.opacity = '1';
      }, 200);
    }

    if (progress >= 100) clearInterval(interval);
  }, 180);

  // Minimum display time + wait for fonts/images
  const minTime = 1800;
  const startTime = performance.now();

  window.addEventListener('load', () => {
    const elapsed = performance.now() - startTime;
    const remaining = Math.max(0, minTime - elapsed);

    // Ensure bar hits 100%
    bar.style.transition = `width ${remaining * 0.4}ms ease`;
    bar.style.width = '100%';

    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.classList.remove('loading');

      // Show navbar
      navbar.classList.add('nav-ready');

      // Kick off hero animations
      triggerHeroEntrance();
    }, remaining + 300);
  });

  // Fallback: hide after 4s no matter what
  setTimeout(() => {
    if (!loader.classList.contains('hidden')) {
      bar.style.width = '100%';
      setTimeout(() => {
        loader.classList.add('hidden');
        document.body.classList.remove('loading');
        navbar.classList.add('nav-ready');
        triggerHeroEntrance();
      }, 400);
    }
  }, 4000);
}

// ── Init ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  renderCars();
  initFilters();
  initNavbar();
  initBurger();
  initSmoothScroll();
  initScrollReveal();
  initCounters();
  initCursorGlow();
  initParallax();
});