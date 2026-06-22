/* Smiski Yarn Scrapbook — page behavior (vanilla, called after React mount) */
export function initPage() {
  // ── scroll reveal ──
  const rvObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          rvObserver.unobserve(e.target);
        }
      });
    },
    { rootMargin: '-60px 0px' }
  );
  document.querySelectorAll('.rv').forEach((el) => rvObserver.observe(el));

  // ── yarn divider draw-on-scroll ──
  const yarnObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('drawn');
          yarnObserver.unobserve(e.target);
        }
      });
    },
    { rootMargin: '-40px 0px' }
  );
  document.querySelectorAll('.yarn-divider').forEach((el) => yarnObserver.observe(el));

  // ── nav active link ──
  const navBtns = Array.from(document.querySelectorAll('.nav-link-btn[data-target]'));
  const sections = navBtns
    .map((b) => document.getElementById(b.dataset.target))
    .filter(Boolean);
  const secObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          navBtns.forEach((b) =>
            b.classList.toggle('active', b.dataset.target === e.target.id)
          );
        }
      });
    },
    { rootMargin: '-45% 0px -45% 0px' }
  );
  sections.forEach((s) => secObserver.observe(s));

  // ── nav click → smooth-scroll to section ──
  navBtns.forEach((b) => {
    b.addEventListener('click', () => {
      const target = document.getElementById(b.dataset.target);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // ── experience accordion ──
  document.querySelectorAll('.tl-row[data-expandable]').forEach((row) => {
    const card = row.querySelector('.tl-card');
    card.addEventListener('click', () => {
      const wasOpen = row.classList.contains('open');
      document
        .querySelectorAll('.tl-row.open[data-expandable]')
        .forEach((r) => r.classList.remove('open'));
      if (!wasOpen) row.classList.add('open');
    });
  });

  // ── stitched scroll progress ──
  const ss = document.querySelector('.scroll-stitch');
  if (ss) {
    let ticking = false;
    const update = () => {
      ticking = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      ss.style.setProperty('--sp', max > 0 ? Math.min(1, window.scrollY / max).toFixed(4) : '0');
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    window.addEventListener('resize', update);
    update();
  }
}
