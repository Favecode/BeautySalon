import { useState, useEffect } from "react";
import { PINK, DARK, PINK_LIGHT } from "../styles";
import { NAV_PAGES, PAGE_KEYS } from "../constants";

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
            <button className="gh-btn" style={{ padding: "8px 20px", fontSize: 13 }} onClick={() => go("login")}>Log In</button>
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

export default Navbar;