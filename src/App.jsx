import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Background from "./components/Background";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <Background theme={theme} />

      {/* TEXTO PADRÃO DO SITE */}
      <div
        className="
          relative transition-colors
          text-zinc-900
          dark:text-white
        "
      >
        <Navbar
          theme={theme}
          toggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
        />

        <Home />
        <Footer />
      </div>
    </div>
  );
}
