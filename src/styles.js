const PINK        = "#f4a7a3";
const PINK_LIGHT  = "#fde8e7";
const PINK_DARK   = "#e8908c";
const DARK        = "#1a1a1a";

const GLOBAL_CSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: 'Georgia', serif; color: #222; background: #fff; }

  .gh-page { animation: ghFadeIn 0.35s ease; }
  @keyframes ghFadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

  /* ── Buttons ── */
  .gh-btn {
    display: inline-flex; align-items: center; justify-content: center;
    background: ${PINK}; color: #fff; border: none;
    border-radius: 24px; padding: 11px 28px; font-size: 14px;
    cursor: pointer; font-family: inherit; transition: background .2s, transform .1s;
    white-space: nowrap;
  }
  .gh-btn:hover  { background: ${PINK_DARK}; }
  .gh-btn:active { transform: scale(.97); }
  .gh-btn-outline {
    display: inline-flex; align-items: center; justify-content: center;
    background: transparent; color: ${PINK};
    border: 1.5px solid ${PINK}; border-radius: 24px;
    padding: 9px 22px; font-size: 13px; cursor: pointer;
    font-family: inherit; transition: background .2s;
    white-space: nowrap;
  }
  .gh-btn-outline:hover { background: ${PINK_LIGHT}; }

  /* ── Section label ── */
  .gh-label {
    color: ${PINK}; font-size: 11px; letter-spacing: 3px;
    text-transform: uppercase; display: flex; align-items: center; gap: 8px;
    margin-bottom: 8px; font-family: sans-serif;
  }
  .gh-label::after {
    content: ''; display: inline-block;
    width: 28px; height: 1px; background: ${PINK};
  }

  /* ── Carousel arrow ── */
  .gh-arrow {
    background: #fff; border: 1.5px solid #eee; border-radius: 50%;
    width: 34px; height: 34px; flex-shrink: 0;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; font-size: 16px; color: #aaa;
    transition: border-color .2s, color .2s;
  }
  .gh-arrow:hover { border-color: ${PINK}; color: ${PINK}; }

  /* ── Navbar link ── */
  .gh-nav-link {
    cursor: pointer; font-family: sans-serif; font-size: 14px;
    transition: color .2s; background: none; border: none;
    padding: 4px 0;
  }

  /* ── Form inputs ── */
  .gh-input {
    width: 100%; padding: 12px 16px;
    border: 1.5px solid #e8d8d8; border-radius: 10px;
    font-size: 14px; font-family: inherit; outline: none;
    transition: border-color .2s; background: #fff; color: #222;
  }
  .gh-input:focus { border-color: ${PINK}; }

  /* ── Cards hover ── */
  .gh-service-card { overflow: hidden; border-radius: 10px; cursor: pointer; }
  .gh-service-card img { transition: transform .35s; display: block; width: 100%; }
  .gh-service-card:hover img { transform: scale(1.06); }

  .gh-team-card { transition: transform .25s, box-shadow .25s; border-radius: 10px; overflow: hidden; }
  .gh-team-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,.08); }

  .gh-blog-card { background: #fff; border-radius: 10px; overflow: hidden; border: 1px solid #f0e8e8; transition: transform .25s, box-shadow .25s; }
  .gh-blog-card:hover { transform: translateY(-4px); box-shadow: 0 12px 28px rgba(0,0,0,.07); }

  /* ── Hamburger ── */
  .gh-hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; padding: 6px; background: none; border: none; }
  .gh-hamburger span { display: block; width: 22px; height: 2px; background: #fff; border-radius: 2px; transition: transform .3s, opacity .3s; }

  /* ── Mobile drawer ── */
  .gh-drawer {
    position: fixed; inset: 0; z-index: 200;
    display: flex; flex-direction: column;
  }
  .gh-drawer-overlay { position: absolute; inset: 0; background: rgba(0,0,0,.45); }
  .gh-drawer-panel {
    position: relative; z-index: 1; width: 280px; height: 100%;
    background: #fff; padding: 32px 28px;
    display: flex; flex-direction: column; gap: 0;
    animation: ghSlideIn .3s ease;
  }
  @keyframes ghSlideIn { from { transform: translateX(-100%); } to { transform: translateX(0); } }

  /* ── Hero ── */
  .gh-hero { position: relative; overflow: hidden; }

  /* ── Responsive grid helpers ── */
  .gh-grid-4  { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
  .gh-grid-3  { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
  .gh-grid-2  { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }

  /* ── Page wrapper ── */
  .gh-container { max-width: 1200px; margin: 0 auto; padding: 0 48px; }
  .gh-section   { padding: 64px 0; }

  /* ── Stars ── */
  .gh-star { color: ${PINK}; font-size: 14px; }

  /* ── Contact form ── */
  .gh-textarea {
    width: 100%; padding: 12px 16px; border: 1.5px solid #e8d8d8;
    border-radius: 10px; font-size: 14px; font-family: inherit;
    outline: none; resize: vertical; min-height: 120px;
    transition: border-color .2s; background: #fff; color: #222;
  }
  .gh-textarea:focus { border-color: ${PINK}; }

  /* ══════════ RESPONSIVE ══════════ */

  /* Tablet  ≤ 900px */
  @media (max-width: 900px) {
    .gh-container { padding: 0 28px; }
    .gh-section   { padding: 48px 0; }
    .gh-grid-4    { grid-template-columns: repeat(2, 1fr); }
    .gh-grid-3    { grid-template-columns: repeat(2, 1fr); }
    .gh-hamburger { display: flex; }
    .gh-desktop-nav { display: none !important; }
    .gh-hero-content h1 { font-size: 34px; }
    .gh-story-layout { flex-direction: column !important; }
    .gh-story-imgs   { grid-template-columns: repeat(4,1fr) !important; }
    .gh-footer-grid  { grid-template-columns: 1fr 1fr !important; }
    .gh-login-img-panel { display: none !important; }
    .gh-login-form-panel { width: 100% !important; }
    .gh-services-grid { grid-template-columns: repeat(2,1fr) !important; }
    .gh-team-grid     { grid-template-columns: repeat(2,1fr) !important; }
    .gh-contact-layout { flex-direction: column !important; }
  }

  /* Phone ≤ 600px */
  @media (max-width: 600px) {
    .gh-container { padding: 0 16px; }
    .gh-section   { padding: 36px 0; }
    .gh-grid-4    { grid-template-columns: 1fr 1fr; gap: 10px; }
    .gh-grid-3    { grid-template-columns: 1fr; }
    .gh-grid-2    { grid-template-columns: 1fr; }
    .gh-hero-content { padding-left: 20px !important; padding-right: 20px !important; padding-top: 60px !important; }
    .gh-hero-content h1 { font-size: 28px !important; }
    .gh-story-imgs { grid-template-columns: repeat(2,1fr) !important; }
    .gh-footer-grid { grid-template-columns: 1fr !important; }
    .gh-services-grid { grid-template-columns: 1fr 1fr !important; }
    .gh-team-grid     { grid-template-columns: 1fr !important; }
    .gh-blog-grid     { grid-template-columns: 1fr !important; }
    .gh-reviews-grid  { grid-template-columns: 1fr !important; }
    .gh-about-values  { grid-template-columns: 1fr !important; }
    .gh-section-title { font-size: 24px !important; }
    .gh-hero { height: 320px !important; }
  }

  /* Navbar transparent → solid on scroll handled via class */
  .gh-navbar-solid { background: rgba(26,26,26,.97) !important; }
`;

export {
  PINK,
  PINK_LIGHT,
  PINK_DARK,
  DARK,
  GLOBAL_CSS,
};