function Footer({ navigate }) {
  return (
    <footer className="bg-ink text-white">
      <div className="gh-container py-12">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-serif text-2xl font-bold">GlowHaven</p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/65">
              Lagos beauty studio for skincare, hair, makeup, nails, and restorative spa treatments.
            </p>
            <div className="mt-6 flex gap-3">
              {["f", "x", "ig"].map((item) => (
                <span
                  key={item}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-xs font-bold uppercase text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blush">Contact</p>
            <div className="mt-5 space-y-3 text-sm leading-6 text-white/65">
              <p>14 Beauty Boulevard, Victoria Island, Lagos</p>
              <p>hello@glowhaven.com</p>
              <p>+234 812 345 6789</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blush">Hours</p>
            <div className="mt-5 space-y-3 text-sm text-white/65">
              <p className="flex justify-between gap-4"><span>Mon-Wed</span><span>11am-7pm</span></p>
              <p className="flex justify-between gap-4"><span>Thu-Sat</span><span>10am-8pm</span></p>
              <p className="flex justify-between gap-4"><span>Sunday</span><span>12pm-6pm</span></p>
            </div>
            <button className="gh-btn mt-6 w-full bg-white text-ink hover:bg-blush-100" onClick={() => navigate("contact")}>
              Book Appointment
            </button>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/45">
          Copyright 2026 GlowHaven Beauty Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
