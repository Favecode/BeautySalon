import React from "react";
import { PINK_LIGHT } from "../styles";

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

export default Footer;