// Custom cursor
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function animateCursor() {
    rx += (mx - rx) * 0.15; ry += (my - ry) * 0.15;
    if (cursor) { cursor.style.left = mx + 'px'; cursor.style.top = my + 'px'; }
    if (ring) { ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; }
    requestAnimationFrame(animateCursor);
  }
  animateCursor();
  document.querySelectorAll('a, button, .facility-card, .workout-card, .trainer-card').forEach(el => {
    el.addEventListener('mouseenter', () => { if(cursor) { cursor.style.width='20px'; cursor.style.height='20px'; } });
    el.addEventListener('mouseleave', () => { if(cursor) { cursor.style.width='12px'; cursor.style.height='12px'; } });
  });

  // Mobile menu
  function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
  }

  // Workout filter
  function filterWorkouts(cat, btn) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.workout-card').forEach((card, i) => {
      const show = cat === 'all' || card.dataset.cat === cat;
      card.classList.remove('visible');
      if (show) setTimeout(() => card.classList.add('visible'), i * 60);
    });
  }

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Form submit
  function submitForm() {
    const name = document.getElementById('fname').value.trim();
    const email = document.getElementById('femail').value.trim();
    if (!name || !email) { alert('Please enter your name and email.'); return; }
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
    document.getElementById('fname').value = '';
    document.getElementById('femail').value = '';
    document.getElementById('fphone').value = '';
    document.getElementById('fmsg').value = '';
    document.getElementById('fplan').value = '';
  }

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    nav.style.background = window.scrollY > 80 ? 'rgba(10,10,10,0.98)' : 'rgba(10,10,10,0.85)';
  });