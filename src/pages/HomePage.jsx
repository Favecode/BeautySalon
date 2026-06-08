import React from "react"; // React is not used directly, can be removed
import { PINK, DARK } from "../styles";
import { SERVICES, REVIEWS, STORY_IMGS, BLOGS } from "../constants";
import Footer from "../components/Footer";

// ═══════════════════════════════════════════════════════════════════
// PAGE: Home
// ═══════════════════════════════════════════════════════════════════
function HomePage({ navigate }) {
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
      <div className="gh-hide-on-mobile" style={{ background: DARK, padding: "22px 0" }}>
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
                    <span style={{ background: "#fde8e7", color: PINK, fontSize: 11, fontFamily: "sans-serif", padding: "2px 10px", borderRadius: 20 }}>{b.cat}</span>
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

export default HomePage;