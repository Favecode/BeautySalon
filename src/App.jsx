import { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";

export default function App() {
  const [page, setPage] = useState("home");

  const navigate = (key) => {
    setPage(key);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const noNavbar = page === "login";
  const transparent = page === "home";

  return (
    <div className="min-h-screen">
      {!noNavbar && (
        <Navbar page={page} navigate={navigate} transparent={transparent} />
      )}
      <main className={noNavbar || transparent ? "" : "pt-16"}>
        {page === "home" && <HomePage navigate={navigate} />}
        {page === "about" && <AboutPage navigate={navigate} />}
        {page === "services" && <ServicesPage navigate={navigate} />}
        {page === "team" && <TeamPage navigate={navigate} />}
        {page === "contact" && <ContactPage navigate={navigate} />}
        {page === "login" && <LoginPage navigate={navigate} />}
      </main>
    </div>
  );
}
