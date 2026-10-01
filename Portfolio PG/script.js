const name = document.getElementById('name');

/* 1. split the name into single letters */
name.querySelectorAll('span').forEach(line => {
  const text = line.textContent;
  line.textContent = '';
  [...text].forEach(c => {
    const s = document.createElement('span');
    s.className = 'ch';
    s.textContent = c;
    s.setAttribute('aria-hidden', 'true');
    line.appendChild(s);
  });
});
const letters = [...name.querySelectorAll('.ch')];

/* 2. letters near the cursor zoom a little and get a red outline */
name.addEventListener('pointermove', e => {
  letters.forEach(l => {
    const r = l.getBoundingClientRect();
    const d = Math.hypot(e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2));
    const k = Math.max(0, 1 - d / (r.height * 1.6));   // 1 = under cursor, 0 = far away
    l.style.transform = `scale(${1 + 0.3 * k})`;       // 0.3 = zoom amount
    l.classList.toggle('hot', k > 0.35);
  });
});
name.addEventListener('pointerleave', () => {
  letters.forEach(l => { l.style.transform = ''; l.classList.remove('hot'); });
});

/* 3. fade sections in as they scroll into view */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.rv').forEach((el, i) => {
  el.style.transitionDelay = (i % 4) * 90 + 'ms';
  io.observe(el);
});


/* ---------- INTERNSHIP IMAGE SOFT REVEAL ---------- */

const internshipPhoto = document.getElementById('internshipPhoto');
const originalImg = internshipPhoto?.querySelector('.original-img');

if (internshipPhoto && originalImg) {

  internshipPhoto.addEventListener('pointermove', e => {

    const rect = internshipPhoto.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    originalImg.style.webkitMaskImage = `
      radial-gradient(
        circle 110px at ${x}px ${y}px,
        black 0%,
        black 40%,
        transparent 100%
      )
    `;

    originalImg.style.maskImage = `
      radial-gradient(
        circle 110px at ${x}px ${y}px,
        black 0%,
        black 40%,
        transparent 100%
      )
    `;
  });

  internshipPhoto.addEventListener('pointerleave', () => {

    originalImg.style.webkitMaskImage = `
      radial-gradient(
        circle 0px at 50% 50%,
        black 0%,
        transparent 100%
      )
    `;

    originalImg.style.maskImage = `
      radial-gradient(
        circle 0px at 50% 50%,
        black 0%,
        transparent 100%
      )
    `;
  });
}