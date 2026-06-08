import { SERVICES } from "../constants";
import Footer from "../components/Footer";

function PageHero() {
  return (
    <header className="bg-ink py-20 text-center text-white">
      <div className="gh-container">
        <p className="gh-eyebrow justify-center text-blush">What We Offer</p>
        <h1 className="mt-4 font-serif text-5xl font-bold">Our Services</h1>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/65">
          Every service is designed to feel calm, polished, and personal, from quick refresh treatments to full-day luxury packages.
        </p>
      </div>
    </header>
  );
}

function ServicesPage({ navigate }) {
  return (
    <div className="gh-page">
      <PageHero />

      <section className="gh-section">
        <div className="gh-container grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <article key={service.label} className="gh-service-card overflow-hidden rounded-3xl bg-white shadow-xl shadow-ink/5">
              <div className="overflow-hidden">
                <img src={service.img} alt={service.label} className="h-52 w-full object-cover" />
              </div>
              <div className="p-5">
                <p className="font-serif text-xl font-bold text-ink">{service.label}</p>
                <p className="mt-1 text-sm font-bold text-blush-600">{service.price}</p>
                <p className="mt-3 min-h-18 text-sm leading-6 text-ink/60">{service.desc}</p>
                <button className="gh-btn mt-5 w-full" onClick={() => navigate("contact")}>Book Now</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="gh-section bg-blush-50">
        <div className="gh-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="gh-eyebrow justify-center">Why GlowHaven</p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-ink">The GlowHaven Difference</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["Certified Professionals", "Every specialist is trained, certified, and mentored in advanced beauty techniques."],
              ["Premium Products", "We choose skin-safe, salon-grade products that perform beautifully and feel gentle."],
              ["Flexible Booking", "Morning, evening, and weekend appointments help beauty care fit your real schedule."],
            ].map(([title, desc]) => (
              <article key={title} className="gh-card rounded-3xl p-7 text-center">
                <p className="font-serif text-2xl font-bold text-ink">{title}</p>
                <p className="mt-3 leading-7 text-ink/60">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer navigate={navigate} />
    </div>
  );
}

export default ServicesPage;
