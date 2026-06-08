import { useState, useEffect } from "react";
import { GLOBAL_CSS } from "./styles";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";

// ═══════════════════════════════════════════════════════════════════
// ROOT APP
// ═══════════════════════════════════════════════════════════════════
export default function App() {
  const [page, setPage] = useState("home");

  const navigate = (key) => {
    setPage(key);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const noNavbar  = page === "login";
  const heroPages = ["home"];
  const transparent = heroPages.includes(page);
  return (
    <>
      <style>{GLOBAL_CSS}</style>
      {!noNavbar && <Navbar page={page} navigate={navigate} transparent={transparent} />}
      <div style={{ paddingTop: noNavbar ? 0 : (transparent ? 0 : 64) }}>
        {page === "home"    && <HomePage    navigate={navigate} />}
        {page === "about"   && <AboutPage   navigate={navigate} />}
        {page === "services"&& <ServicesPage navigate={navigate} />}
        {page === "team"    && <TeamPage     navigate={navigate} />}
        {page === "contact" && <ContactPage  navigate={navigate} />}
        {page === "login"   && <LoginPage    navigate={navigate} />}
      </div>
    </>
  );
}