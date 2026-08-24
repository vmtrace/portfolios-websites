(() => {
  'use strict';
 
  // Menu mobile
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.querySelector('.nav');
 
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
    });
 
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
 
  // Header com sombra ao rolar
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (header) {
      header.style.boxShadow = window.scrollY > 10 ? '0 4px 20px rgba(0,0,0,0.3)' : 'none';
    }
  });
 
  // Ano do rodapé
  const anoEl = document.getElementById('ano');
  if (anoEl) anoEl.textContent = new Date().getFullYear();
 
  // Saudações baseadas na hora do dia
  const saudacao = document.getElementById('saudacao');
  if (saudacao) {
    const hora = new Date().getHours();
    let texto = 'Olá, eu sou';
    if (hora < 12) texto = 'Bom dia, eu sou';
    else if (hora < 18) texto = 'Boa tarde, eu sou';
    else texto = 'Boa noite, eu sou';
    saudacao.textContent = texto;
  }
 
  // Animar barras de habilidades quando visíveis
  const barras = document.querySelectorAll('.skill-bar span');
  const barObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const width = entry.target.getAttribute('data-width') || '0';
          entry.target.style.width = width + '%';
          barObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  barras.forEach((bar) => barObserver.observe(bar));
 
  // Animação de reveal ao rolar
  const revealEls = document.querySelectorAll('.skill-card, .project-card, .sobre-fatos li, .hero-terminal');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });
 
  // Formulário de contato (simulado)
  const form = document.getElementById('formContato');
  const status = document.getElementById('formStatus');
 
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const nome = document.getElementById('nome').value.trim();
      if (status) {
        status.textContent = nome
          ? `Obrigado, ${nome}! Sua mensagem foi enviada (demonstração).`
          : 'Por favor, preencha o formulário.';
      }
      form.reset();
    });
  }
})();