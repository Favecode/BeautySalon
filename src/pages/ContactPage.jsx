import { useState } from "react";
import { DARK, PINK_LIGHT, PINK } from "../styles";
import { SERVICES } from "../constants";
import Footer from "../components/Footer";

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
                  <button className="gh-btn" style={{ padding: "13px", fontSize: 15, borderRadius: 12, opacity: loading ? 0.75 : 1 }} onClick={submit} disabled={loading}>
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

export default ContactPage;