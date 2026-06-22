/* Smiski Yarn Scrapbook — easter eggs
   2: triple-click the nav logo button → it pops off, bounces, sews back
   3: boop the sun → spin + wink; 5 boops → sunglasses for the session
   4: click a cloud → shake + felt raindrops
   6: pluck the yarn 5x fast → felt cat paw bats the yarn */
export function initEggs() {
  const animOn = () => document.documentElement.dataset.anim !== 'off';

  /* ── 2 · nav logo button pop ── */
  const logoBtn = document.querySelector('.nav-logo .sewn-btn');
  if (logoBtn) {
    let clicks = [];
    let popping = false;
    logoBtn.parentElement.addEventListener('click', (e) => {
      const r = logoBtn.getBoundingClientRect();
      if (Math.abs(e.clientX - (r.left + r.width / 2)) > 22) return; // only the button itself
      e.preventDefault();
      const now = Date.now();
      clicks = clicks.filter((t) => now - t < 1600);
      clicks.push(now);
      if (clicks.length < 3 || popping || !animOn()) return;
      clicks = [];
      popping = true;

      const ghost = logoBtn.cloneNode(true);
      ghost.style.cssText =
        'position:fixed;z-index:999;margin:0;left:' + r.left + 'px;top:' + r.top + 'px;';
      document.body.appendChild(ghost);
      logoBtn.style.visibility = 'hidden';

      let x = r.left, y = r.top, vx = 2.6, vy = -3.5, rot = 0;
      const floor = window.innerHeight - 26;
      const t0 = performance.now();
      (function fall(t) {
        const done = t - t0 > 2400;
        vy += 0.55;
        x += vx; y += vy; rot += vx * 4;
        if (y > floor) { y = floor; vy *= -0.45; vx *= 0.88; }
        ghost.style.left = x + 'px';
        ghost.style.top = y + 'px';
        ghost.style.transform = 'rotate(' + rot + 'deg)';
        if (!done) { requestAnimationFrame(fall); return; }
        ghost.style.transition = 'opacity 0.3s';
        ghost.style.opacity = '0';
        setTimeout(() => {
          ghost.remove();
          logoBtn.style.visibility = '';
          logoBtn.animate(
            [{ transform: 'scale(0) rotate(-90deg)' }, { transform: 'scale(1.25) rotate(8deg)' }, { transform: 'scale(1)' }],
            { duration: 450, easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }
          );
          popping = false;
        }, 320);
      })(t0);
    });
  }

  /* ── 3 · sun boop ── */
  const sun = document.querySelector('.felt-sun');
  if (sun) {
    let boops = 0;
    if (sessionStorage.getItem('smk-sun-cool') === '1') sun.classList.add('cool');
    sun.addEventListener('click', () => {
      if (sun.classList.contains('boop')) return;
      sun.classList.add('boop');
      setTimeout(() => sun.classList.remove('boop'), 950);
      boops++;
      if (boops >= 5 && !sun.classList.contains('cool')) {
        setTimeout(() => {
          sun.classList.add('cool');
          sessionStorage.setItem('smk-sun-cool', '1');
        }, 950);
      }
    });
  }

  /* ── 4 · cloud rain (click only) ── */
  const sky = document.querySelector('.hero-sky');
  if (sky) {
    function rainFrom(cloud, count) {
      const skyR = sky.getBoundingClientRect();
      const cr = cloud.getBoundingClientRect();
      for (let i = 0; i < count; i++) {
        const drop = document.createElement('div');
        drop.className = 'felt-drop';
        drop.style.left = (cr.left - skyR.left + 6 + Math.random() * (cr.width - 12)) + 'px';
        drop.style.top = (cr.bottom - skyR.top - 2) + 'px';
        drop.style.setProperty('--drift', (Math.random() * 26 - 13).toFixed(0) + 'px');
        drop.style.animationDelay = (Math.random() * 0.35).toFixed(2) + 's';
        sky.appendChild(drop);
        drop.addEventListener('animationend', () => drop.remove());
      }
    }
    sky.querySelectorAll('.cloud-dangler').forEach((cd) => {
      const cloud = cd.querySelector('.felt-cloud');
      let cooling = false;
      cd.addEventListener('click', () => {
        if (cooling) return;
        cooling = true;
        cd.classList.add('rain-shake');
        setTimeout(() => cd.classList.remove('rain-shake'), 600);
        rainFrom(cloud, 6 + Math.floor(Math.random() * 4));
        setTimeout(() => { cooling = false; }, 900);
      });
    });
  }

  /* ── 6 · roaming pixel cat — wanders the board, pounces to the last tug ── */
  const board = document.getElementById('yarn-board');
  const cat = board && board.querySelector('.yb-cat');
  if (board && cat) {
    let curX = 0, curY = 0;          // current translate
    let busy = false;               // mid-pounce
    let engaged = false;            // actively playing
    let pending = null;             // tug that arrived during a pounce
    let idleTimer = null, wanderTimer = null;

    const cw = () => cat.offsetWidth || 72;
    const ch = () => cat.offsetHeight || 70;
    const bw = () => board.clientWidth;
    const bh = () => board.clientHeight;
    const clampX = (x) => Math.max(6, Math.min(bw() - cw() - 6, x));
    const clampY = (y) => Math.max(18, Math.min(bh() - ch() - 4, y));
    const home = () => ({ x: 10, y: bh() - ch() - 6 });

    function place(x, y, dur) {
      curX = clampX(x); curY = clampY(y);
      cat.style.transition = 'transform ' + dur + 'ms cubic-bezier(.45,0,.25,1)';
      cat.style.transform = 'translate(' + curX + 'px,' + curY + 'px)';
    }

    // park at home, hidden
    const h0 = home();
    curX = h0.x; curY = h0.y;
    cat.style.transform = 'translate(' + curX + 'px,' + curY + 'px)';

    function pounce(tx, ty) {
      busy = true;
      const dx = clampX(tx - cw() / 2);
      const dy = clampY(ty - ch() + 6);
      const apexY = Math.min(curY, dy) - 84;
      const midX = (curX + dx) / 2;
      cat.style.transition = 'none';
      const anim = cat.animate([
        { transform: 'translate(' + curX + 'px,' + curY + 'px) scale(1,1)' },
        { transform: 'translate(' + curX + 'px,' + curY + 'px) scale(1.14,.82)', offset: 0.16 },
        { transform: 'translate(' + midX + 'px,' + apexY + 'px) scale(.84,1.2)', offset: 0.52 },
        { transform: 'translate(' + dx + 'px,' + dy + 'px) scale(1.16,.8)', offset: 0.86 },
        { transform: 'translate(' + dx + 'px,' + dy + 'px) scale(1,1)' }
      ], { duration: 640, easing: 'cubic-bezier(.3,0,.25,1)' });
      curX = dx; curY = dy;
      anim.onfinish = () => {
        cat.style.transform = 'translate(' + curX + 'px,' + curY + 'px)';
        cat.classList.add('tap');
        // bat the nearest yarn where it landed
        if (typeof board.yarnPerturb === 'function') {
          board.yarnPerturb(curX + cw() / 2, curY + ch() / 2, 9, -8);
        }
        setTimeout(() => cat.classList.remove('tap'), 700);
        busy = false;
        if (pending) { const p = pending; pending = null; setTimeout(() => pounce(p.x, p.y), 180); }
      };
    }

    function scheduleWander() {
      clearTimeout(wanderTimer);
      wanderTimer = setTimeout(() => {
        if (engaged && !busy && animOn()) {
          place(20 + Math.random() * (bw() - cw() - 40), 26 + Math.random() * (bh() - ch() - 40), 820);
        }
        scheduleWander();
      }, 1500 + Math.random() * 1000);
    }

    function goHome() {
      engaged = false;
      const hh = home();
      place(hh.x, hh.y, 900);
      setTimeout(() => { if (!engaged) cat.classList.remove('awake'); }, 950);
    }

    board.addEventListener('yarn:pluck', (e) => {
      if (!animOn()) return;
      const d = e.detail || {};
      const tug = { x: typeof d.x === 'number' ? d.x : bw() / 2, y: typeof d.y === 'number' ? d.y : bh() / 2 };
      cat.classList.add('awake');
      engaged = true;
      clearTimeout(idleTimer);
      idleTimer = setTimeout(goHome, 6500);
      scheduleWander();
      if (busy) { pending = tug; } else { pounce(tug.x, tug.y); }
    });
  }
}
