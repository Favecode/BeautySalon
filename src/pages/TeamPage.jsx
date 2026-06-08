import React from "react";
import { DARK, PINK } from "../styles";
import { TEAM, REVIEWS } from "../constants";
import Footer from "../components/Footer";

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

export default TeamPage;