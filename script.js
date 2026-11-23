const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const closeMenu = () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); toggle.setAttribute('aria-label','Open navigation'); document.body.classList.remove('menu-open'); };
toggle.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!isOpen));
  toggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  nav.classList.toggle('open', !isOpen);
  document.body.classList.toggle('menu-open', !isOpen);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
window.addEventListener('resize', () => { if (window.innerWidth > 800) closeMenu(); });

document.querySelector('#postcode-form').addEventListener('submit', event => {
  event.preventDefault();
  const value = document.querySelector('#postcode').value.trim();
  document.querySelector('.form-feedback').textContent = value ? `Thanks! We’ll check pickup availability for ${value}.` : '';
});

if (window.gsap && window.ScrollTrigger && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from('.hero-copy > *', {y:24, opacity:0, duration:.75, stagger:.1, ease:'power2.out'});
  gsap.from('.van', {x:70, opacity:0, duration:1, delay:.2, ease:'power3.out'});
  gsap.utils.toArray('.benefit, .step, .review').forEach((item, index) => {
    gsap.from(item, {y:35, opacity:0, duration:.65, ease:'power2.out', scrollTrigger:{trigger:item, start:'top 88%', once:true}, delay:(index%3)*.08});
  });
  gsap.from('.breeze > *', {y:25, opacity:0, duration:.7, stagger:.15, scrollTrigger:{trigger:'.breeze', start:'top 82%', once:true}});
  gsap.from('.app-banner', {y:45, opacity:0, duration:.8, scrollTrigger:{trigger:'.app-banner', start:'top 85%', once:true}});
}
