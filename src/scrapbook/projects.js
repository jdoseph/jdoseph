/* Smiski Yarn Scrapbook — projects behavior.
   Some repos are private. Their "Request Access" links carry [data-private-repo]
   instead of an href; clicking one pops a themed toast inviting the visitor to
   email for access rather than navigating to a 404. */

const EMAIL = 'jdoseph.dev@gmail.com';
const TOAST_MS = 6000;

export function initProjects() {
  const links = document.querySelectorAll('a[data-private-repo]');
  if (!links.length) return;

  let toast = null;
  let hideTimer = null;

  function dismiss() {
    if (!toast) return;
    clearTimeout(hideTimer);
    toast.classList.remove('show');
    const node = toast;
    toast = null;
    setTimeout(() => node.remove(), 300);
  }

  function showToast(project) {
    dismiss(); // replace any existing toast

    const subject = encodeURIComponent(`${project} repository access`);
    const body = encodeURIComponent(
      `Hi Joseph,\n\nI saw your "${project}" project and would love to take a look at the code. Could you share access?\n\nThanks!`
    );
    const mailto = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

    toast = document.createElement('div');
    toast.className = 'repo-toast';
    toast.setAttribute('role', 'status');
    toast.innerHTML = `
      <span class="repo-toast-pin sewn-btn" aria-hidden="true"></span>
      <div class="repo-toast-body">
        <strong>“${project}” is a private repo</strong>
        <span>Interested in the code? Email me and I'll share access.</span>
        <a class="repo-toast-cta" href="${mailto}">✉ Email ${EMAIL}</a>
      </div>
      <button class="repo-toast-close" type="button" aria-label="Dismiss">×</button>
    `;
    document.body.appendChild(toast);

    toast
      .querySelector('.repo-toast-close')
      .addEventListener('click', dismiss);

    // animate in next frame so the transition runs
    requestAnimationFrame(() => toast.classList.add('show'));

    hideTimer = setTimeout(dismiss, TOAST_MS);
  }

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      showToast(link.dataset.project || 'This project');
    });
  });
}

/* Certificate lightbox — clicking a [data-cert] card opens the full cert image
   in a modal. Closes on backdrop click, the × button, or Escape. */
export function initCerts() {
  const cards = document.querySelectorAll('[data-cert]');
  const modal = document.getElementById('cert-modal');
  if (!cards.length || !modal) return;

  const img = modal.querySelector('.cert-modal-img');
  const title = modal.querySelector('.cert-modal-title');
  let lastFocused = null;

  function open(card) {
    lastFocused = card;
    img.src = card.dataset.cert;
    img.alt = card.dataset.certTitle || 'Certificate';
    title.textContent = card.dataset.certTitle || '';
    modal.hidden = false;
    requestAnimationFrame(() => modal.classList.add('show'));
    document.body.style.overflow = 'hidden';
    modal.querySelector('.cert-modal-close').focus();
  }

  function close() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
    setTimeout(() => {
      modal.hidden = true;
      img.src = '';
    }, 250);
    if (lastFocused) lastFocused.focus();
  }

  cards.forEach((card) => card.addEventListener('click', () => open(card)));

  modal.querySelectorAll('[data-cert-close]').forEach((el) =>
    el.addEventListener('click', close)
  );
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) close();
  });
}
