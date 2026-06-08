import React from "react";
import { DARK, PINK, PINK_LIGHT } from "../styles";
import { STORY_IMGS, BLOGS } from "../constants";
import Footer from "../components/Footer";

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

export default AboutPage;