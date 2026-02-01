import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Background from "./components/Background";
import { useState } from "react";

export default function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <BrowserRouter>
      <div className={theme === "dark" ? "dark" : ""}>
        <Background theme={theme} />

        <div className="relative transition-colors text-zinc-900 dark:text-white">
          <Navbar
            theme={theme}
            toggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
          />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
