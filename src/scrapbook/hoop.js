/* Smiski Yarn Scrapbook — embroidery hoop hero toy
   Rub the aida cloth to cross-stitch a pixel portrait of Joseph. */
export function initHoop() {
  const wrap = document.getElementById('stitch-hoop');
  if (!wrap) return;
  const canvas = wrap.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  const caption = document.getElementById('hoop-caption');
  const btnAuto = document.getElementById('hoop-auto');
  const btnReset = document.getElementById('hoop-reset');

  const SIZE = 340;              // logical canvas size
  const COLS = 24, ROWS = 24;
  const CELL = 12;
  const OX = (SIZE - COLS * CELL) / 2;
  const OY = (SIZE - ROWS * CELL) / 2;
  const R = SIZE / 2 - 6;        // cloth circle radius

  // Pixel portrait of Joseph (hood up, biting pizza) — hand-cleaned from
  // public/images/pizza.png via scripts/gen_hoop_portrait.py.
  const PALETTE = {
    H: '#141216',  // hair / pupils
    K: '#26262C',  // hood / jacket
    S: '#D69E78',  // skin
    L: '#ECC4A4',  // skin highlight / teeth & pizza crust
    E: '#46342E',  // eye sockets / nose shadow
    P: '#E4CE96',  // pizza
    R: '#C84637',  // pepperoni
    B: '#606870',  // background
  };

  const ART = [
    '.........HHHHHH.........',
    '.......HHHHHHHHHH.......',
    '.....HHHHHHHHHHHHHH.....',
    '....KHHHHHHHHHHHHHHK....',
    '...KKHHHHHHHHHHHHHHKK...',
    '..BKHHHHHHHHHHHHHHHHKB..',
    '..BKHSSSSSSSSSSSSSSHKB..',
    '.BKHSSSSSSSSSSSSSSSSHKB.',
    '.BKHSEEESSSSSSSSEEESHKB.',
    '.BKHSEHESSSSSSSSEHESHKB.',
    'BBKHSEEESSSSSSSSEEESHKBB',
    'BBKHSSSSSSSEESSSSSSSHKBB',
    'BBKHSSSSSSEEEESSSSSSHKBB',
    'BBKHSSSSSSSEESSSSSSSHKBB',
    '.BKHSSLLLLLLLLLLLLSSHKB.',
    '.BKHSSLLLLLLLLLLLLSSHKB.',
    '.BKHSSSPPPPPPPPPPSSSHKB.',
    '.BBKHSPPLLLLLLLLPPSHKBB.',
    '..BKHPPLLLLRLLLLLPPHKB..',
    '..BKKPPPLLLLLLLLPPPKKB..',
    '...BKPPPPPLLLLPPPPPKB...',
    '....KKPPPPPPPPPPPPKK....',
    '......KKPPPPPPPPKK......',
    '.........KKKKKK.........',
  ];

  // flat list of stitchable cells
  const cells = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const k = ART[r][c];
      if (k !== '.') cells.push({ r: r, c: c, color: PALETTE[k] });
    }
  }
  const cellIndex = new Map();
  cells.forEach((cell, i) => cellIndex.set(cell.r + ':' + cell.c, i));

  let stitched = new Set();
  let autoTimer = null;
  let autoUsedEver = false;
  let celebrated = false;

  // deterministic jitter so stitches look hand-sewn but stable
  function jitter(r, c, salt) {
    const x = Math.sin(r * 127.1 + c * 311.7 + salt * 74.7) * 43758.5453;
    return (x - Math.floor(x)) - 0.5;
  }

  function setupCanvas() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = SIZE * dpr;
    canvas.height = SIZE * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function drawCloth() {
    ctx.clearRect(0, 0, SIZE, SIZE);
    // cloth disc
    ctx.beginPath();
    ctx.arc(SIZE / 2, SIZE / 2, R, 0, Math.PI * 2);
    ctx.fillStyle = '#FBF6E9';
    ctx.fill();
    // aida weave holes
    ctx.fillStyle = 'rgba(74, 67, 56, 0.10)';
    for (let r = 0; r <= ROWS; r++) {
      for (let c = 0; c <= COLS; c++) {
        const x = OX + c * CELL;
        const y = OY + r * CELL;
        if (Math.hypot(x - SIZE / 2, y - SIZE / 2) < R - 4) {
          ctx.beginPath();
          ctx.arc(x, y, 1.4, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
  }

  function drawStitch(i) {
    const cell = cells[i];
    const x = OX + cell.c * CELL + CELL / 2;
    const y = OY + cell.r * CELL + CELL / 2;
    const a = CELL / 2 - 2.2;
    const j1 = jitter(cell.r, cell.c, 1) * 2.2;
    const j2 = jitter(cell.r, cell.c, 2) * 2.2;
    ctx.lineCap = 'round';
    // thread shadow
    ctx.strokeStyle = 'rgba(74, 67, 56, 0.18)';
    ctx.lineWidth = 4.4;
    ctx.beginPath();
    ctx.moveTo(x - a + j1, y - a + 1.2);
    ctx.lineTo(x + a + j2, y + a + 1.2);
    ctx.moveTo(x + a + j1, y - a + 1.2);
    ctx.lineTo(x - a + j2, y + a + 1.2);
    ctx.stroke();
    // thread
    ctx.strokeStyle = cell.color;
    ctx.lineWidth = 3.6;
    ctx.beginPath();
    ctx.moveTo(x - a + j1, y - a);
    ctx.lineTo(x + a + j2, y + a);
    ctx.moveTo(x + a + j1, y - a);
    ctx.lineTo(x - a + j2, y + a);
    ctx.stroke();
  }

  function stitchCell(i) {
    if (stitched.has(i)) return;
    stitched.add(i);
    drawStitch(i);
    if (stitched.size === cells.length) celebrate();
  }

  function celebrate() {
    if (celebrated) return;
    celebrated = true;
    caption.textContent = 'ta-da! all stitched — hi, it’s me!';
    wrap.classList.add('hoop-done');
    setTimeout(() => wrap.classList.remove('hoop-done'), 1300);
    wrap.dispatchEvent(new CustomEvent('hoop:done', { detail: { handmade: !autoUsedEver }, bubbles: true }));
  }

  function updateCaption() {
    if (celebrated) return;
    const p = stitched.size / cells.length;
    if (p === 0) caption.textContent = 'rub the cloth to stitch me in →';
    else if (p < 0.5) caption.textContent = 'keep going…';
    else if (p < 1) caption.textContent = 'almost there!';
  }

  // ── rub to stitch ──
  function stitchAt(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    const x = (clientX - rect.left) * (SIZE / rect.width);
    const y = (clientY - rect.top) * (SIZE / rect.height);
    const c = Math.floor((x - OX) / CELL);
    const r = Math.floor((y - OY) / CELL);
    // stitch a small cross-shaped brush
    [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]].forEach((d) => {
      const i = cellIndex.get((r + d[1]) + ':' + (c + d[0]));
      if (i !== undefined) stitchCell(i);
    });
    updateCaption();
  }

  canvas.addEventListener('pointermove', (e) => stitchAt(e.clientX, e.clientY));
  canvas.addEventListener('pointerdown', (e) => stitchAt(e.clientX, e.clientY));

  // ── auto stitch ──
  btnAuto.addEventListener('click', () => {
    if (autoTimer) return;
    autoUsedEver = true;
    let i = 0;
    autoTimer = setInterval(() => {
      let drawn = 0;
      while (i < cells.length && drawn < 4) {
        if (!stitched.has(i)) { stitchCell(i); drawn++; }
        i++;
      }
      updateCaption();
      if (i >= cells.length) { clearInterval(autoTimer); autoTimer = null; }
    }, 16);
  });

  // ── unpick ──
  btnReset.addEventListener('click', () => {
    if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
    stitched = new Set();
    celebrated = false;
    autoUsedEver = false;
    wrap.classList.remove('hoop-done');
    drawCloth();
    caption.textContent = 'rub the cloth to stitch me in →';
  });

  setupCanvas();
  drawCloth();
}
