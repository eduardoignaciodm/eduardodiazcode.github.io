// ============================================
// ED·DATA — main.js
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- LOADER ---------- */
  const loader = document.getElementById('loader');
  window.setTimeout(() => {
    loader.classList.add('hidden');
  }, 1200);

  /* ---------- NAV: scroll state ---------- */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (window.scrollY > 24) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- NAV: mobile burger ---------- */
  const burger = document.getElementById('navBurger');
  const navMobile = document.getElementById('navMobile');
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    navMobile.classList.toggle('open');
  });
  navMobile.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      navMobile.classList.remove('open');
    });
  });

  /* ---------- SCROLL REVEAL ---------- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach((el) => revealObserver.observe(el));

  /* ---------- GAUGE ANIMATION (specs section) ---------- */
  const gaugeFill = document.getElementById('gaugeFill');
  const gaugeNeedle = document.getElementById('gaugeNeedle');
  const gaugeValue = document.getElementById('gaugeValue');
  const gaugeSection = document.querySelector('.specs');

  const TARGET_PERCENT = 92; // nivel de compromiso/dominio mostrado
  const CIRC = 314; // longitud aproximada del arco (stroke-dasharray)

  let gaugeAnimated = false;

  function animateGauge() {
    if (gaugeAnimated) return;
    gaugeAnimated = true;

    const offset = CIRC - (CIRC * TARGET_PERCENT) / 100;
    gaugeFill.style.strokeDashoffset = offset;

    // needle rotates from -90deg (0%) to +90deg (100%) across the semicircle
    const angle = -90 + (180 * TARGET_PERCENT) / 100;
    gaugeNeedle.style.transform = `rotate(${angle}deg)`;

    // animate the counter number
    let current = 0;
    const duration = 1400;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = TARGET_PERCENT / steps;

    const counter = setInterval(() => {
      current += increment;
      if (current >= TARGET_PERCENT) {
        current = TARGET_PERCENT;
        clearInterval(counter);
      }
      gaugeValue.textContent = Math.round(current);
    }, stepTime);
  }

  if (gaugeSection) {
    const gaugeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateGauge();
          gaugeObserver.disconnect();
        }
      });
    }, { threshold: 0.4 });
    gaugeObserver.observe(gaugeSection);
  }

  /* ---------- SMOOTH ANCHOR OFFSET (account for fixed nav) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId.length <= 1) return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

});