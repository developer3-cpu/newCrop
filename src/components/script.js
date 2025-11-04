const searchInput = document.getElementById('searchInput');
const sections = Array.from(document.querySelectorAll('.section'));
const toTop = document.getElementById('toTop');

document.querySelectorAll('.top-nav a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const selector = link.getAttribute('href');
    const target = document.querySelector(selector);
    if (!target) return;
    const section = target.closest('.section') || target;

    // Clear search filter so the section card is visible
    if (searchInput && searchInput.value.trim().length) {
      searchInput.value = '';
      sections.forEach((sec) => (sec.style.display = ''));
    }

    // Open the first summary (details) in the section
    const firstDetails = section.querySelector('details');
    if (firstDetails) firstDetails.open = true;

    // Scroll with fixed-header offset to keep the section header visible
    const headerH =
      parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) ||
      (document.querySelector('.site-header')?.offsetHeight || 0);
    const top = section.getBoundingClientRect().top + window.scrollY - headerH - 12;
    window.scrollTo({ top, behavior: 'smooth' });

    // Briefly highlight the section card
    section.classList.add('section-focus');
    setTimeout(() => section.classList.remove('section-focus'), 800);

    const newHash = section.id ? `#${section.id}` : selector;
    history.replaceState(null, '', newHash);
  });
});

if (searchInput) {
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    sections.forEach((sec) => {
      const text = sec.textContent.toLowerCase();
      sec.style.display = !q || text.includes(q) ? '' : 'none';
    });
  });
}

const onScroll = () => {
  const y = window.scrollY || document.documentElement.scrollTop;
  toTop.style.display = y > 300 ? 'block' : 'none';
};
window.addEventListener('scroll', onScroll, { passive: true });

toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Swap SVG placeholders with actual PNG/JPG if present
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('img[data-replace-with]').forEach((img) => {
    const candidate = `images/${img.dataset.replaceWith}`;
    const tester = new Image();
    tester.onload = () => { img.src = candidate; };
    tester.onerror = () => {};
    tester.src = candidate;
  });
  // Set dynamic header height for sticky nav offset
  const header = document.querySelector('.site-header');
  const setHeaderHeight = () => {
    if (!header) return;
    // Use fixed header height to avoid layout shift during refresh
    document.documentElement.style.setProperty('--header-h', '63px');
  };
  setHeaderHeight();
  window.addEventListener('resize', setHeaderHeight);
});

// Scrollspy: highlight active nav item based on visible section
const navLinks = Array.from(document.querySelectorAll('.top-nav a'));
const sectionMap = new Map(
  navLinks.map((a) => [document.querySelector(a.getAttribute('href')), a])
);

const observer = new IntersectionObserver(
  (entries) => {
    // Pick the entry closest to the top
    const visible = entries
      .filter((e) => e.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
    if (!visible) return;
    const link = sectionMap.get(visible.target);
    if (!link) return;
    navLinks.forEach((l) => l.classList.remove('active'));
    link.classList.add('active');
  },
  { rootMargin: `-${parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) + 10}px 0px -60% 0px`, threshold: 0.1 }
);

sections.forEach((sec) => observer.observe(sec));