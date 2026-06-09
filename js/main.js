// === REVEAL AL SCROLL ===
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 100);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// === TYPEWRITER EN HERO TAG ===
const heroTag = document.querySelector('.hero-tag');
if (heroTag) {
  const texto = heroTag.textContent.trim();
  heroTag.textContent = '';
  heroTag.style.opacity = '1';
  heroTag.style.animation = 'none';
  let i = 0;
  const escribir = () => {
    if (i < texto.length) {
      heroTag.textContent += texto[i];
      i++;
      setTimeout(escribir, 45);
    }
  };
  setTimeout(escribir, 500);
}

// === CONTADORES ANIMADOS EN STATS ===
const sufijos = { '357000': '357K+', '3': '3+', '5': '5+' };

const contarObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const valorBase = el.textContent.trim();
      const numero = parseInt(valorBase);
      const sufijo = sufijos[valorBase] || (valorBase + '+');
      const esMiles = numero >= 1000;
      let actual = 0;
      const duracion = 1400;
      const pasos = 60;
      const incremento = numero / pasos;
      let frame = 0;

      const contador = setInterval(() => {
        frame++;
        actual = Math.min(Math.round(incremento * frame), numero);
        if (esMiles) {
          el.textContent = (actual >= 1000)
            ? Math.round(actual / 1000) + 'K+'
            : actual + '';
        } else {
          el.textContent = actual >= numero ? sufijo : actual + '';
        }
        if (frame >= pasos) {
          el.textContent = sufijo;
          clearInterval(contador);
        }
      }, duracion / pasos);

      contarObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-num').forEach(el => contarObserver.observe(el));

// === NAVBAR: RESALTAR SECCIÓN ACTIVA ===
const secciones = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav ul a');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove('activo');
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.classList.add('activo');
        }
      });
    }
  });
}, { threshold: 0.4 });

secciones.forEach(sec => navObserver.observe(sec));