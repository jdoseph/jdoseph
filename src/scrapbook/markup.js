/* Smiski Yarn Scrapbook — page markup.
   Mirrors the imported "Smiski Yarn Portfolio.html" body, with the design's
   <image-slot> placeholders replaced by real photos from /public/images and
   the Resume buttons wired to the resume PDF. Rendered via
   dangerouslySetInnerHTML so every inline style / SVG / CSS var is preserved
   exactly; behavior is attached afterward by the scrapbook init modules. */
export const scrapbookMarkup = `
<div class="paper-grain"></div>
<div class="felt-bg"></div>

<div class="scroll-stitch" aria-hidden="true">
  <div class="ss-track"></div>
  <div class="ss-sewn"></div>
  <svg class="ss-needle" width="24" height="24" viewBox="0 0 24 24">
    <path d="M4,20 L18,6" stroke="#9CA3A8" stroke-width="2.4" stroke-linecap="round"></path>
    <circle cx="18.5" cy="5.5" r="2.6" fill="none" stroke="#9CA3A8" stroke-width="1.6"></circle>
  </svg>
</div>

<div class="app">

  <!-- ═══════════ NAV ═══════════ -->
  <nav class="floating-nav">
    <div class="nav-pill">
      <a href="#top" class="nav-logo"><span class="sewn-btn"></span>Joseph Do</a>
      <div class="nav-links">
        <button class="nav-link-btn" data-target="about">About</button>
        <button class="nav-link-btn" data-target="journey">Journey</button>
        <button class="nav-link-btn" data-target="experience">Experience</button>
        <button class="nav-link-btn" data-target="projects">Projects</button>
        <button class="nav-link-btn" data-target="skills">Skills</button>
        <button class="nav-link-btn" data-target="contact">Contact</button>
      </div>
      <a href="/josephdoresume.pdf" target="_blank" rel="noopener noreferrer" class="nav-resume-btn">Resume ↗</a>
    </div>
  </nav>

  <!-- ═══════════ HERO ═══════════ -->
  <section class="hero-section" id="top" data-screen-label="Hero">
    <div class="hero-sky" aria-hidden="true">
      <div class="felt-sun">
        <svg viewBox="0 0 200 200">
          <g class="sun-rays" fill="#EFCF7F">
            <path d="M100,4 L113,40 L87,40 Z"></path>
            <path d="M100,4 L113,40 L87,40 Z" transform="rotate(45 100 100)"></path>
            <path d="M100,4 L113,40 L87,40 Z" transform="rotate(90 100 100)"></path>
            <path d="M100,4 L113,40 L87,40 Z" transform="rotate(135 100 100)"></path>
            <path d="M100,4 L113,40 L87,40 Z" transform="rotate(180 100 100)"></path>
            <path d="M100,4 L113,40 L87,40 Z" transform="rotate(225 100 100)"></path>
            <path d="M100,4 L113,40 L87,40 Z" transform="rotate(270 100 100)"></path>
            <path d="M100,4 L113,40 L87,40 Z" transform="rotate(315 100 100)"></path>
          </g>
          <circle cx="100" cy="100" r="62" fill="#F4DC9B"></circle>
          <circle cx="100" cy="100" r="50" fill="none" stroke="#D9B86A" stroke-width="2.5" stroke-dasharray="7 6"></circle>
          <g class="sun-face" stroke="#A4823F" stroke-width="3" stroke-linecap="round" fill="none">
            <path class="sun-eye-open-l" d="M77,93 Q82,86 87,93"></path>
            <path class="sun-eye-wink" d="M77,93 Q82,99 87,93" opacity="0"></path>
            <path d="M113,93 Q118,86 123,93"></path>
            <path d="M88,112 Q100,122 112,112"></path>
          </g>
          <g class="sun-shades">
            <rect x="70" y="84" width="24" height="16" rx="7" fill="#4A4338"></rect>
            <rect x="106" y="84" width="24" height="16" rx="7" fill="#4A4338"></rect>
            <path d="M94,90 L106,90 M70,90 L62,84 M130,90 L138,84" stroke="#4A4338" stroke-width="3.5" stroke-linecap="round"></path>
          </g>
        </svg>
      </div>
      <div class="dangler cloud-dangler" style="left: 22%; --cl-h: 122px;">
        <div class="yarn-string"></div>
        <div class="felt-cloud" style="width: 70px; height: 26px;"></div>
      </div>
      <div class="dangler cloud-dangler" style="left: 38%; --cl-h: 170px;">
        <div class="yarn-string"></div>
        <div class="felt-cloud" style="width: 80px; height: 28px;"></div>
      </div>
      <div class="dangler cloud-dangler" style="left: 53%; --cl-h: 130px;">
        <div class="yarn-string"></div>
        <div class="felt-cloud" style="width: 64px; height: 24px;"></div>
      </div>
      <div class="dangler cloud-dangler" style="left: 69%; --cl-h: 150px;">
        <div class="yarn-string"></div>
        <div class="felt-cloud"></div>
      </div>
      <div class="dangler cloud-dangler" style="left: 85%; --cl-h: 116px;">
        <div class="yarn-string"></div>
        <div class="felt-cloud" style="width: 84px; height: 30px;"></div>
      </div>
    </div>
    <div class="hero-inner">
      <div class="hero-text-col">
        <span class="hero-eyebrow">hello! i'm</span>
        <h1 class="hero-name yarn-title">
          <span class="hero-line">Joseph</span>
          <span class="hero-line hero-line--alt yarn-title--ink">Do.</span>
        </h1>
        <div class="seam hero-stitch-under"></div>
        <p class="hero-tagline">
          Software Engineer at <strong>Charles Schwab</strong> · stitching together an
          MSCS at <strong>Georgia Tech</strong> · ex-USAF DoD · world traveler.
        </p>
        <div class="hero-stats">
          <div class="hero-stat" style="--rot: calc(var(--tilt) * -1.4);">
            <span class="hero-stat-val">2+</span>
            <span class="hero-stat-label">Yrs Exp</span>
          </div>
          <div class="hero-stat" style="--rot: calc(var(--tilt) * 1);">
            <span class="hero-stat-val">10+</span>
            <span class="hero-stat-label">Countries</span>
          </div>
          <div class="hero-stat" style="--rot: calc(var(--tilt) * -0.8);">
            <span class="hero-stat-val">3.5</span>
            <span class="hero-stat-label">DUPR</span>
          </div>
        </div>
        <div class="hero-cta">
          <a href="#projects" class="btn-primary">View Work</a>
          <a href="/josephdoresume.pdf" target="_blank" rel="noopener noreferrer" class="btn-outline">Resume ↗</a>
        </div>
      </div>

      <div class="hero-smiski-col">
        <div class="hoop-col">
          <div class="dangler hero-dangler">
            <span class="hoop-pin sewn-btn"></span>
            <div class="yarn-string"></div>
            <div class="hoop-wrap" id="stitch-hoop">
              <span class="hoop-screw"></span>
              <div class="hoop-ring"></div>
              <canvas width="340" height="340" aria-label="Interactive cross-stitch portrait of Joseph — rub to stitch"></canvas>
            </div>
          </div>
          <span class="hoop-caption" id="hoop-caption">rub the cloth to stitch me in →</span>
          <div class="hoop-actions">
            <button class="hoop-btn" id="hoop-auto">stitch it for me</button>
            <button class="hoop-btn" id="hoop-reset">unpick</button>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-scroll-hint">
      <span>scroll</span>
      <div class="yarn-string"></div>
    </div>
  </section>

  <svg class="yarn-divider" viewBox="0 0 1200 70" preserveAspectRatio="none" aria-hidden="true">
    <path d="M-20,35 C140,0 260,70 420,35 C580,0 700,70 860,35 C1020,0 1120,60 1220,30"></path>
  </svg>

  <!-- ═══════════ ABOUT ═══════════ -->
  <section id="about" data-screen-label="About">
    <div class="section-inner">
      <div class="sec-hdr">
        <div class="sec-hdr-text">
          <div class="sec-label-row rv">
            <span class="craft-label">patch 01 · about</span>
            <div class="seam"></div>
          </div>
          <p class="about-manifesto rv rv-d1">
            I build software that <em>matters,</em> travel the world that
            <em>inspires,</em> and play pickleball until my arms give out.
          </p>
        </div>
      </div>

      <div class="about-grid">
        <div class="bio-photo-wrap rv">
          <div class="polaroid" style="--rot: calc(var(--tilt) * -2);">
            <div class="tape tape--tc"></div>
            <img class="slot-img" src="/images/jdosephgraduation.png" alt="Joseph on graduation day" />
            <div class="polaroid-caption">
              <span class="polaroid-place">grad day!</span>
              <span class="polaroid-date">May 2024</span>
            </div>
          </div>
        </div>

        <div class="bio-block">
          <p class="bio-text rv">
            Hey — I'm Joseph. Software Engineer at <strong>Charles Schwab</strong>, pursuing my
            Master's in Computer Science at <strong>Georgia Tech</strong> (HCI focus). Before that
            I spent a year as a DoD software engineer at Robins Air Force Base, where I held a
            Secret clearance and worked on full-stack systems for national security.
          </p>
          <p class="bio-text rv rv-d1">
            I graduated from UGA with a BS in CS in May 2024. Outside of code I'm an obsessive
            traveler (10 countries and counting), a pickleball addict (3.5 DUPR, aiming for 4.0),
            and a matcha connoisseur.
          </p>

          <div class="bio-tags rv rv-d2">
            <span class="bio-tag" style="--rot: calc(var(--tilt) * -1.5);">Software Engineer</span>
            <span class="bio-tag" style="--rot: calc(var(--tilt) * 1);">Georgia Tech MSCS</span>
            <span class="bio-tag" style="--rot: calc(var(--tilt) * -0.7);">Ex-USAF DoD</span>
            <span class="bio-tag" style="--rot: calc(var(--tilt) * 1.4);">UGA Alum</span>
            <span class="bio-tag" style="--rot: calc(var(--tilt) * -1.1);">World Traveler</span>
            <span class="bio-tag" style="--rot: calc(var(--tilt) * 0.8);">Pickleball 3.5</span>
            <span class="bio-tag" style="--rot: calc(var(--tilt) * -1.8);">Matcha Enjoyer</span>
          </div>

          <div class="rv">
            <p class="travels-heading">field notes &amp; adventures <span class="seam"></span></p>
            <div class="travel-grid">
              <a class="travel-link" href="https://www.youtube.com/watch?v=V_HGCSg3udA" target="_blank" rel="noopener noreferrer" aria-label="Watch the Italy travel video">
                <div class="polaroid" style="--rot: calc(var(--tilt) * -2.2);">
                  <div class="tape tape--tc"></div>
                  <img class="slot-img" src="/images/IMG_9781.JPG" alt="Italy" />
                  <div class="polaroid-caption"><span class="polaroid-place">Italy</span><span class="polaroid-date">Sep 2025</span></div>
                </div>
              </a>
              <a class="travel-link" href="https://www.youtube.com/watch?v=_2qAu3Sd-qg" target="_blank" rel="noopener noreferrer" aria-label="Watch the Lisbon travel video">
                <div class="polaroid" style="--rot: calc(var(--tilt) * 1.6);">
                  <div class="tape tape--tc tape--warm"></div>
                  <img class="slot-img" src="/images/IMG_0815.jpeg" alt="Lisbon" />
                  <div class="polaroid-caption"><span class="polaroid-place">Lisbon</span><span class="polaroid-date">Dec 2025</span></div>
                </div>
              </a>
              <a class="travel-link" href="https://www.youtube.com/watch?v=CsUfV_KlPB8" target="_blank" rel="noopener noreferrer" aria-label="Watch the Chicago travel video">
                <div class="polaroid" style="--rot: calc(var(--tilt) * -1.2);">
                  <div class="tape tape--tc"></div>
                  <img class="slot-img" src="/images/IMG_0251.jpeg" alt="Chicago" />
                  <div class="polaroid-caption"><span class="polaroid-place">Chicago</span><span class="polaroid-date">Nov 2025</span></div>
                </div>
              </a>
              <a class="travel-link" href="https://youtu.be/f5WFBwyNhik" target="_blank" rel="noopener noreferrer" aria-label="Watch the Japan travel video">
                <div class="polaroid" style="--rot: calc(var(--tilt) * 2);">
                  <div class="tape tape--tc tape--warm"></div>
                  <img class="slot-img" src="/images/japan.JPG" alt="Japan" />
                  <div class="polaroid-caption"><span class="polaroid-place">Japan</span><span class="polaroid-date">Mar 2024</span></div>
                </div>
              </a>
              <a class="travel-link" href="https://www.youtube.com/watch?v=FNVkawNDIVo" target="_blank" rel="noopener noreferrer" aria-label="Watch the Asheville travel video">
                <div class="polaroid" style="--rot: calc(var(--tilt) * 1.3);">
                  <div class="tape tape--tc tape--warm"></div>
                  <img class="slot-img" src="/images/IMG_0072.jpeg" alt="Asheville" />
                  <div class="polaroid-caption"><span class="polaroid-place">Asheville</span><span class="polaroid-date">Oct 2025</span></div>
                </div>
              </a>
              <a class="travel-link" href="https://youtu.be/IBv16D1lZ64?si=Q3-4Cx0P8WQ2J2tW" target="_blank" rel="noopener noreferrer" aria-label="Watch the Las Vegas travel video">
                <div class="polaroid" style="--rot: calc(var(--tilt) * -1.7);">
                  <div class="tape tape--tc"></div>
                  <img class="slot-img" src="/images/lasvegas.jpg" alt="Las Vegas" />
                  <div class="polaroid-caption"><span class="polaroid-place">Las Vegas</span><span class="polaroid-date">May 2025</span></div>
                </div>
              </a>
              <a class="travel-link" href="https://www.youtube.com/watch?v=dwmDyCEg204" target="_blank" rel="noopener noreferrer" aria-label="Watch the NYC travel video">
                <div class="polaroid" style="--rot: calc(var(--tilt) * 1.1);">
                  <div class="tape tape--tc tape--warm"></div>
                  <img class="slot-img" src="/images/pizza.png" alt="New York City" />
                  <div class="polaroid-caption"><span class="polaroid-place">NYC</span><span class="polaroid-date">May 2025</span></div>
                </div>
              </a>
              <a class="travel-link" href="https://youtube.com/shorts/csrHVybmAaU?feature=share" target="_blank" rel="noopener noreferrer" aria-label="Watch the pickleball video">
                <div class="polaroid" style="--rot: calc(var(--tilt) * -2.4);">
                  <div class="tape tape--tc"></div>
                  <img class="slot-img" src="/images/pickleball.jpg" alt="Pickleball" />
                  <div class="polaroid-caption"><span class="polaroid-place">Pickleball</span><span class="polaroid-date">Ongoing</span></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <svg class="yarn-divider" viewBox="0 0 1200 70" preserveAspectRatio="none" aria-hidden="true">
    <path d="M1220,35 C1060,70 940,0 780,35 C620,70 500,0 340,35 C180,70 80,10 -20,40"></path>
  </svg>

  <!-- ═══════════ YARN BOARD ═══════════ -->
  <section id="journey" data-screen-label="Yarn Board">
    <div class="section-inner">
      <div class="sec-hdr">
        <div class="sec-hdr-text">
          <div class="sec-label-row rv">
            <span class="craft-label">patch 02 · the yarn board</span>
            <div class="seam"></div>
          </div>
          <h2 class="sec-heading rv rv-d1" style="font-family: var(--font-display); font-weight: 700;">
            Follow the <span class="stitch-u" style="color: var(--mint-deep);">thread</span>
          </h2>
        </div>
      </div>

      <span class="yb-hint rv">psst — tug the yarn and watch who comes to pounce</span>

      <div class="yb-board rv rv-d1" id="yarn-board">
        <canvas class="yb-canvas"></canvas>
        <div class="yb-cat" aria-hidden="true">
          <img src="/images/cat-calico.png" alt="" />
        </div>

        <div class="yb-card stitch-card" style="--x: 2%; --y: 11%; --mx: 3%; --my: 3%; --rot: calc(var(--tilt) * -1.6);">
          <span class="yb-pin sewn-btn"></span>
          <span class="yb-year">2020</span>
          <div class="yb-place">Savannah, GA</div>
          <div class="yb-note">First gig — automating IT support at Georgia Southern</div>
        </div>

        <div class="yb-card stitch-card" style="--x: 22%; --y: 54%; --mx: 51%; --my: 21%; --rot: calc(var(--tilt) * 1.2);">
          <span class="yb-pin sewn-btn"></span>
          <span class="yb-year">2022</span>
          <div class="yb-place">Athens, GA</div>
          <div class="yb-note">BS in Computer Science at UGA — go Dawgs</div>
        </div>

        <div class="yb-card stitch-card" style="--x: 43%; --y: 9%; --mx: 3%; --my: 41%; --rot: calc(var(--tilt) * -0.9);">
          <span class="yb-pin sewn-btn"></span>
          <span class="yb-year">2024</span>
          <div class="yb-place">Robins AFB, GA</div>
          <div class="yb-note">DoD software engineer — full-stack with a Secret clearance</div>
        </div>

        <div class="yb-card stitch-card" style="--x: 64%; --y: 52%; --mx: 51%; --my: 60%; --rot: calc(var(--tilt) * 1.5);">
          <span class="yb-pin sewn-btn"></span>
          <span class="yb-year">2026</span>
          <div class="yb-place">Atlanta, GA</div>
          <div class="yb-note">MSCS at Georgia Tech, HCI concentration</div>
        </div>

        <div class="yb-card stitch-card" style="--x: 84%; --y: 13%; --mx: 27%; --my: 79%; --rot: calc(var(--tilt) * -1.2);">
          <span class="yb-pin sewn-btn"></span>
          <span class="yb-year">2026</span>
          <div class="yb-place">Southlake, TX</div>
          <div class="yb-note">Software Engineer I at Charles Schwab</div>
        </div>
      </div>
    </div>
  </section>

  <svg class="yarn-divider" viewBox="0 0 1200 70" preserveAspectRatio="none" aria-hidden="true">
    <path d="M-20,30 C120,65 260,5 420,40 C580,72 700,2 860,38 C1020,70 1120,10 1220,38"></path>
  </svg>

  <!-- ═══════════ EXPERIENCE ═══════════ -->
  <section id="experience" data-screen-label="Experience">
    <div class="section-inner">
      <div class="sec-hdr">
        <div class="sec-hdr-text">
          <div class="sec-label-row rv">
            <span class="craft-label">patch 03 · experience</span>
            <div class="seam"></div>
          </div>
          <h2 class="sec-heading yarn-title--ink rv rv-d1" style="font-family: var(--font-display); font-weight: 700;">
            Where I've <span class="stitch-u">worked &amp; studied</span>
          </h2>
        </div>
      </div>

      <div class="timeline-wrap">
        <div class="timeline-yarn"></div>

        <div class="tl-row rv" data-expandable="">
          <span class="sewn-btn sewn-btn--idle"></span>
          <div class="tl-card stitch-card" style="--rot: calc(var(--tilt) * -0.4);">
            <div class="tl-header">
              <div class="tl-logo-row">
                <span class="tl-logo">CS</span>
                <div>
                  <div class="tl-company">Charles Schwab<span class="tl-now">now</span></div>
                  <div class="tl-role">Software Engineer</div>
                </div>
              </div>
              <div class="tl-meta">
                <div class="tl-duration">Jan 2026 – Present</div>
                <div class="tl-location">Southlake, TX</div>
              </div>
            </div>
            <span class="tl-expand">details</span>
            <div class="tl-details">
              <div class="tl-details-inner">
                <p class="tl-highlight">Shipped a production event-streaming pipeline (Kafka) for near-real-time data flow to downstream consumers</p>
                <p class="tl-highlight">Built and launched a new REST API on a multi-tenant backend, expanding it to new product lines without disrupting existing consumers</p>
                <p class="tl-highlight">Hardened production services by standardizing logging and observability, unlocking end-to-end testing weeks ahead of upstream dependencies</p>
                <p class="tl-highlight">Created an automated agent for team standards and workflows, plus acceptance plans for production release documentation</p>
              </div>
            </div>
          </div>
        </div>

        <div class="tl-row rv">
          <span class="sewn-btn"></span>
          <div class="tl-card stitch-card" style="--rot: calc(var(--tilt) * 0.4);">
            <div class="tl-header">
              <div class="tl-logo-row">
                <span class="tl-logo">GT</span>
                <div>
                  <div class="tl-company">Georgia Tech<span class="tl-now">now</span></div>
                  <div class="tl-role">Master's — Computer Science (HCI)</div>
                </div>
              </div>
              <div class="tl-meta">
                <div class="tl-duration">Jan 2026 – May 2027</div>
                <div class="tl-location">Atlanta, GA</div>
              </div>
            </div>
            <div class="tl-details" style="max-height: none;">
              <div class="tl-details-inner">
                <p class="tl-highlight">Pursuing an MSCS with a concentration in Human-Computer Interaction</p>
              </div>
            </div>
          </div>
        </div>

        <div class="tl-row rv" data-expandable="">
          <span class="sewn-btn sewn-btn--idle"></span>
          <div class="tl-card stitch-card" style="--rot: calc(var(--tilt) * -0.3);">
            <div class="tl-header">
              <div class="tl-logo-row">
                <span class="tl-logo">DoD</span>
                <div>
                  <div class="tl-company">USAF DoD</div>
                  <div class="tl-role">Software Engineer</div>
                </div>
              </div>
              <div class="tl-meta">
                <div class="tl-duration">Jul 2024 – Jan 2026</div>
                <div class="tl-location">Robins AFB, GA</div>
              </div>
            </div>
            <span class="tl-expand">details</span>
            <div class="tl-details">
              <div class="tl-details-inner">
                <p class="tl-highlight">Worked under the 402d Software Directorate at Robins Air Force Base</p>
                <p class="tl-highlight">Developed full-stack web applications with Blazor and C# .NET</p>
                <p class="tl-highlight">Architected cloud-based data infrastructure for dataset management</p>
                <p class="tl-highlight">Improved application efficiency by 15% through optimized architecture</p>
                <p class="tl-highlight">Produced comprehensive software documentation to DoD standards</p>
              </div>
            </div>
          </div>
        </div>

        <div class="tl-row rv">
          <span class="sewn-btn sewn-btn--idle"></span>
          <div class="tl-card stitch-card" style="--rot: calc(var(--tilt) * 0.3);">
            <div class="tl-header">
              <div class="tl-logo-row">
                <span class="tl-logo">UGA</span>
                <div>
                  <div class="tl-company">University of Georgia</div>
                  <div class="tl-role">BS Computer Science</div>
                </div>
              </div>
              <div class="tl-meta">
                <div class="tl-duration">Jan 2022 – May 2024</div>
                <div class="tl-location">Athens, GA</div>
              </div>
            </div>
            <div class="tl-details" style="max-height: none;">
              <div class="tl-details-inner">
                <p class="tl-highlight">Graduated with a Bachelor of Science in Computer Science, May 2024</p>
              </div>
            </div>
          </div>
        </div>

        <div class="tl-row rv" data-expandable="">
          <span class="sewn-btn sewn-btn--idle"></span>
          <div class="tl-card stitch-card" style="--rot: calc(var(--tilt) * -0.4);">
            <div class="tl-header">
              <div class="tl-logo-row">
                <span class="tl-logo">GS</span>
                <div>
                  <div class="tl-company">Georgia Southern University</div>
                  <div class="tl-role">Student Technician — IT Support Automation</div>
                </div>
              </div>
              <div class="tl-meta">
                <div class="tl-duration">Aug 2020 – Dec 2021</div>
                <div class="tl-location">Savannah, GA</div>
              </div>
            </div>
            <span class="tl-expand">details</span>
            <div class="tl-details">
              <div class="tl-details-inner">
                <p class="tl-highlight">Automated lab computer software checks via PowerShell</p>
                <p class="tl-highlight">Reduced manual workload by 30% through automated system monitoring</p>
                <p class="tl-highlight">Maintained 99% uptime with a 90% first-contact resolution rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ─────────── certifications ─────────── -->
      <div class="certs-block rv">
        <div class="certs-label-row">
          <span class="craft-label">stitched &amp; certified</span>
          <div class="seam"></div>
        </div>
        <div class="certs-grid">
          <button type="button" class="cert-card stitch-card felt-hover" data-cert="/images/GCPCert.jpg" data-cert-title="Google Cloud — Associate Cloud Engineer" style="--rot: calc(var(--tilt) * -0.7);">
            <span class="cert-badge">GCP</span>
            <div class="cert-info">
              <span class="cert-name">Associate Cloud Engineer</span>
              <span class="cert-issuer">Google Cloud · 2026</span>
            </div>
            <span class="cert-view">view ↗</span>
          </button>
          <button type="button" class="cert-card stitch-card felt-hover" data-cert="/images/GH200Cert.jpg" data-cert-title="GitHub Actions Certification" style="--rot: calc(var(--tilt) * 0.7);">
            <span class="cert-badge">GH</span>
            <div class="cert-info">
              <span class="cert-name">GitHub Actions</span>
              <span class="cert-issuer">Microsoft / GitHub · 2026</span>
            </div>
            <span class="cert-view">view ↗</span>
          </button>
        </div>
      </div>
    </div>
  </section>

  <svg class="yarn-divider" viewBox="0 0 1200 70" preserveAspectRatio="none" aria-hidden="true">
    <path d="M-20,35 C140,0 260,70 420,35 C580,0 700,70 860,35 C1020,0 1120,60 1220,30"></path>
  </svg>

  <!-- ═══════════ PROJECTS ═══════════ -->
  <section id="projects" data-screen-label="Projects">
    <div class="section-inner">
      <div class="sec-hdr">
        <div class="sec-hdr-text">
          <div class="sec-label-row rv">
            <span class="craft-label">patch 04 · projects</span>
            <div class="seam"></div>
          </div>
          <h2 class="sec-heading rv rv-d1" style="font-family: var(--font-display); font-weight: 700;">
            Things I've <span class="stitch-u" style="color: var(--mint-deep);">crafted</span>
          </h2>
        </div>
      </div>

      <div class="projects-grid">
        <div class="project-card stitch-card felt-hover rv" style="--rot: calc(var(--tilt) * -0.8);">
          <div class="proj-badge">private</div>
          <img class="slot-img" src="/images/ista.png" alt="ISTA agentic options trading dashboard screenshot" />
          <div class="proj-body">
            <span class="proj-tag">AI Agent · Quant Finance</span>
            <h3 class="proj-title">ISTA</h3>
            <p class="proj-desc">Agentic options-trading system driven by a Claude tool-use loop — a NumPy/SciPy signals engine (Greeks, IV rank, RSI/MACD) and RAG-grounded strategy stage long-call orders behind a hardened, human-in-the-loop risk backstop, with a live React/WebSocket P&amp;L dashboard.</p>
            <div class="proj-tech">
              <span class="tech-tag">Python</span>
              <span class="tech-tag">FastAPI</span>
              <span class="tech-tag">Claude API</span>
              <span class="tech-tag">RAG</span>
              <span class="tech-tag">React/TS</span>
            </div>
            <a class="proj-link" href="#" data-private-repo data-project="ISTA">Request Access ↗</a>
          </div>
        </div>

        <div class="project-card stitch-card felt-hover rv rv-d1" style="--rot: calc(var(--tilt) * 0.6);">
          <div class="proj-badge">private</div>
          <img class="slot-img" src="/images/ai-running-coach.png" alt="No Image Available" />
          <div class="proj-body">
            <span class="proj-tag">LLM Agent · Health Data</span>
            <h3 class="proj-title">AI Running Coach</h3>
            <p class="proj-desc">Autonomous LLM agent that reasons over your biometric data to answer natural-language training questions — a multi-step Claude tool-use loop over six SQL-backed tools, fed by an OAuth Google Health pipeline, with cross-session memory and eval-driven reliability.</p>
            <div class="proj-tech">
              <span class="tech-tag">Python</span>
              <span class="tech-tag">FastAPI</span>
              <span class="tech-tag">Claude API</span>
              <span class="tech-tag">SQLite</span>
              <span class="tech-tag">OAuth 2.0</span>
            </div>
            <a class="proj-link" href="#" data-private-repo data-project="AI Running Coach">Request Access ↗</a>
          </div>
        </div>

        <div class="project-card stitch-card felt-hover rv rv-d2" style="--rot: calc(var(--tilt) * -0.5);">
          <div class="proj-badge">fav!</div>
          <img class="slot-img" src="/images/rateyourcourt.png" alt="Rate Your Court screenshot" />
          <div class="proj-body">
            <span class="proj-tag">Full-Stack Platform</span>
            <h3 class="proj-title">Rate Your Court</h3>
            <p class="proj-desc">A platform that helps players discover, review, and manage pickleball &amp; tennis courts — real-time data, map-driven UI, and community reviews.</p>
            <div class="proj-tech">
              <span class="tech-tag">React</span>
              <span class="tech-tag">Node.js</span>
              <span class="tech-tag">Redis</span>
              <span class="tech-tag">PostgreSQL</span>
            </div>
            <a class="proj-link" href="https://rateyourcourt.com" target="_blank" rel="noopener noreferrer">View Project ↗</a>
          </div>
        </div>

        <div class="project-card stitch-card felt-hover rv rv-d3" style="--rot: calc(var(--tilt) * 0.6);">
          <img class="slot-img" src="/images/macro-buddy.png" alt="Macro Buddy screenshot" />
          <div class="proj-body">
            <span class="proj-tag">MERN App</span>
            <h3 class="proj-title">Macro Buddy</h3>
            <p class="proj-desc">Full-stack nutrition tracker with JWT auth and real-time macro calculations.</p>
            <div class="proj-tech">
              <span class="tech-tag">React</span>
              <span class="tech-tag">Node.js</span>
              <span class="tech-tag">MongoDB</span>
              <span class="tech-tag">JWT</span>
            </div>
            <a class="proj-link" href="https://github.com/AstroMike101/macro-buddy" target="_blank" rel="noopener noreferrer">View Project ↗</a>
          </div>
        </div>

        <div class="project-card stitch-card felt-hover rv rv-d4" style="--rot: calc(var(--tilt) * -0.5);">
          <img class="slot-img" src="/images/unix-shell-clone.png" alt="Unix Bash Shell screenshot" />
          <div class="proj-body">
            <span class="proj-tag">Systems Programming</span>
            <h3 class="proj-title">Unix Bash Shell</h3>
            <p class="proj-desc">Custom Unix shell with I/O redirection, process control, and piping in C.</p>
            <div class="proj-tech">
              <span class="tech-tag">C</span>
              <span class="tech-tag">Unix</span>
              <span class="tech-tag">Systems</span>
            </div>
            <a class="proj-link" href="https://github.com/jdoseph/Project3Shell" target="_blank" rel="noopener noreferrer">View Project ↗</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <svg class="yarn-divider" viewBox="0 0 1200 70" preserveAspectRatio="none" aria-hidden="true">
    <path d="M1220,35 C1060,70 940,0 780,35 C620,70 500,0 340,35 C180,70 80,10 -20,40"></path>
  </svg>

  <!-- ═══════════ SKILLS ═══════════ -->
  <section id="skills" data-screen-label="Skills">
    <div class="section-inner">
      <div class="sec-hdr">
        <div class="sec-hdr-text">
          <div class="sec-label-row rv">
            <span class="craft-label">patch 05 · skills</span>
            <div class="seam"></div>
          </div>
          <h2 class="sec-heading rv rv-d1" style="font-family: var(--font-display); font-weight: 700;">
            What's in my <span class="stitch-u" style="color: var(--mint-deep);">kit</span>
          </h2>
        </div>
      </div>

      <div class="skills-grid">
        <div class="skill-swatch felt felt-hover rv" style="--rot: calc(var(--tilt) * -1);">
          <div class="skill-cat">Languages</div>
          <div class="seam"></div>
          <ul>
            <li class="skill-item">Java</li>
            <li class="skill-item">Python</li>
            <li class="skill-item">JavaScript</li>
            <li class="skill-item">C# / .NET</li>
            <li class="skill-item">C++</li>
            <li class="skill-item">SQL</li>
          </ul>
        </div>
        <div class="skill-swatch felt felt-hover rv rv-d1" style="--rot: calc(var(--tilt) * 0.8);">
          <div class="skill-cat">Web &amp; UI</div>
          <div class="seam"></div>
          <ul>
            <li class="skill-item">React</li>
            <li class="skill-item">HTML5</li>
            <li class="skill-item">CSS3</li>
            <li class="skill-item">Blazor</li>
            <li class="skill-item">Bootstrap</li>
            <li class="skill-item">Figma</li>
          </ul>
        </div>
        <div class="skill-swatch felt felt-hover rv rv-d2" style="--rot: calc(var(--tilt) * -0.6);">
          <div class="skill-cat">Backend &amp; Data</div>
          <div class="seam"></div>
          <ul>
            <li class="skill-item">Spring Boot</li>
            <li class="skill-item">PostgreSQL</li>
            <li class="skill-item">MongoDB</li>
            <li class="skill-item">NumPy</li>
            <li class="skill-item">REST APIs</li>
          </ul>
        </div>
        <div class="skill-swatch felt felt-hover rv rv-d3" style="--rot: calc(var(--tilt) * 1.2);">
          <div class="skill-cat">DevOps &amp; Tools</div>
          <div class="seam"></div>
          <ul>
            <li class="skill-item">Docker</li>
            <li class="skill-item">Kubernetes</li>
            <li class="skill-item">Git / GitHub</li>
            <li class="skill-item">Linux</li>
            <li class="skill-item">AWS</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════ FELT HILLS + CONTACT ═══════════ -->
  <div class="hills-zone">
    <div class="hills-ridge">
    <svg class="hills-svg" viewBox="0 0 1440 220" preserveAspectRatio="none" aria-hidden="true">
      <path fill="var(--mint-soft)" d="M0,128 C220,58 460,160 740,104 C1020,48 1240,150 1440,88 L1440,220 L0,220 Z"></path>
      <path fill="var(--mint)" opacity="0.5" d="M0,178 C260,112 540,196 820,150 C1080,108 1280,186 1440,140 L1440,220 L0,220 Z"></path>
      <path fill="var(--mint-felt)" d="M0,196 C240,138 480,210 760,176 C1040,142 1260,204 1440,166 L1440,220 L0,220 Z"></path>
      <path class="hills-stitch" fill="none" stroke="var(--thread-dark)" stroke-width="2.5" stroke-dasharray="8 7" d="M0,190 C240,132 480,204 760,170 C1040,136 1260,198 1440,160"></path>
    </svg>
    <div class="hills-trees" aria-hidden="true">
      <div class="felt-tree" style="--x: 5%; --w: 104px; --b: 26px;">
        <svg viewBox="0 0 100 132">
          <rect x="45" y="88" width="10" height="40" rx="4" fill="#A6845C"></rect>
          <circle cx="50" cy="54" r="42" fill="var(--mint-deep)"></circle>
          <circle cx="50" cy="54" r="31" fill="none" stroke="var(--mint-felt)" stroke-width="2.5" stroke-dasharray="6 6" class="tree-stitch"></circle>
        </svg>
      </div>
      <div class="felt-tree" style="--x: 14.5%; --w: 74px; --b: 12px;">
        <svg viewBox="0 0 100 150">
          <rect x="45" y="112" width="10" height="34" rx="4" fill="#A6845C"></rect>
          <path d="M50,4 L86,58 L64,58 L92,112 L8,112 L36,58 L14,58 Z" fill="var(--mint-dark)"></path>
          <path d="M50,26 L50,98" stroke="var(--mint-felt)" stroke-width="2.5" stroke-dasharray="5 6" class="tree-stitch"></path>
        </svg>
      </div>
      <div class="felt-tree" style="--x: 79%; --w: 88px; --b: 30px;">
        <svg viewBox="0 0 100 150">
          <rect x="45" y="112" width="10" height="34" rx="4" fill="#A6845C"></rect>
          <path d="M50,4 L86,58 L64,58 L92,112 L8,112 L36,58 L14,58 Z" fill="var(--mint-deep)"></path>
          <path d="M50,26 L50,98" stroke="var(--mint-felt)" stroke-width="2.5" stroke-dasharray="5 6" class="tree-stitch"></path>
        </svg>
      </div>
      <div class="felt-tree" style="--x: 88%; --w: 64px; --b: 16px;">
        <svg viewBox="0 0 100 96">
          <circle cx="32" cy="66" r="28" fill="var(--mint)"></circle>
          <circle cx="66" cy="60" r="32" fill="var(--mint-deep)"></circle>
          <circle cx="66" cy="60" r="22" fill="none" stroke="var(--mint-felt)" stroke-width="2.5" stroke-dasharray="6 6" class="tree-stitch"></circle>
        </svg>
      </div>
    </div>
    </div>

    <div class="hills-body">
  <!-- ═══════════ CONTACT ═══════════ -->
  <section id="contact" data-screen-label="Contact">
    <div class="section-inner">
      <div class="sec-label-row rv">
        <span class="craft-label">patch 06 · contact</span>
        <div class="seam"></div>
      </div>
      <div class="contact-layout">
        <div class="contact-text-col">
          <h2 class="contact-heading yarn-title rv rv-d1">
            Let's stitch<br />something <span class="yarn-title--ink" style="display: inline-block; transform: rotate(calc(var(--tilt) * -1));">great.</span>
          </h2>
          <a href="mailto:jdoseph.dev@gmail.com" class="contact-email-link rv rv-d2">jdoseph.dev@gmail.com <span>↗</span></a>
          <div class="contact-socials rv rv-d2">
            <a class="contact-social-btn" href="https://www.linkedin.com/in/jdoseph" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
            <a class="contact-social-btn" href="https://github.com/jdoseph" target="_blank" rel="noopener noreferrer" aria-label="GitHub">gh</a>
            <a class="contact-social-btn" href="https://www.instagram.com/jdoseph" target="_blank" rel="noopener noreferrer" aria-label="Instagram">ig</a>
          </div>
          <div class="rv rv-d3">
            <a href="/josephdoresume.pdf" target="_blank" rel="noopener noreferrer" class="btn-outline">Download Resume ↗</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════ FOOTER ═══════════ -->
  <footer class="site-footer">
    <div class="footer-inner">
      <span class="footer-logo">Joseph Do</span>
      <span class="footer-copy">© 2026 · sewn together with care</span>
    </div>
  </footer>
    </div>
  </div>

  <!-- ═══════════ BACKGROUND MUSIC DOCK ═══════════ -->
  <div id="music-dock" class="music-dock" data-state="paused" data-hint="on">
    <div class="music-hint" aria-hidden="true">
      psst… press play &amp; scroll while you listen ♪
      <span class="music-hint-arrow">↓</span>
    </div>
    <button type="button" class="music-toggle" aria-label="Play background music" aria-pressed="false">
      <span class="music-icon music-icon--play" aria-hidden="true">▶</span>
      <span class="music-icon music-icon--note" aria-hidden="true">♪</span>
      <span class="music-icon music-icon--mute" aria-hidden="true">⨯</span>
    </button>
    <input type="range" class="music-volume" min="0" max="1" step="0.01" value="0.5" aria-label="Music volume" />
  </div>

  <!-- ═══════════ CERT MODAL (lightbox) ═══════════ -->
  <div id="cert-modal" class="cert-modal" hidden>
    <div class="cert-modal-backdrop" data-cert-close></div>
    <div class="cert-modal-card" role="dialog" aria-modal="true" aria-labelledby="cert-modal-title">
      <div class="cert-modal-head">
        <span class="cert-modal-title" id="cert-modal-title"></span>
        <button type="button" class="cert-modal-close" data-cert-close aria-label="Close certificate">×</button>
      </div>
      <img class="cert-modal-img" alt="" />
    </div>
  </div>

</div>
`;
