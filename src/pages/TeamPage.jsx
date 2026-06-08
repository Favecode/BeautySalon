import { REVIEWS, TEAM } from "../constants";
import Footer from "../components/Footer";

function TeamPage({ navigate }) {
  return (
    <div className="gh-page">
      <header className="bg-ink py-20 text-center text-white">
        <div className="gh-container">
          <p className="gh-eyebrow justify-center text-blush">The Experts</p>
          <h1 className="mt-4 font-serif text-5xl font-bold">Our Team</h1>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/65">
            Meet the specialists who bring care, precision, and artistry to every appointment.
          </p>
        </div>
      </header>

      <section className="gh-section">
        <div className="gh-container grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member) => (
            <article key={member.name} className="gh-team-card overflow-hidden rounded-3xl bg-white shadow-xl shadow-ink/5">
              <div className="overflow-hidden">
                <img src={member.img} alt={member.name} className="h-72 w-full object-cover" />
              </div>
              <div className="p-6">
                <p className="font-serif text-xl font-bold text-ink">{member.name}</p>
                <p className="mt-1 text-sm font-bold text-blush-600">{member.role}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-ink/35">{member.exp} experience</p>
                <p className="mt-4 text-sm leading-6 text-ink/60">{member.bio}</p>
                <button className="gh-btn-soft mt-5 w-full" onClick={() => navigate("contact")}>
                  Book with {member.name.split(" ")[0]}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="gh-section bg-blush-50">
        <div className="gh-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="gh-eyebrow justify-center">Client Stories</p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-ink">What Clients Say</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
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

      <Footer navigate={navigate} />
    </div>
  );
}

export default TeamPage;
