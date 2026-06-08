import { useState } from "react";
import { NIGERIAN_IMAGES } from "../constants";

function LoginPage({ navigate }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const submit = () => {
    if (!email || !password) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 900);
  };

  return (
    <div className="gh-page grid min-h-screen bg-cream lg:grid-cols-[1.1fr_0.9fr]">
      <section className="relative hidden overflow-hidden bg-ink p-12 text-white lg:flex lg:flex-col lg:justify-end">
        <img
          src={NIGERIAN_IMAGES.makeupSession}
          alt="Nigerian salon makeup session"
          className="absolute inset-0 h-full w-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(25,23,22,0.84),rgba(25,23,22,0.25))]" />
        <div className="relative max-w-md">
          <button onClick={() => navigate("home")} className="mb-10 text-sm font-bold text-white/65 hover:text-white">
            Back to site
          </button>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-blush">Welcome Back</p>
          <h1 className="mt-4 font-serif text-5xl font-bold leading-tight">Your beauty journey continues.</h1>
          <p className="mt-5 leading-8 text-white/70">
            Log in to manage appointments, browse member offers, and keep your GlowHaven plans in one place.
          </p>
        </div>
      </section>

      <section className="flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-md">
          <button onClick={() => navigate("home")} className="mb-8 text-sm font-bold text-ink/45 hover:text-ink lg:hidden">
            Back to site
          </button>
          <p className="gh-eyebrow">GlowHaven</p>
          <h1 className="mt-4 font-serif text-4xl font-bold text-ink">Sign in to your account</h1>
          <p className="mt-3 text-sm text-ink/55">
            Do not have an account? <span className="font-bold text-blush-600">Create one free</span>
          </p>

          <div className="gh-card mt-8 rounded-3xl p-6 sm:p-8">
            {success ? (
              <div className="py-8 text-center">
                <p className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-blush-100 text-2xl font-bold text-blush-600">
                  OK
                </p>
                <h2 className="mt-6 font-serif text-3xl font-bold text-ink">Welcome back</h2>
                <p className="mt-3 text-ink/60">You are signed in to GlowHaven.</p>
                <button className="gh-btn mt-7 w-full" onClick={() => navigate("home")}>Go Home</button>
              </div>
            ) : (
              <div className="space-y-5">
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-ink/75">Email address</span>
                  <input className="gh-input" type="email" placeholder="you@example.com" value={email} onChange={(event) => setEmail(event.target.value)} />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-ink/75">Password</span>
                  <div className="relative">
                    <input
                      className="gh-input pr-24"
                      type={showPw ? "text" : "password"}
                      placeholder="Enter password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                    <button
                      onClick={() => setShowPw((value) => !value)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-blush-50 px-3 py-1 text-xs font-bold text-blush-600"
                    >
                      {showPw ? "Hide" : "Show"}
                    </button>
                  </div>
                </label>

                <div className="text-right">
                  <span className="text-sm font-bold text-blush-600">Forgot password?</span>
                </div>

                <button className="gh-btn w-full rounded-2xl disabled:cursor-not-allowed disabled:opacity-60" onClick={submit} disabled={loading}>
                  {loading ? "Signing in..." : "Sign In"}
                </button>

                <div className="flex items-center gap-3 py-2">
                  <span className="h-px flex-1 bg-black/10" />
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-ink/35">or</span>
                  <span className="h-px flex-1 bg-black/10" />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {["Google", "Facebook", "Apple"].map((provider) => (
                    <button key={provider} className="rounded-2xl border border-black/10 bg-white px-3 py-3 text-xs font-bold text-ink/65 hover:bg-blush-50">
                      {provider}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
