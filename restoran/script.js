/* Restoran Kum Heng — script.js */

(function () {
  'use strict';

  /* ── Mobile hamburger toggle ── */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');

  hamburger?.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  /* Close mobile nav when any link is tapped */
  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ── Nav elevation on scroll ── */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    nav.style.boxShadow = window.scrollY > 10
      ? '0 2px 12px rgba(0,0,0,0.15)'
      : '';
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── Smooth scroll for anchor links (fallback for older browsers) ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ── Fade-in on scroll (Intersection Observer) ── */
  const fadeEls = document.querySelectorAll(
    '.menu-card, .gallery__item, .about__image-placeholder, .hours__map-placeholder'
  );

  if ('IntersectionObserver' in window) {
    fadeEls.forEach(el => { el.style.opacity = '0'; el.style.transition = 'opacity 0.4s ease, transform 0.4s ease'; el.style.transform = 'translateY(12px)'; });

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity  = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    fadeEls.forEach(el => observer.observe(el));
  }
})();
