import { BLOGS, REVIEWS, SERVICES, STORY_IMGS } from "../constants";
import Footer from "../components/Footer";

function HomePage({ navigate }) {
  return (
    <div className="gh-page">
      <section className="relative min-h-[92vh] overflow-hidden bg-ink text-white">
        <img
          src="https://images.unsplash.com/photo-1470259078422-826894b933aa?w=1800&q=85"
          alt="Beauty salon treatment room"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(25,23,22,0.82),rgba(25,23,22,0.42),rgba(25,23,22,0.18))]" />
        <div className="gh-container relative flex min-h-[92vh] items-center pt-20">
          <div className="max-w-2xl py-20">
            <p className="gh-eyebrow text-blush">Premium Beauty Studio</p>
            <h1 className="mt-5 font-serif text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              Care for your beauty, calm for your day.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/75">
              Expert skincare, hair, makeup, nails, and spa treatments crafted for a softer glow and a more confident you.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <button className="gh-btn bg-blush-600 hover:bg-blush" onClick={() => navigate("contact")}>
                Book Appointment
              </button>
              <button className="gh-btn-soft bg-white/10 text-white backdrop-blur hover:bg-white/20" onClick={() => navigate("services")}>
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-8 text-white">
        <div className="gh-container grid gap-5 text-center sm:grid-cols-2 lg:grid-cols-4">
          {[["2,400+", "Happy Clients"], ["8", "Expert Stylists"], ["10+", "Years of Excellence"], ["15", "Beauty Services"]].map(([number, label]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="font-serif text-3xl font-bold text-blush">{number}</p>
              <p className="mt-1 text-sm text-white/60">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="gh-section">
        <div className="gh-container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="gh-eyebrow">Our Story</p>
            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-ink">
              Beauty care with warmth, skill, and intention.
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-ink/65">
              Founded in 2015, GlowHaven was built around a simple promise: every appointment should feel personal, polished, and restorative.
            </p>
            <p className="mt-4 max-w-xl leading-8 text-ink/65">
              Our certified specialists blend modern techniques with nourishing products for everyday grooming, event styling, and full bridal transformations.
            </p>
            <button className="gh-btn-soft mt-7" onClick={() => navigate("about")}>
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {STORY_IMGS.map((src, index) => (
              <img
                key={src}
                src={src}
                alt="GlowHaven salon"
                className={[
                  "h-48 w-full rounded-3xl object-cover shadow-xl shadow-ink/10",
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
            <p className="gh-eyebrow justify-center">Services</p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-ink">Popular Treatments</h2>
            <p className="mt-4 leading-8 text-ink/60">
              Thoughtful beauty services for fresh skin, healthy hair, graceful makeup, and deep relaxation.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.slice(0, 4).map((service) => (
              <article key={service.label} className="gh-service-card overflow-hidden rounded-3xl bg-white shadow-xl shadow-ink/5">
                <div className="overflow-hidden">
                  <img src={service.img} alt={service.label} className="h-52 w-full object-cover" />
                </div>
                <div className="p-5">
                  <p className="font-serif text-xl font-bold text-ink">{service.label}</p>
                  <p className="mt-1 text-sm font-bold text-blush-600">{service.price}</p>
                  <p className="mt-3 text-sm leading-6 text-ink/60">{service.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button className="gh-btn" onClick={() => navigate("services")}>View All Services</button>
          </div>
        </div>
      </section>

      <section className="gh-section">
        <div className="gh-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="gh-eyebrow justify-center">Reviews</p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-ink">Clients Leave Glowing</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {REVIEWS.map((review) => (
              <article key={review.name} className="gh-card rounded-3xl p-6">
                <p className="text-sm font-bold tracking-[0.2em] text-gold">★★★★★</p>
                <p className="mt-4 leading-7 text-ink/70">"{review.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <img src={review.img} alt={review.name} className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-ink">{review.name}</p>
                    <p className="text-xs text-ink/45">Verified Client</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gh-section bg-white">
        <div className="gh-container">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="gh-eyebrow">Beauty Journal</p>
              <h2 className="mt-4 font-serif text-4xl font-bold text-ink">Tips From the Studio</h2>
            </div>
            <button className="gh-btn-soft" onClick={() => navigate("about")}>Read More</button>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {BLOGS.map((blog) => (
              <article key={blog.title} className="gh-blog-card overflow-hidden rounded-3xl bg-blush-50">
                <div className="overflow-hidden">
                  <img src={blog.img} alt={blog.title} className="h-52 w-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-3 text-xs font-bold text-ink/45">
                    <span className="rounded-full bg-white px-3 py-1 text-blush-600">{blog.cat}</span>
                    <span className="py-1">{blog.date}</span>
                  </div>
                  <p className="mt-4 font-serif text-xl font-bold leading-7 text-ink">{blog.title}</p>
                  <p className="mt-3 text-sm leading-6 text-ink/60">{blog.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#191716,#3a2825)] py-16 text-center text-white">
        <div className="gh-container">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-blush">Ready to glow?</p>
          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-4xl font-bold">Book your next treatment today.</h2>
          <p className="mx-auto mt-4 max-w-xl leading-8 text-white/65">
            Treat yourself to a luxury beauty appointment with a team that cares about every detail.
          </p>
          <button className="gh-btn mt-8 bg-blush-600 hover:bg-blush" onClick={() => navigate("contact")}>Book Now</button>
        </div>
      </section>

      <Footer navigate={navigate} />
    </div>
  );
}

export default HomePage;
