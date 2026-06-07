import { useState, useEffect } from "react";

// ─── THEME ────────────────────────────────────────────────────────
const PINK        = "#f4a7a3";
const PINK_LIGHT  = "#fde8e7";
const PINK_DARK   = "#e8908c";
const DARK        = "#1a1a1a";

// ─── GLOBAL CSS ───────────────────────────────────────────────────
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
    .gh-hero-content { padding-left: 20px !important; padding-right: 20px !important; }
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

// ─── DATA ─────────────────────────────────────────────────────────
const SERVICES = [
  { label: "Premium Facial", price: "₦15,000", desc: "Deep cleansing and hydration treatment for luminous skin.", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&q=80" },
  { label: "Hair Care", price: "₦8,000", desc: "Expert cuts, conditioning treatments and scalp care.", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=80" },
  { label: "Body Care", price: "₦12,000", desc: "Full-body scrubs and moisturising wraps for silky skin.", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&q=80" },
  { label: "Makeup", price: "₦20,000", desc: "Flawless event and everyday makeup by certified artists.", img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500&q=80" },
  { label: "Henna Art", price: "₦6,000", desc: "Intricate traditional and contemporary henna designs.", img: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&q=80" },
  { label: "Bridal Package", price: "₦80,000", desc: "Complete bridal glam including hair, makeup and nails.", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&q=80" },
  { label: "Hair Removal", price: "₦9,500", desc: "Safe, gentle waxing and threading services.", img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&q=80" },
  { label: "Spa Package", price: "₦35,000", desc: "Full-day relaxation combining massage, facial and body care.", img: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=500&q=80" },
];

const TEAM = [
  { name: "Sophia Laurent", role: "Makeup Artist", exp: "10 yrs", bio: "Bridal and editorial makeup specialist who believes every face tells a unique story.", img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80" },
  { name: "Amara Osei", role: "Nails Artist", exp: "7 yrs", bio: "Creative nail technician passionate about intricate gel art and nail health.", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80" },
  { name: "Clara Reeves", role: "Skincare Specialist", exp: "9 yrs", bio: "Certified aesthetician dedicated to transforming skin through science and care.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80" },
  { name: "Nadia Chen", role: "Hair Stylist", exp: "12 yrs", bio: "Expert colourist and stylist who transforms hair with precision and creativity.", img: "https://images.unsplash.com/photo-1500336624523-d727130c3328?w=400&q=80" },
];

const BLOGS = [
  { title: "5 Skincare Tips to Glow Through Harmattan Season", excerpt: "Dry air strips moisture fast. Our experts share the routines that keep skin radiant no matter the weather.", img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80", date: "May 20, 2026", cat: "Skincare" },
  { title: "How to Choose the Right Foundation for Your Skin Tone", excerpt: "Matching foundation to your undertone changes everything. Our artists break down the process step by step.", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80", date: "May 12, 2026", cat: "Makeup" },
  { title: "The Ultimate Bridal Hair & Makeup Checklist", excerpt: "From your first trial to the big day touch-up kit — here is everything you need to prepare.", img: "https://images.unsplash.com/photo-1560066984-138daaa0a74d?w=600&q=80", date: "April 30, 2026", cat: "Bridal" },
];

const REVIEWS = [
  { name: "Fatima Bello", rating: 5, text: "The bridal package exceeded every expectation. Sophia made me feel like royalty on my wedding day. Professional, warm and incredibly talented.", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&q=80" },
  { name: "Adaeze Okonkwo", rating: 5, text: "Clara transformed my skin in just three sessions. My acne scars have faded significantly — I now leave the house without foundation!", img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=80&q=80" },
  { name: "Blessing Eze", rating: 5, text: "Nadia gave me the best haircut I've ever had. She listened carefully and delivered something that suited my face shape perfectly.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80" },
];

const STORY_IMGS = [
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=80",
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&q=80",
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500&q=80",
  "https://images.unsplash.com/photo-1560066984-138daaa0a74d?w=500&q=80",
];

const NAV_PAGES = ["Home", "About Us", "Services", "Our Team", "Contact Us"];
const PAGE_KEYS = ["home", "about", "services", "team", "contact"];

// ═══════════════════════════════════════════════════════════════════
// SHARED: Footer
// ═══════════════════════════════════════════════════════════════════
function Footer({ navigate }) {
  return (
    <footer style={{ background: PINK_LIGHT, paddingTop: 52, paddingBottom: 24 }}>
      <div className="gh-container">
        <div className="gh-footer-grid" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr", gap: 44, marginBottom: 32 }}>
          <div>
            <p style={{ fontWeight: "bold", fontSize: 20, marginBottom: 12, letterSpacing: 0.5 }}>✦ GlowHaven</p>
            <p style={{ fontSize: 13, color: "#666", lineHeight: 1.85, maxWidth: 240, fontFamily: "sans-serif" }}>
              Lagos's premier beauty studio for skincare, hair, makeup and holistic pampering. Beauty redefined, one client at a time.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
              {["f", "𝕏", "📷"].map((ic) => (
                <span key={ic} style={{ width: 34, height: 34, borderRadius: "50%", background: "#fff", border: "1.5px solid #eee", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 13, color: "#555" }}>{ic}</span>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontWeight: "bold", fontSize: 14, marginBottom: 16, fontFamily: "sans-serif" }}>Contact Us</p>
            {[
              ["📍", "14 Beauty Blvd, Victoria Island, Lagos"],
              ["✉️", "hello@glowhaven.com"],
              ["📞", "+234 812 345 6789"],
            ].map(([ic, txt]) => (
              <div key={txt} style={{ display: "flex", gap: 10, marginBottom: 12, alignItems: "flex-start" }}>
                <span style={{ fontSize: 14, flexShrink: 0 }}>{ic}</span>
                <p style={{ fontSize: 12, color: "#555", lineHeight: 1.6, fontFamily: "sans-serif" }}>{txt}</p>
              </div>
            ))}
          </div>
          <div>
            <p style={{ fontWeight: "bold", fontSize: 14, marginBottom: 16, fontFamily: "sans-serif" }}>Opening Hours</p>
            {[["Mon – Wed", "11:00am – 7:00pm"], ["Thu – Sat", "10:00am – 8:00pm"], ["Sunday", "12:00pm – 6:00pm"]].map(([d, t]) => (
              <div key={d} style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                <p style={{ fontSize: 12, color: "#666", fontFamily: "sans-serif" }}>{d}</p>
                <p style={{ fontSize: 12, color: "#333", fontWeight: "bold", fontFamily: "sans-serif" }}>{t}</p>
              </div>
            ))}
            <button className="gh-btn" style={{ marginTop: 18, width: "100%", fontSize: 13 }} onClick={() => navigate("contact")}>Book Appointment</button>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #f0d8d8", paddingTop: 16, textAlign: "center" }}>
          <p style={{ fontSize: 12, color: "#bbb", fontFamily: "sans-serif" }}>© 2026 GlowHaven Beauty Studio · All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// ═══════════════════════════════════════════════════════════════════
// SHARED: Navbar
// ═══════════════════════════════════════════════════════════════════
function Navbar({ page, navigate, transparent }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const isTransparent = transparent && !scrolled && !drawerOpen;
  const txtColor = isTransparent ? "#fff" : "#222";
  const bgColor  = isTransparent ? "transparent" : "#fff";
  const shadow   = isTransparent ? "none" : "0 2px 16px rgba(0,0,0,.07)";

  const go = (key) => { navigate(key); setDrawerOpen(false); };

  return (
    <>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: bgColor, boxShadow: shadow, transition: "background .3s, box-shadow .3s" }}>
        <div className="gh-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          {/* Logo */}
          <button onClick={() => go("home")} style={{ background: "none", border: "none", cursor: "pointer", fontWeight: "bold", fontSize: 19, color: isTransparent ? "#fff" : PINK, letterSpacing: 0.5, fontFamily: "Georgia, serif" }}>
            ✦ GlowHaven
          </button>

          {/* Desktop links */}
          <div className="gh-desktop-nav" style={{ display: "flex", gap: 32 }}>
            {NAV_PAGES.map((label, i) => (
              <button
                key={label}
                className="gh-nav-link"
                onClick={() => go(PAGE_KEYS[i])}
                style={{
                  color: page === PAGE_KEYS[i] ? PINK : txtColor,
                  borderBottom: page === PAGE_KEYS[i] ? `1.5px solid ${PINK}` : "1.5px solid transparent",
                  paddingBottom: 2,
                }}
              >{label}</button>
            ))}
          </div>

          {/* Right actions */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <button className="gh-btn" style={{ padding: "8px 20px", fontSize: 13, background: isTransparent ? PINK : PINK }} onClick={() => go("login")}>Log In</button>
            <button className="gh-hamburger" onClick={() => setDrawerOpen(true)}>
              <span style={{ background: isTransparent ? "#fff" : "#333" }} />
              <span style={{ background: isTransparent ? "#fff" : "#333" }} />
              <span style={{ background: isTransparent ? "#fff" : "#333" }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="gh-drawer">
          <div className="gh-drawer-overlay" onClick={() => setDrawerOpen(false)} />
          <div className="gh-drawer-panel">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
              <span style={{ fontWeight: "bold", fontSize: 18, color: PINK, fontFamily: "Georgia, serif" }}>✦ GlowHaven</span>
              <button onClick={() => setDrawerOpen(false)} style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "#888" }}>✕</button>
            </div>
            {NAV_PAGES.map((label, i) => (
              <button
                key={label}
                onClick={() => go(PAGE_KEYS[i])}
                style={{
                  display: "block", width: "100%", textAlign: "left",
                  padding: "14px 0", fontFamily: "Georgia, serif", fontSize: 16,
                  background: "none", border: "none", borderBottom: "1px solid #f5eded",
                  cursor: "pointer", color: page === PAGE_KEYS[i] ? PINK : "#333",
                  fontWeight: page === PAGE_KEYS[i] ? "bold" : "normal",
                }}
              >{label}</button>
            ))}
            <button className="gh-btn" style={{ marginTop: 28, width: "100%" }} onClick={() => go("login")}>Log In</button>
          </div>
        </div>
      )}
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════
// PAGE: Home
// ═══════════════════════════════════════════════════════════════════
function HomePage({ navigate }) {
  const [reviewIdx, setReviewIdx] = useState(0);
  const total = REVIEWS.length;

  return (
    <div className="gh-page">
      {/* Hero */}
      <section className="gh-hero" style={{ height: 580 }}>
        <img src="https://images.unsplash.com/photo-1470259078422-826894b933aa?w=1400&q=80" alt="Salon" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.68 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(0,0,0,.55) 0%, rgba(0,0,0,.2) 100%)" }} />
        <div className="gh-hero-content" style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: 80, paddingRight: 40 }}>
          <p style={{ color: PINK, fontFamily: "sans-serif", fontSize: 11, letterSpacing: 4, textTransform: "uppercase", marginBottom: 14 }}>Premium Beauty Studio · Lagos</p>
          <h1 style={{ color: "#fff", fontSize: 52, fontWeight: "bold", lineHeight: 1.13, maxWidth: 380, marginBottom: 18 }}>
            Care for<br />Your Beauty
          </h1>
          <p style={{ color: "#e4dcdc", fontSize: 14, maxWidth: 340, lineHeight: 1.8, fontFamily: "sans-serif", marginBottom: 28 }}>
            Expert beauty treatments tailored to enhance your natural glow. From restorative skincare to breathtaking bridal styling — we bring out the very best in you.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button className="gh-btn" onClick={() => navigate("contact")}>Book Appointment</button>
            <button className="gh-btn-outline" style={{ color: "#fff", borderColor: "#fff" }} onClick={() => navigate("services")}>Our Services</button>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div style={{ background: DARK, padding: "22px 0" }}>
        <div className="gh-container" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, textAlign: "center" }}>
          {[["2,400+", "Happy Clients"], ["8", "Expert Stylists"], ["10+", "Years of Excellence"], ["15", "Beauty Services"]].map(([n, l]) => (
            <div key={l}>
              <p style={{ color: PINK, fontSize: 22, fontWeight: "bold", marginBottom: 2 }}>{n}</p>
              <p style={{ color: "#aaa", fontSize: 12, fontFamily: "sans-serif" }}>{l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Story preview */}
      <section className="gh-section">
        <div className="gh-container">
          <div className="gh-story-layout" style={{ display: "flex", alignItems: "center", gap: 56 }}>
            <div style={{ flex: 1 }}>
              <div className="gh-label">Our Story</div>
              <h2 className="gh-section-title" style={{ fontSize: 34, fontWeight: "bold", lineHeight: 1.2, marginBottom: 18 }}>Your beauty,<br />Our passion.</h2>
              <p style={{ fontSize: 14, color: "#666", lineHeight: 1.85, maxWidth: 380, fontFamily: "sans-serif", marginBottom: 14 }}>
                Founded in 2015, GlowHaven was built on one belief: every person deserves to feel radiant and confident. Our certified specialists combine the latest techniques with nourishing, skin-safe products.
              </p>
              <p style={{ fontSize: 14, color: "#666", lineHeight: 1.85, maxWidth: 380, fontFamily: "sans-serif", marginBottom: 24 }}>
                From everyday grooming to wedding day transformations, we are your trusted beauty partner in Lagos.
              </p>
              <button className="gh-btn-outline" onClick={() => navigate("about")}>Learn More →</button>
            </div>
            <div style={{ flex: 1 }}>
              <div className="gh-story-imgs" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {STORY_IMGS.map((src, i) => (
                  <img key={i} src={src} alt="Salon" style={{ width: "100%", height: 145, objectFit: "cover", borderRadius: 8 }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="gh-section" style={{ background: "#fafafa" }}>
        <div className="gh-container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="gh-label" style={{ justifyContent: "center" }}>Services</div>
            <h2 className="gh-section-title" style={{ fontSize: 30, fontWeight: "bold" }}>Our Popular Services</h2>
            <p style={{ fontSize: 13, color: "#888", marginTop: 10, maxWidth: 480, margin: "10px auto 0", fontFamily: "sans-serif", lineHeight: 1.7 }}>
              From rejuvenating facials to glamorous bridal styling — every service is crafted to make you feel extraordinary.
            </p>
          </div>
          <div className="gh-services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
            {SERVICES.slice(0, 4).map((s) => (
              <div key={s.label} className="gh-service-card">
                <div style={{ position: "relative" }}>
                  <img src={s.img} alt={s.label} style={{ width: "100%", height: 160, objectFit: "cover" }} />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,.65))", padding: "28px 14px 14px" }}>
                    <p style={{ color: "#fff", fontWeight: "bold", fontSize: 14, fontFamily: "sans-serif" }}>{s.label}</p>
                    <p style={{ color: PINK, fontSize: 13, fontFamily: "sans-serif" }}>{s.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 28 }}>
            <button className="gh-btn-outline" onClick={() => navigate("services")}>View All Services</button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="gh-section">
        <div className="gh-container">
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <div className="gh-label" style={{ justifyContent: "center" }}>Reviews</div>
            <h2 className="gh-section-title" style={{ fontSize: 28, fontWeight: "bold" }}>What Our Clients Say</h2>
          </div>
          <div className="gh-reviews-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
            {REVIEWS.map((r, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #f0e8e8", borderRadius: 12, padding: "22px 20px" }}>
                <div style={{ marginBottom: 12 }}>{Array.from({length:5}).map((_,j)=>(<span key={j} className="gh-star">{j<r.rating?"★":"☆"}</span>))}</div>
                <p style={{ fontSize: 13, color: "#555", lineHeight: 1.8, fontFamily: "sans-serif", fontStyle: "italic" }}>"{r.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 16 }}>
                  <img src={r.img} alt={r.name} style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover" }} />
                  <div>
                    <p style={{ fontSize: 13, fontWeight: "bold", fontFamily: "sans-serif" }}>{r.name}</p>
                    <p style={{ fontSize: 11, color: "#bbb", fontFamily: "sans-serif" }}>Verified Client</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section className="gh-section" style={{ background: "#fafafa" }}>
        <div className="gh-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
            <div>
              <div className="gh-label">Blog</div>
              <h2 className="gh-section-title" style={{ fontSize: 28, fontWeight: "bold" }}>Beauty Tips & Insights</h2>
            </div>
            <button className="gh-btn-outline" onClick={() => navigate("about")}>See All Posts</button>
          </div>
          <div className="gh-blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {BLOGS.map((b, i) => (
              <div key={i} className="gh-blog-card">
                <img src={b.img} alt={b.title} style={{ width: "100%", height: 160, objectFit: "cover", display: "block" }} />
                <div style={{ padding: "16px 16px 20px" }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "center" }}>
                    <span style={{ background: PINK_LIGHT, color: PINK, fontSize: 11, fontFamily: "sans-serif", padding: "2px 10px", borderRadius: 20 }}>{b.cat}</span>
                    <span style={{ fontSize: 11, color: "#bbb", fontFamily: "sans-serif" }}>{b.date}</span>
                  </div>
                  <p style={{ fontWeight: "bold", fontSize: 14, lineHeight: 1.4, marginBottom: 8, fontFamily: "sans-serif" }}>{b.title}</p>
                  <p style={{ fontSize: 12, color: "#888", lineHeight: 1.7, fontFamily: "sans-serif" }}>{b.excerpt}</p>
                  <span style={{ color: PINK, fontSize: 12, marginTop: 10, display: "inline-block", fontFamily: "sans-serif", cursor: "pointer" }}>Read More →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section style={{ background: DARK, padding: "60px 0", textAlign: "center" }}>
        <div className="gh-container">
          <p style={{ color: PINK, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: 12 }}>Ready to glow?</p>
          <h2 style={{ color: "#fff", fontSize: 32, fontWeight: "bold", marginBottom: 14 }}>Book Your Treatment Today</h2>
          <p style={{ color: "#aaa", fontSize: 14, fontFamily: "sans-serif", maxWidth: 440, margin: "0 auto 28px", lineHeight: 1.7 }}>
            Treat yourself to a luxury beauty experience. Our team is ready to help you look and feel your very best.
          </p>
          <button className="gh-btn" style={{ padding: "13px 36px", fontSize: 15 }} onClick={() => navigate("contact")}>Book Now</button>
        </div>
      </section>

      <Footer navigate={navigate} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// PAGE: About Us
// ═══════════════════════════════════════════════════════════════════
function AboutPage({ navigate }) {
  const VALUES = [
    { icon: "🌿", title: "Clean Beauty", desc: "We use only skin-safe, ethically sourced products that nourish without harm." },
    { icon: "💎", title: "Premium Quality", desc: "Every treatment is delivered with precision, using professional-grade tools and techniques." },
    { icon: "🤝", title: "Client First", desc: "Your comfort, confidence and satisfaction drive every decision we make." },
    { icon: "✨", title: "Continuous Growth", desc: "Our team regularly trains in the latest global beauty trends and innovations." },
  ];

  return (
    <div className="gh-page">
      {/* Page hero */}
      <div style={{ background: DARK, paddingTop: 100, paddingBottom: 60, textAlign: "center" }}>
        <div className="gh-container">
          <div className="gh-label" style={{ justifyContent: "center" }}>About Us</div>
          <h1 style={{ color: "#fff", fontSize: 38, fontWeight: "bold", marginBottom: 14 }}>Our Story</h1>
          <p style={{ color: "#aaa", fontSize: 14, fontFamily: "sans-serif", maxWidth: 520, margin: "0 auto", lineHeight: 1.8 }}>
            A Lagos beauty studio built on passion, expertise, and a deep love for helping people glow.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="gh-section">
        <div className="gh-container">
          <div className="gh-story-layout" style={{ display: "flex", alignItems: "center", gap: 56 }}>
            <div style={{ flex: 1 }}>
              <div className="gh-label">Founded 2015</div>
              <h2 className="gh-section-title" style={{ fontSize: 30, fontWeight: "bold", marginBottom: 18 }}>Your beauty,<br />Our passion.</h2>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.9, fontFamily: "sans-serif", marginBottom: 14 }}>
                GlowHaven was born from a simple vision: to create a beauty sanctuary where every client feels seen, celebrated, and transformed. Our founder, Sophia Laurent, began her career in Paris before returning to Lagos to establish a studio that blends world-class techniques with warm, personalised care.
              </p>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.9, fontFamily: "sans-serif", marginBottom: 14 }}>
                Over a decade later, we have served over 2,400 clients, built a team of 8 certified specialists, and become one of Victoria Island's most trusted beauty destinations.
              </p>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.9, fontFamily: "sans-serif" }}>
                Whether you come in for a quick blowout or a full bridal transformation, you leave as the most radiant version of yourself.
              </p>
            </div>
            <div style={{ flex: 1 }}>
              <div className="gh-story-imgs" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {STORY_IMGS.map((src, i) => (
                  <img key={i} src={src} alt="Salon" style={{ width: "100%", height: 155, objectFit: "cover", borderRadius: 8 }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="gh-section" style={{ background: "#fafafa" }}>
        <div className="gh-container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="gh-label" style={{ justifyContent: "center" }}>What We Stand For</div>
            <h2 className="gh-section-title" style={{ fontSize: 28, fontWeight: "bold" }}>Our Core Values</h2>
          </div>
          <div className="gh-about-values" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
            {VALUES.map((v) => (
              <div key={v.title} style={{ background: "#fff", border: "1px solid #f0e8e8", borderRadius: 12, padding: "28px 20px", textAlign: "center" }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{v.icon}</div>
                <p style={{ fontWeight: "bold", fontSize: 15, marginBottom: 8 }}>{v.title}</p>
                <p style={{ fontSize: 13, color: "#777", lineHeight: 1.7, fontFamily: "sans-serif" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team teaser */}
      <section className="gh-section">
        <div className="gh-container" style={{ textAlign: "center" }}>
          <div className="gh-label" style={{ justifyContent: "center" }}>Meet the Experts</div>
          <h2 className="gh-section-title" style={{ fontSize: 28, fontWeight: "bold", marginBottom: 12 }}>The Faces Behind the Glow</h2>
          <p style={{ fontSize: 14, color: "#888", fontFamily: "sans-serif", maxWidth: 480, margin: "0 auto 32px", lineHeight: 1.7 }}>
            Our team brings decades of combined experience, ongoing training, and a genuine love for their craft.
          </p>
          <button className="gh-btn" onClick={() => navigate("team")}>Meet Our Team →</button>
        </div>
      </section>

      {/* Blog */}
      <section className="gh-section" style={{ background: "#fafafa" }}>
        <div className="gh-container">
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <div className="gh-label" style={{ justifyContent: "center" }}>Blog</div>
            <h2 className="gh-section-title" style={{ fontSize: 28, fontWeight: "bold" }}>Latest from GlowHaven</h2>
          </div>
          <div className="gh-blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {BLOGS.map((b, i) => (
              <div key={i} className="gh-blog-card">
                <img src={b.img} alt={b.title} style={{ width: "100%", height: 155, objectFit: "cover", display: "block" }} />
                <div style={{ padding: "16px 16px 20px" }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "center" }}>
                    <span style={{ background: PINK_LIGHT, color: PINK, fontSize: 11, fontFamily: "sans-serif", padding: "2px 10px", borderRadius: 20 }}>{b.cat}</span>
                    <span style={{ fontSize: 11, color: "#bbb", fontFamily: "sans-serif" }}>{b.date}</span>
                  </div>
                  <p style={{ fontWeight: "bold", fontSize: 14, lineHeight: 1.4, marginBottom: 8, fontFamily: "sans-serif" }}>{b.title}</p>
                  <p style={{ fontSize: 12, color: "#888", lineHeight: 1.7, fontFamily: "sans-serif" }}>{b.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer navigate={navigate} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// PAGE: Services
// ═══════════════════════════════════════════════════════════════════
function ServicesPage({ navigate }) {
  return (
    <div className="gh-page">
      <div style={{ background: DARK, paddingTop: 100, paddingBottom: 60, textAlign: "center" }}>
        <div className="gh-container">
          <div className="gh-label" style={{ justifyContent: "center" }}>What We Offer</div>
          <h1 style={{ color: "#fff", fontSize: 38, fontWeight: "bold", marginBottom: 14 }}>Our Services</h1>
          <p style={{ color: "#aaa", fontSize: 14, fontFamily: "sans-serif", maxWidth: 500, margin: "0 auto", lineHeight: 1.8 }}>
            Every service is crafted to leave you looking and feeling extraordinary — from quick refresh treatments to full-day luxury packages.
          </p>
        </div>
      </div>

      <section className="gh-section">
        <div className="gh-container">
          <div className="gh-services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
            {SERVICES.map((s) => (
              <div key={s.label} className="gh-service-card" style={{ border: "1px solid #f0e8e8", borderRadius: 12 }}>
                <div style={{ position: "relative" }}>
                  <img src={s.img} alt={s.label} style={{ width: "100%", height: 170, objectFit: "cover", display: "block" }} />
                </div>
                <div style={{ padding: "16px 16px 20px" }}>
                  <p style={{ fontWeight: "bold", fontSize: 15, marginBottom: 4 }}>{s.label}</p>
                  <p style={{ color: PINK, fontSize: 14, fontFamily: "sans-serif", marginBottom: 8, fontWeight: "bold" }}>{s.price}</p>
                  <p style={{ fontSize: 12, color: "#777", lineHeight: 1.7, fontFamily: "sans-serif", marginBottom: 14 }}>{s.desc}</p>
                  <button className="gh-btn" style={{ width: "100%", fontSize: 12, padding: "9px" }} onClick={() => navigate("contact")}>Book Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="gh-section" style={{ background: "#fafafa" }}>
        <div className="gh-container">
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <div className="gh-label" style={{ justifyContent: "center" }}>Why GlowHaven</div>
            <h2 className="gh-section-title" style={{ fontSize: 28, fontWeight: "bold" }}>The GlowHaven Difference</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {[
              ["🏆", "Certified Professionals", "Every specialist is certified and undergoes regular advanced training."],
              ["🌿", "Premium Products Only", "We use carefully curated, skin-safe products from trusted global brands."],
              ["⏰", "Flexible Booking", "Early morning and late evening slots available 6 days a week."],
            ].map(([ic, t, d]) => (
              <div key={t} style={{ textAlign: "center", padding: "28px 20px", background: "#fff", border: "1px solid #f0e8e8", borderRadius: 12 }}>
                <div style={{ fontSize: 30, marginBottom: 12 }}>{ic}</div>
                <p style={{ fontWeight: "bold", fontSize: 15, marginBottom: 8 }}>{t}</p>
                <p style={{ fontSize: 13, color: "#777", lineHeight: 1.7, fontFamily: "sans-serif" }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer navigate={navigate} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// PAGE: Our Team
// ═══════════════════════════════════════════════════════════════════
function TeamPage({ navigate }) {
  return (
    <div className="gh-page">
      <div style={{ background: DARK, paddingTop: 100, paddingBottom: 60, textAlign: "center" }}>
        <div className="gh-container">
          <div className="gh-label" style={{ justifyContent: "center" }}>The Experts</div>
          <h1 style={{ color: "#fff", fontSize: 38, fontWeight: "bold", marginBottom: 14 }}>Our Team</h1>
          <p style={{ color: "#aaa", fontSize: 14, fontFamily: "sans-serif", maxWidth: 500, margin: "0 auto", lineHeight: 1.8 }}>
            Meet the passionate beauty specialists who pour their expertise and care into every appointment.
          </p>
        </div>
      </div>

      <section className="gh-section">
        <div className="gh-container">
          <div className="gh-team-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
            {TEAM.map((m) => (
              <div key={m.name} className="gh-team-card" style={{ background: "#fff", border: "1px solid #f0e8e8" }}>
                <img src={m.img} alt={m.name} style={{ width: "100%", height: 220, objectFit: "cover", display: "block" }} />
                <div style={{ padding: "18px 18px 22px" }}>
                  <p style={{ fontWeight: "bold", fontSize: 15, marginBottom: 2 }}>{m.name}</p>
                  <p style={{ color: PINK, fontSize: 12, fontFamily: "sans-serif", marginBottom: 4 }}>{m.role}</p>
                  <p style={{ color: "#aaa", fontSize: 11, fontFamily: "sans-serif", marginBottom: 10 }}>{m.exp} experience</p>
                  <p style={{ fontSize: 13, color: "#666", lineHeight: 1.7, fontFamily: "sans-serif", marginBottom: 14 }}>{m.bio}</p>
                  <button className="gh-btn-outline" style={{ width: "100%", fontSize: 12 }} onClick={() => navigate("contact")}>Book with {m.name.split(" ")[0]}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="gh-section" style={{ background: "#fafafa" }}>
        <div className="gh-container">
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <div className="gh-label" style={{ justifyContent: "center" }}>Client Stories</div>
            <h2 className="gh-section-title" style={{ fontSize: 28, fontWeight: "bold" }}>What Clients Say About Our Team</h2>
          </div>
          <div className="gh-reviews-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
            {REVIEWS.map((r, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #f0e8e8", borderRadius: 12, padding: "22px 20px" }}>
                <div style={{ marginBottom: 12 }}>{Array.from({length:5}).map((_,j)=>(<span key={j} className="gh-star">{j<r.rating?"★":"☆"}</span>))}</div>
                <p style={{ fontSize: 13, color: "#555", lineHeight: 1.8, fontFamily: "sans-serif", fontStyle: "italic" }}>"{r.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 16 }}>
                  <img src={r.img} alt={r.name} style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover" }} />
                  <div>
                    <p style={{ fontSize: 13, fontWeight: "bold", fontFamily: "sans-serif" }}>{r.name}</p>
                    <p style={{ fontSize: 11, color: "#bbb", fontFamily: "sans-serif" }}>Verified Client</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer navigate={navigate} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// PAGE: Contact Us
// ═══════════════════════════════════════════════════════════════════
function ContactPage({ navigate }) {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = () => {
    if (!form.name || !form.email) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1500);
  };

  return (
    <div className="gh-page">
      <div style={{ background: DARK, paddingTop: 100, paddingBottom: 60, textAlign: "center" }}>
        <div className="gh-container">
          <div className="gh-label" style={{ justifyContent: "center" }}>Get in Touch</div>
          <h1 style={{ color: "#fff", fontSize: 38, fontWeight: "bold", marginBottom: 14 }}>Contact Us</h1>
          <p style={{ color: "#aaa", fontSize: 14, fontFamily: "sans-serif", maxWidth: 460, margin: "0 auto", lineHeight: 1.8 }}>
            Ready to book your next treatment or have a question? We'd love to hear from you.
          </p>
        </div>
      </div>

      <section className="gh-section">
        <div className="gh-container">
          <div className="gh-contact-layout" style={{ display: "flex", gap: 56, alignItems: "flex-start" }}>
            {/* Info */}
            <div style={{ flex: 1 }}>
              <div className="gh-label">Our Details</div>
              <h2 className="gh-section-title" style={{ fontSize: 26, fontWeight: "bold", marginBottom: 24 }}>Visit Us or Send a Message</h2>
              {[
                ["📍", "Location", "14 Beauty Boulevard, Victoria Island, Lagos, Nigeria"],
                ["📞", "Phone", "+234 812 345 6789"],
                ["✉️", "Email", "hello@glowhaven.com"],
                ["🕐", "Opening Hours", "Mon–Wed: 11am–7pm · Thu–Sat: 10am–8pm · Sun: 12pm–6pm"],
              ].map(([ic, t, d]) => (
                <div key={t} style={{ display: "flex", gap: 16, marginBottom: 22 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: PINK_LIGHT, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{ic}</div>
                  <div>
                    <p style={{ fontWeight: "bold", fontSize: 14, marginBottom: 3 }}>{t}</p>
                    <p style={{ fontSize: 13, color: "#666", fontFamily: "sans-serif", lineHeight: 1.6 }}>{d}</p>
                  </div>
                </div>
              ))}
              {/* Map placeholder */}
              <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #f0e8e8", marginTop: 8 }}>
                <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?w=600&q=80" alt="Map" style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }} />
              </div>
            </div>

            {/* Form */}
            <div style={{ flex: 1 }}>
              <div className="gh-label">Book / Enquire</div>
              <h2 className="gh-section-title" style={{ fontSize: 26, fontWeight: "bold", marginBottom: 24 }}>Send Us a Message</h2>
              {sent ? (
                <div style={{ textAlign: "center", padding: "48px 0" }}>
                  <div style={{ fontSize: 52, marginBottom: 16 }}>✨</div>
                  <h3 style={{ fontSize: 20, fontWeight: "bold", marginBottom: 8 }}>Message Received!</h3>
                  <p style={{ fontSize: 14, color: "#888", fontFamily: "sans-serif" }}>We'll be in touch within 24 hours. Can't wait to see you!</p>
                  <button className="gh-btn" style={{ marginTop: 24 }} onClick={() => setSent(false)}>Send Another</button>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                    <div>
                      <label style={{ fontSize: 13, fontFamily: "sans-serif", color: "#444", display: "block", marginBottom: 6 }}>Full Name *</label>
                      <input className="gh-input" placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
                    </div>
                    <div>
                      <label style={{ fontSize: 13, fontFamily: "sans-serif", color: "#444", display: "block", marginBottom: 6 }}>Email Address *</label>
                      <input className="gh-input" type="email" placeholder="you@email.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
                    </div>
                  </div>
                  <div>
                    <label style={{ fontSize: 13, fontFamily: "sans-serif", color: "#444", display: "block", marginBottom: 6 }}>Service of Interest</label>
                    <select className="gh-input" value={form.service} onChange={e=>setForm({...form,service:e.target.value})} style={{ appearance: "auto" }}>
                      <option value="">Select a service…</option>
                      {SERVICES.map(s=><option key={s.label}>{s.label}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: 13, fontFamily: "sans-serif", color: "#444", display: "block", marginBottom: 6 }}>Message</label>
                    <textarea className="gh-textarea" placeholder="Tell us about your appointment or enquiry…" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} />
                  </div>
                  <button className="gh-btn" style={{ padding: "13px", fontSize: 15, borderRadius: 12, opacity: loading?.75:1 }} onClick={submit} disabled={loading}>
                    {loading ? "Sending…" : "Send Message"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer navigate={navigate} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// PAGE: Login
// ═══════════════════════════════════════════════════════════════════
function LoginPage({ navigate }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const submit = () => {
    if (!email || !password) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSuccess(true); }, 1400);
  };

  return (
    <div className="gh-page" style={{ minHeight: "100vh", display: "flex" }}>
      {/* Left image panel */}
      <div className="gh-login-img-panel" style={{ flex: 1, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 48 }}>
        <img src="https://images.unsplash.com/photo-1560066984-138daaa0a74d?w=900&q=80" alt="Salon" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,.75) 0%, rgba(0,0,0,.15) 60%)" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <button onClick={() => navigate("home")} style={{ background: "none", border: "none", color: "#aaa", fontFamily: "sans-serif", fontSize: 13, cursor: "pointer", marginBottom: 32, padding: 0 }}>← Back to site</button>
          <p style={{ color: PINK, fontFamily: "sans-serif", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 10 }}>Welcome Back</p>
          <h2 style={{ color: "#fff", fontSize: 32, fontWeight: "bold", lineHeight: 1.2, marginBottom: 14 }}>Your beauty<br />journey continues.</h2>
          <p style={{ color: "#ccc", fontSize: 13, fontFamily: "sans-serif", lineHeight: 1.7, maxWidth: 300 }}>Log in to manage appointments, explore member-exclusive offers, and stay up to date with your GlowHaven journey.</p>
        </div>
      </div>

      {/* Right form panel */}
      <div className="gh-login-form-panel" style={{ width: 460, background: "#fff", display: "flex", flexDirection: "column", justifyContent: "center", padding: "60px 48px" }}>
        <button onClick={() => navigate("home")} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer", color: "#aaa", fontFamily: "sans-serif", fontSize: 13, marginBottom: 36, padding: 0 }}>← Back to site</button>
        <p style={{ color: PINK, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: 6 }}>GlowHaven</p>
        <h1 style={{ fontSize: 26, fontWeight: "bold", marginBottom: 6 }}>Sign in to your account</h1>
        <p style={{ fontSize: 13, color: "#888", fontFamily: "sans-serif", marginBottom: 32 }}>
          Don't have an account? <span style={{ color: PINK, cursor: "pointer", borderBottom: `1px solid ${PINK}` }}>Create one free</span>
        </p>

        {success ? (
          <div style={{ textAlign: "center", padding: "28px 0" }}>
            <div style={{ fontSize: 48, marginBottom: 14 }}>✨</div>
            <h3 style={{ fontSize: 20, fontWeight: "bold", marginBottom: 8 }}>Welcome back!</h3>
            <p style={{ fontSize: 14, color: "#888", fontFamily: "sans-serif" }}>You're signed in to GlowHaven.</p>
            <button className="gh-btn" style={{ marginTop: 22, width: "100%" }} onClick={() => navigate("home")}>Go to Homepage</button>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: 16 }}>
              <label style={{ fontSize: 13, fontFamily: "sans-serif", color: "#444", display: "block", marginBottom: 7 }}>Email address</label>
              <input className="gh-input" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div style={{ marginBottom: 8 }}>
              <label style={{ fontSize: 13, fontFamily: "sans-serif", color: "#444", display: "block", marginBottom: 7 }}>Password</label>
              <div style={{ position: "relative" }}>
                <input className="gh-input" type={showPw ? "text" : "password"} placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} style={{ paddingRight: 44 }} />
                <button onClick={() => setShowPw(v => !v)} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", fontSize: 16, color: "#bbb" }}>
                  {showPw ? "🙈" : "👁️"}
                </button>
              </div>
            </div>
            <div style={{ textAlign: "right", marginBottom: 26 }}>
              <span style={{ fontSize: 13, color: PINK, cursor: "pointer", fontFamily: "sans-serif" }}>Forgot password?</span>
            </div>
            <button className="gh-btn" style={{ width: "100%", padding: "13px", fontSize: 15, borderRadius: 12, opacity: loading ? 0.75 : 1 }} onClick={submit} disabled={loading}>
              {loading ? "Signing in…" : "Sign In"}
            </button>
            <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "22px 0" }}>
              <div style={{ flex: 1, height: 1, background: "#f0e8e8" }} />
              <span style={{ fontSize: 12, color: "#ccc", fontFamily: "sans-serif" }}>or continue with</span>
              <div style={{ flex: 1, height: 1, background: "#f0e8e8" }} />
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              {[["G", "Google"], ["f", "Facebook"], ["A", "Apple"]].map(([ic, nm]) => (
                <button key={nm} style={{ flex: 1, padding: "10px 6px", border: "1.5px solid #eee", borderRadius: 10, background: "#fff", cursor: "pointer", fontSize: 13, fontFamily: "sans-serif", color: "#555" }}>
                  {ic} {nm}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// ROOT APP
// ═══════════════════════════════════════════════════════════════════
export default function App() {
  const [page, setPage] = useState("home");

  const navigate = (key) => {
    setPage(key);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const noNavbar  = page === "login";
  const heroPages = ["home"];
  const transparent = heroPages.includes(page);

  return (
    <>
      <style>{GLOBAL_CSS}</style>
      {!noNavbar && <Navbar page={page} navigate={navigate} transparent={transparent} />}
      <div style={{ paddingTop: noNavbar ? 0 : (transparent ? 0 : 64) }}>
        {page === "home"    && <HomePage    navigate={navigate} />}
        {page === "about"   && <AboutPage   navigate={navigate} />}
        {page === "services"&& <ServicesPage navigate={navigate} />}
        {page === "team"    && <TeamPage     navigate={navigate} />}
        {page === "contact" && <ContactPage  navigate={navigate} />}
        {page === "login"   && <LoginPage    navigate={navigate} />}
      </div>
    </>
  );
}
