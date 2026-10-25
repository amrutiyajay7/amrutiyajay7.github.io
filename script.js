const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.textContent = open ? '×' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.textContent = '☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();
const sections = document.querySelectorAll('main section[id]');
const links = document.querySelectorAll('#nav a[href^="#"]');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) links.forEach(link => link.classList.toggle('active', link.hash === '#' + entry.target.id));
  }), {rootMargin: '-35% 0px -55% 0px'});
  sections.forEach(section => observer.observe(section));
}
