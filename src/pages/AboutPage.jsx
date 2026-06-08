import { BLOGS, STORY_IMGS } from "../constants";
import Footer from "../components/Footer";

function AboutPage({ navigate }) {
  const values = [
    ["Clean Beauty", "Skin-safe, ethically sourced products that nourish without unnecessary harshness."],
    ["Premium Quality", "Professional tools, refined technique, and consistent attention to detail."],
    ["Client First", "Comfort, confidence, and honest guidance shape every appointment."],
    ["Always Learning", "Our team keeps training in modern beauty trends and care standards."],
  ];

  return (
    <div className="gh-page">
      <header className="bg-ink py-20 text-center text-white">
        <div className="gh-container">
          <p className="gh-eyebrow justify-center text-blush">About Us</p>
          <h1 className="mt-4 font-serif text-5xl font-bold">Our Story</h1>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/65">
            A Lagos beauty studio built on passion, expertise, and the quiet luxury of being well cared for.
          </p>
        </div>
      </header>

      <section className="gh-section">
        <div className="gh-container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="gh-eyebrow">Founded 2015</p>
            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-ink">
              A beauty sanctuary with a personal touch.
            </h2>
            <div className="mt-6 space-y-4 leading-8 text-ink/65">
              <p>
                GlowHaven began with a simple vision: create a space where every client feels seen, celebrated, and transformed.
              </p>
              <p>
                Our founder brought global beauty training back to Lagos and built a studio that blends world-class technique with warm, personalized care.
              </p>
              <p>
                Whether you visit for a quick blowout or a full bridal transformation, you leave as the most radiant version of yourself.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {STORY_IMGS.map((src, index) => (
              <img
                key={src}
                src={src}
                alt="GlowHaven salon story"
                className={[
                  "h-52 w-full rounded-3xl object-cover shadow-xl shadow-ink/10",
                  index % 2 ? "mt-8" : "",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="gh-section bg-blush-50">
        <div className="gh-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="gh-eyebrow justify-center">What We Stand For</p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-ink">Our Core Values</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(([title, desc]) => (
              <article key={title} className="gh-card rounded-3xl p-6 text-center">
                <p className="font-serif text-xl font-bold text-ink">{title}</p>
                <p className="mt-3 text-sm leading-6 text-ink/60">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gh-section text-center">
        <div className="gh-container">
          <p className="gh-eyebrow justify-center">Meet the Experts</p>
          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-4xl font-bold text-ink">
            The faces behind the glow.
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-8 text-ink/60">
            Our team brings decades of combined experience, steady hands, and a genuine love for the craft.
          </p>
          <button className="gh-btn mt-8" onClick={() => navigate("team")}>Meet Our Team</button>
        </div>
      </section>

      <section className="gh-section bg-white">
        <div className="gh-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="gh-eyebrow justify-center">Journal</p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-ink">Latest From GlowHaven</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {BLOGS.map((blog) => (
              <article key={blog.title} className="gh-blog-card overflow-hidden rounded-3xl bg-blush-50">
                <div className="overflow-hidden">
                  <img src={blog.img} alt={blog.title} className="h-52 w-full object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blush-600">{blog.cat}</p>
                  <p className="mt-3 font-serif text-xl font-bold leading-7 text-ink">{blog.title}</p>
                  <p className="mt-3 text-sm leading-6 text-ink/60">{blog.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer navigate={navigate} />
    </div>
  );
}

export default AboutPage;
