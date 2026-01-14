import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Background from "./components/Background";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState("dark"); // simples e local

  return (
    <div className={theme}>
      <Background theme={theme} />

      <div className="relative text-white transition-colors">
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
