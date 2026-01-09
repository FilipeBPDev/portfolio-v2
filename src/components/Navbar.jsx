import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full px-6">
      {/* NAVBAR PRINCIPAL */}
      <div className="mx-auto max-w-5xl flex items-center justify-between px-6 py-3 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20 shadow-xl shadow-black/40">
        {/* ESQUERDA */}
        <div className="flex items-center gap-6">
          {/* LOGO */}
          <span className="font-semibold tracking-wide text-white">
            Filipe<span className="text-[var(--accent)]">.dev</span>
          </span>

          {/* CTA */}
          <a
            href="#contato"
            className="hidden sm:inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-lg bg-white/10 hover:bg-white/20 text-white backdrop-blur transition"
          >
            Fale comigo
          </a>
        </div>

        {/* DIREITA */}
        <div className="flex items-center gap-10">
          {/* LINKS DESKTOP */}
          <ul className="hidden md:flex gap-10 text-sm text-white/80">
            <li>
              <a href="#home" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#sobre" className="hover:text-white transition">
                Sobre
              </a>
            </li>
            <li>
              <a href="#projetos" className="hover:text-white transition">
                Projetos
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-white transition">
                Contato
              </a>
            </li>
          </ul>

          {/* BOTÃO TEMA */}
          <button className="hidden sm:inline-flex text-white/80 hover:text-white transition">
            Tema
          </button>

          {/* MENU HAMBÚRGUER */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-2xl leading-none"
            aria-label="Abrir menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden mt-4 mx-auto max-w-5xl rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 shadow-lg shadow-black/40">
          <ul className="flex flex-col divide-y divide-white/10 text-white/80">
            <li>
              <a
                href="#home"
                onClick={() => setOpen(false)}
                className="block px-6 py-4 hover:text-white transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                onClick={() => setOpen(false)}
                className="block px-6 py-4 hover:text-white transition"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#projetos"
                onClick={() => setOpen(false)}
                className="block px-6 py-4 hover:text-white transition"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="block px-6 py-4 hover:text-white transition"
              >
                Contato
              </a>
            </li>

            {/* CTA MOBILE */}
            <li className="px-6 py-4">
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="block w-full text-center rounded-lg bg-white/10 hover:bg-white/20 py-2 text-white transition"
              >
                Fale comigo
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
