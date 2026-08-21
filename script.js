// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Terminal boot-sequence typewriter in the hero (respects reduced motion)
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const typeline = document.getElementById('typeline');
const message = 'LOGIN: pedro.oliveira — ROLE: backend/systems';

if (typeline) {
  if (prefersReducedMotion) {
    typeline.textContent = message;
  } else {
    let i = 0;
    const speed = 38;
    function type() {
      if (i <= message.length) {
        typeline.textContent = message.slice(0, i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }
}
