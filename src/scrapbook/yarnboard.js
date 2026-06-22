/* Smiski Yarn Scrapbook — interactive yarn board
   Verlet-rope yarn strung between sewn-button pins. Grab & tug. */
export function initYarnBoard() {
  const board = document.getElementById('yarn-board');
  if (!board) return;
  const canvas = board.querySelector('.yb-canvas');
  const ctx = canvas.getContext('2d');
  const pins = Array.from(board.querySelectorAll('.yb-pin'));
  if (pins.length < 2) return;

  let W = 0, H = 0, dpr = 1;
  let ropes = [];
  let grabbed = null; // { rope, idx }
  let running = false;
  let t = 0;

  function boardRect() { return board.getBoundingClientRect(); }

  function anchorPos(pin, br) {
    const pr = pin.getBoundingClientRect();
    return { x: pr.left + pr.width / 2 - br.left, y: pr.top + pr.height / 2 - br.top };
  }

  function buildRopes() {
    const br = boardRect();
    ropes = [];
    for (let i = 0; i < pins.length - 1; i++) {
      const a = anchorPos(pins[i], br);
      const b = anchorPos(pins[i + 1], br);
      const dist = Math.hypot(b.x - a.x, b.y - a.y);
      const n = Math.max(14, Math.round(dist / 20));
      const seg = (dist * 1.16) / n;
      const pts = [];
      for (let j = 0; j <= n; j++) {
        const tt = j / n;
        const x = a.x + (b.x - a.x) * tt;
        const y = a.y + (b.y - a.y) * tt + Math.sin(tt * Math.PI) * dist * 0.07;
        pts.push({ x: x, y: y, px: x, py: y });
      }
      ropes.push({ pts: pts, seg: seg, pinA: pins[i], pinB: pins[i + 1] });
    }
  }

  function resize() {
    const br = boardRect();
    dpr = window.devicePixelRatio || 1;
    W = br.width; H = br.height;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    buildRopes();
  }

  function step() {
    t += 0.016;
    const animOn = document.documentElement.dataset.anim !== 'off';
    const br = boardRect();

    ropes.forEach((rope, ri) => {
      const pts = rope.pts;
      const n = pts.length - 1;
      const a = anchorPos(rope.pinA, br);
      const b = anchorPos(rope.pinB, br);

      // integrate
      for (let j = 1; j < n; j++) {
        const p = pts[j];
        if (grabbed && grabbed.rope === rope && grabbed.idx === j) continue;
        const vx = (p.x - p.px) * 0.985;
        const vy = (p.y - p.py) * 0.985;
        p.px = p.x; p.py = p.y;
        p.x += vx;
        p.y += vy + 0.32; // gravity
        if (animOn) p.x += Math.sin(t * 0.9 + ri * 2 + j * 0.28) * 0.025; // idle breeze
      }
      // pin endpoints
      pts[0].x = a.x; pts[0].y = a.y; pts[0].px = a.x; pts[0].py = a.y;
      pts[n].x = b.x; pts[n].y = b.y; pts[n].px = b.x; pts[n].py = b.y;

      // constraints
      for (let it = 0; it < 4; it++) {
        for (let j = 0; j < n; j++) {
          const p1 = pts[j], p2 = pts[j + 1];
          const dx = p2.x - p1.x, dy = p2.y - p1.y;
          const d = Math.hypot(dx, dy) || 0.0001;
          const diff = (d - rope.seg) / d * 0.5;
          const ox = dx * diff, oy = dy * diff;
          const lockedA = j === 0 || (grabbed && grabbed.rope === rope && grabbed.idx === j);
          const lockedB = j + 1 === n || (grabbed && grabbed.rope === rope && grabbed.idx === j + 1);
          if (!lockedA) { p1.x += ox; p1.y += oy; }
          if (!lockedB) { p2.x -= ox; p2.y -= oy; }
        }
      }
    });
  }

  function yarnColors() {
    const cs = getComputedStyle(document.documentElement);
    return {
      main: (cs.getPropertyValue('--mint-deep') || '#3FA67E').trim(),
      lite: (cs.getPropertyValue('--mint') || '#8DD5B4').trim(),
    };
  }

  function tracePath(pts) {
    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    for (let j = 1; j < pts.length - 1; j++) {
      const xc = (pts[j].x + pts[j + 1].x) / 2;
      const yc = (pts[j].y + pts[j + 1].y) / 2;
      ctx.quadraticCurveTo(pts[j].x, pts[j].y, xc, yc);
    }
    ctx.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y);
  }

  function render() {
    ctx.clearRect(0, 0, W, H);
    const col = yarnColors();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ropes.forEach((rope) => {
      const pts = rope.pts;
      // soft shadow
      ctx.save();
      ctx.translate(0, 2.5);
      tracePath(pts);
      ctx.strokeStyle = 'rgba(74, 67, 56, 0.13)';
      ctx.lineWidth = 6;
      ctx.stroke();
      ctx.restore();
      // yarn body
      tracePath(pts);
      ctx.strokeStyle = col.main;
      ctx.lineWidth = 4.6;
      ctx.stroke();
      // twist highlight
      tracePath(pts);
      ctx.strokeStyle = col.lite;
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 6]);
      ctx.stroke();
      ctx.setLineDash([]);
    });
  }

  function nearestParticle(x, y, maxDist) {
    let best = null, bestD = maxDist;
    ropes.forEach((rope) => {
      for (let j = 1; j < rope.pts.length - 1; j++) {
        const d = Math.hypot(rope.pts[j].x - x, rope.pts[j].y - y);
        if (d < bestD) { bestD = d; best = { rope: rope, idx: j }; }
      }
    });
    return best;
  }

  function pointerXY(e) {
    const br = boardRect();
    return { x: e.clientX - br.left, y: e.clientY - br.top };
  }

  board.addEventListener('pointerdown', (e) => {
    const p = pointerXY(e);
    const hit = nearestParticle(p.x, p.y, 30);
    if (hit) {
      grabbed = hit;
      board.classList.add('yb-grabbing');
      board.setPointerCapture(e.pointerId);
      e.preventDefault();
    }
  });
  board.addEventListener('pointermove', (e) => {
    const p = pointerXY(e);
    if (grabbed) {
      const pt = grabbed.rope.pts[grabbed.idx];
      pt.x = p.x; pt.y = p.y; pt.px = p.x; pt.py = p.y;
    } else {
      board.classList.toggle('yb-near', !!nearestParticle(p.x, p.y, 26));
    }
  });
  function release(e) {
    if (!grabbed) return;
    // pluck: if the yarn was pulled far off its chord, let it twang
    const rope = grabbed.rope;
    const pts = rope.pts;
    const a = pts[0], b = pts[pts.length - 1];
    const p = pts[grabbed.idx];
    const len = Math.hypot(b.x - a.x, b.y - a.y) || 1;
    const disp = Math.abs((b.x - a.x) * (a.y - p.y) - (a.x - p.x) * (b.y - a.y)) / len;
    if (disp > 16) {
      pluckSound(Math.max(150, Math.min(330, 360 - len * 0.35)));
      board.dispatchEvent(new CustomEvent('yarn:pluck', { bubbles: true, detail: { x: p.x, y: p.y } }));
    }
    grabbed = null;
    board.classList.remove('yb-grabbing');
    if (e && e.pointerId !== undefined && board.hasPointerCapture(e.pointerId)) {
      board.releasePointerCapture(e.pointerId);
    }
  }
  board.addEventListener('pointerup', release);
  board.addEventListener('pointercancel', release);

  // ── soft pluck sound ──
  let audioCtx = null;
  function pluckSound(freq) {
    if (document.documentElement.dataset.anim === 'off') return;
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    } catch (err) { return; }
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const t0 = audioCtx.currentTime;
    const o = audioCtx.createOscillator();
    o.type = 'triangle';
    o.frequency.setValueAtTime(freq, t0);
    o.frequency.exponentialRampToValueAtTime(freq * 0.92, t0 + 0.3);
    const g = audioCtx.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(0.055, t0 + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.38);
    o.connect(g); g.connect(audioCtx.destination);
    o.start(t0); o.stop(t0 + 0.42);
  }

  // ── draggable cards (yarn re-strings on drop) ──
  let dragCard = null;
  Array.from(board.querySelectorAll('.yb-card')).forEach((card) => {
    card.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      const cr = card.getBoundingClientRect();
      dragCard = { card: card, dx: e.clientX - cr.left, dy: e.clientY - cr.top, w: cr.width, h: cr.height };
      card.classList.add('yb-dragging');
      card.setPointerCapture(e.pointerId);
      e.preventDefault();
    });
    card.addEventListener('pointermove', (e) => {
      if (!dragCard || dragCard.card !== card) return;
      const br = boardRect();
      let x = e.clientX - br.left - dragCard.dx;
      let y = e.clientY - br.top - dragCard.dy;
      x = Math.max(4, Math.min(br.width - dragCard.w - 4, x));
      y = Math.max(12, Math.min(br.height - dragCard.h - 6, y));
      card.style.left = ((x / br.width) * 100).toFixed(2) + '%';
      card.style.top = ((y / br.height) * 100).toFixed(2) + '%';
    });
    function dropCard(e) {
      if (!dragCard || dragCard.card !== card) return;
      dragCard = null;
      card.classList.remove('yb-dragging');
      if (e.pointerId !== undefined && card.hasPointerCapture(e.pointerId)) {
        card.releasePointerCapture(e.pointerId);
      }
      buildRopes(); // re-string the yarn with fresh sag
    }
    card.addEventListener('pointerup', dropCard);
    card.addEventListener('pointercancel', dropCard);
  });

  function loop() {
    if (!running) return;
    step();
    render();
    requestAnimationFrame(loop);
  }

  // only simulate while visible
  const vis = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting && !running) { running = true; requestAnimationFrame(loop); }
      else if (!en.isIntersecting) { running = false; }
    });
  }, { rootMargin: '80px 0px' });
  vis.observe(board);

  window.addEventListener('resize', () => resize());
  // expose a tiny API so easter eggs can bat the yarn around
  board.yarnPerturb = function (x, y, fx, fy) {
    const hit = nearestParticle(x, y, 120);
    if (!hit) return false;
    const p = hit.rope.pts[hit.idx];
    p.px = p.x - fx;
    p.py = p.y - fy;
    return true;
  };
  // fonts/layout settle
  resize();
  window.addEventListener('load', () => resize());
}
