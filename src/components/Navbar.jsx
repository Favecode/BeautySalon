import { useEffect, useState } from "react";
import { NAV_PAGES, PAGE_KEYS } from "../constants";

function Navbar({ page, navigate, transparent }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isTransparent = transparent && !scrolled && !drawerOpen;
  const go = (key) => {
    navigate(key);
    setDrawerOpen(false);
  };

  return (
    <>
      <nav
        className={[
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          isTransparent
            ? "bg-transparent text-white"
            : "border-b border-black/5 bg-white/90 text-ink shadow-sm backdrop-blur-xl",
        ].join(" ")}
      >
        <div className="gh-container flex h-16 items-center justify-between">
          <button
            onClick={() => go("home")}
            className="font-serif text-xl font-bold tracking-wide"
          >
            GlowHaven
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_PAGES.map((label, index) => {
              const key = PAGE_KEYS[index];
              const active = page === key;
              return (
                <button
                  key={label}
                  onClick={() => go(key)}
                  className={[
                    "text-sm font-bold transition-colors",
                    active
                      ? "text-blush-600"
                      : isTransparent
                        ? "text-white/85 hover:text-white"
                        : "text-ink/70 hover:text-ink",
                  ].join(" ")}
                >
                  {label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <button
              className={isTransparent ? "gh-btn-soft hidden sm:inline-flex" : "gh-btn hidden sm:inline-flex"}
              onClick={() => go("login")}
            >
              Log In
            </button>
            <button
              onClick={() => setDrawerOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-full border border-current/20 md:hidden"
              aria-label="Open menu"
            >
              <span className="flex flex-col gap-1.5">
                <span className="h-0.5 w-5 rounded-full bg-current" />
                <span className="h-0.5 w-5 rounded-full bg-current" />
                <span className="h-0.5 w-5 rounded-full bg-current" />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {drawerOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <button
            className="absolute inset-0 bg-ink/45"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
          />
          <aside className="relative flex h-full w-80 max-w-[86vw] flex-col bg-white p-6 shadow-2xl">
            <div className="mb-8 flex items-center justify-between">
              <span className="font-serif text-xl font-bold text-blush-600">GlowHaven</span>
              <button
                onClick={() => setDrawerOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full bg-blush-50 text-2xl text-ink/70"
                aria-label="Close menu"
              >
                x
              </button>
            </div>
            <div className="flex flex-col">
              {NAV_PAGES.map((label, index) => {
                const key = PAGE_KEYS[index];
                return (
                  <button
                    key={label}
                    onClick={() => go(key)}
                    className={[
                      "border-b border-black/5 py-4 text-left font-serif text-lg",
                      page === key ? "font-bold text-blush-600" : "text-ink",
                    ].join(" ")}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
            <button className="gh-btn mt-8 w-full" onClick={() => go("login")}>
              Log In
            </button>
          </aside>
        </div>
      )}
    </>
  );
}

export default Navbar;
