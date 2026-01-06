export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full px-6">
      <div className="mx-auto max-w-5xl flex items-center justify-between px-6 py-3 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20 shadow-xl shadow-black/40">
        <div className="flex items-center gap-36">
          <span className="font-semibold tracking-wide text-white">
            Filipe<span className="text-[var(--accent)]">.dev</span>
          </span>

          <button
            className="
            hidden sm:inline-flex
            items-center
            px-3 py-1.5
            text-sm
            font-medium
            rounded-lg
            bg-white/10
            hover:bg-white/20
            text-white
            backdrop-blur
            transition
            "
          >
            Fale comigo
          </button>
        </div>

        <div className="flex items-center gap-32">
          <ul className="hidden md:flex gap-10 text-sm text-white/80">
            <li className="hover:text-white transition">Home</li>
            <li className="hover:text-white transition">Sobre</li>
            <li className="hover:text-white transition">Projetos</li>
            <li className="hover:text-white transition">Contato</li>
          </ul>

          <button className="text-white/80 hover:text-white transition">
            Tema
          </button>
        </div>
      </div>
    </nav>
  );
}
