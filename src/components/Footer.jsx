export default function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      {/* Glow sutil */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-purple-900/10 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Identidade */}
          <div>
            <p className="text-xl font-semibold text-white">Filipe.dev</p>
            <p className="mt-3 text-sm text-white/60 max-w-xs">
              Desenvolvimento web com foco em clareza, processo e resultados
              reais.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <p className="text-sm font-medium text-white mb-4">Navegação</p>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a href="#home" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <p className="text-sm font-medium text-white mb-4">Contato</p>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a
                  href="mailto:seuemail@email.com"
                  className="hover:text-white transition"
                >
                  seuemail@email.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/seugithub"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha final */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Filipe.dev — Construído com cuidado e
            atenção aos detalhes.
          </p>
        </div>
      </div>
    </footer>
  );
}
