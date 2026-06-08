import { useState } from "react";
import { DARK, PINK } from "../styles";

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

export default LoginPage;