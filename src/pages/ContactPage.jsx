import { useState } from "react";
import { SERVICES } from "../constants";
import Footer from "../components/Footer";

function ContactPage({ navigate }) {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = () => {
    if (!form.name || !form.email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1000);
  };

  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }));

  return (
    <div className="gh-page">
      <header className="bg-ink py-20 text-center text-white">
        <div className="gh-container">
          <p className="gh-eyebrow justify-center text-blush">Get in Touch</p>
          <h1 className="mt-4 font-serif text-5xl font-bold">Contact Us</h1>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/65">
            Ready to book your next treatment or ask a question? We would love to hear from you.
          </p>
        </div>
      </header>

      <section className="gh-section">
        <div className="gh-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <aside>
            <p className="gh-eyebrow">Our Details</p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-ink">Visit us or send a message.</h2>
            <div className="mt-8 space-y-5">
              {[
                ["Location", "14 Beauty Boulevard, Victoria Island, Lagos, Nigeria"],
                ["Phone", "+234 812 345 6789"],
                ["Email", "hello@glowhaven.com"],
                ["Opening Hours", "Mon-Wed: 11am-7pm. Thu-Sat: 10am-8pm. Sun: 12pm-6pm."],
              ].map(([title, desc]) => (
                <div key={title} className="gh-card rounded-3xl p-5">
                  <p className="font-serif text-xl font-bold text-ink">{title}</p>
                  <p className="mt-2 leading-7 text-ink/60">{desc}</p>
                </div>
              ))}
            </div>
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?w=900&q=80"
              alt="Lagos location"
              className="mt-6 h-56 w-full rounded-3xl object-cover shadow-xl shadow-ink/10"
            />
          </aside>

          <section className="gh-card rounded-3xl p-6 sm:p-8">
            <p className="gh-eyebrow">Book / Enquire</p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-ink">Send Us a Message</h2>

            {sent ? (
              <div className="py-14 text-center">
                <p className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-blush-100 text-2xl font-bold text-blush-600">
                  OK
                </p>
                <h3 className="mt-6 font-serif text-3xl font-bold text-ink">Message Received</h3>
                <p className="mx-auto mt-3 max-w-md leading-7 text-ink/60">
                  We will be in touch within 24 hours. We cannot wait to welcome you.
                </p>
                <button className="gh-btn mt-7" onClick={() => setSent(false)}>Send Another</button>
              </div>
            ) : (
              <div className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-ink/75">Full Name *</span>
                    <input className="gh-input" placeholder="Your name" value={form.name} onChange={(event) => update("name", event.target.value)} />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-ink/75">Email Address *</span>
                    <input className="gh-input" type="email" placeholder="you@email.com" value={form.email} onChange={(event) => update("email", event.target.value)} />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-ink/75">Service of Interest</span>
                  <select className="gh-input" value={form.service} onChange={(event) => update("service", event.target.value)}>
                    <option value="">Select a service</option>
                    {SERVICES.map((service) => (
                      <option key={service.label}>{service.label}</option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-ink/75">Message</span>
                  <textarea
                    className="gh-input min-h-36 resize-y"
                    placeholder="Tell us about your appointment or enquiry"
                    value={form.message}
                    onChange={(event) => update("message", event.target.value)}
                  />
                </label>

                <button className="gh-btn w-full rounded-2xl disabled:cursor-not-allowed disabled:opacity-60" onClick={submit} disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            )}
          </section>
        </div>
      </section>

      <Footer navigate={navigate} />
    </div>
  );
}

export default ContactPage;
