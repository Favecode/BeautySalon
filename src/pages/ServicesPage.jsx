import React from "react";
import { DARK, PINK } from "../styles";
import { SERVICES } from "../constants";
import Footer from "../components/Footer";

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

export default ServicesPage;