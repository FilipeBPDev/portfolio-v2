import { useState, useRef, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar({ theme, toggleTheme }) {
  const navRef = useRef(null);
  const [open, setOpen] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full px-6"
    >
      {/* NAVBAR PRINCIPAL */}
      <div
        className="mx-auto max-w-5xl flex items-center justify-between px-6 py-2.5 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20 shadow-xl shadow-black/40 transition-colors dark:bg-black/20 dark:border-white/20 light:bg-white/80 light:border-black/10"
        style={{ background: "var(--color-navbar-bg)" }}
      >
        {/* ESQUERDA */}
        <div className="flex items-center gap-6">
          <a href="#home" className="font-semibold tracking-wide">
            Filipe<span className="text-[var(--accent)]">.dev</span>
          </a>

          <a
            href="#contato"
            className="hidden sm:inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur transition dark:text-white light:text-black"
          >
            Fale comigo
          </a>
        </div>

        {/* DIREITA */}
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-8 text-sm opacity-80">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sobre" className="hover:opacity-100">
                Sobre
              </Link>
            </li>
            <li>
              <a href="#projetos" className="hover:opacity-100">
                Projetos
              </a>
            </li>
          </ul>

          {/* INTERRUPTOR TEMA */}
          <button
            onClick={toggleTheme}
            aria-label="Alternar tema"
            className="hidden sm:flex relative w-12 h-6 items-center rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <span
              className={`
                absolute top-0.5 left-0.5 w-5 h-5
                rounded-full bg-white shadow flex items-center justify-center
                transform transition-transform duration-300
                ${isDark ? "translate-x-6" : "translate-x-0"}
              `}
            >
              {isDark ? (
                <Moon size={14} className="text-purple-700" />
              ) : (
                <Sun size={15} className="text-purple-400" />
              )}
            </span>
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl leading-none"
            aria-label="Abrir menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden mt-4 mx-auto max-w-5xl rounded-2xl backdrop-blur-md border shadow-lg transition-colors dark:bg-black/60 dark:border-white/20 light:bg-white/80 light:border-black/10">
          <ul className="flex flex-col divide-y divide-black/10 dark:divide-white/10">
            <li>
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="block px-6 py-4 opacity-80 hover:opacity-100 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/sobre"
                onClick={() => setOpen(false)}
                className="block px-6 py-4 opacity-80 hover:opacity-100 transition"
              >
                Sobre
              </Link>
            </li>

            <li>
              <Link
                to="/projetos"
                onClick={() => setOpen(false)}
                className="block px-6 py-4 opacity-80 hover:opacity-100 transition"
              >
                Projetos
              </Link>
            </li>

            <li>
              <Link
                to="/contato"
                onClick={() => setOpen(false)}
                className="block px-6 py-4 opacity-80 hover:opacity-100 transition"
              >
                Contato
              </Link>
            </li>

            {/* INTERRUPTOR TEMA MOBILE */}
            <li className="px-6 py-4 flex justify-between items-center">
              <span className="text-base opacity-80">Tema</span>
              <button
                onClick={toggleTheme}
                className="relative w-12 h-6 flex items-center rounded-full bg-white/10"
              >
                <span
                  className={`
              absolute top-0.5 left-0.5 w-5 h-5
              rounded-full bg-white shadow flex items-center justify-center
              transform transition-transform duration-300
              ${isDark ? "translate-x-6" : "translate-x-0"}
            `}
                >
                  {isDark ? (
                    <Moon size={14} className="text-blue-500" />
                  ) : (
                    <Sun size={14} className="text-yellow-400" />
                  )}
                </span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
