import { useEffect, useRef } from "react";
import { Atom, Wind, Code, Database, Palette } from "lucide-react";

export default function Hero() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    // Desativa em mobile
    if (window.innerWidth < 768) return;

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      glow.style.background = `
        radial-gradient(
          600px at ${x}px ${y}px,
          rgba(168, 85, 247, 0.15),
          transparent 70%
        )
      `;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Glow interativo */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
      />

      {/* Textura noise */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: "url('/noise.png')",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Conteúdo */}
      <div className="mt-10 relative z-10 flex flex-col items-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-purple-400">
          Desenvolvedor Front-end
        </h1>

        <p className="mt-10 max-w-2xl text-lg md:text-xl text-white/80">
          Crio interfaces modernas, rápidas e bem estruturadas, focadas em
          performance e conversão.
        </p>

        {/* CTAs */}
        <div className="mt-12 flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition text-white font-medium"
          >
            Ver projetos
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-purple-400 text-purple-300 hover:bg-purple-400/10 transition"
          >
            Fale comigo
          </a>
        </div>

        {/* Badges de tecnologia com ícones */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-white/70">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10">
            <Atom size={20} className="text-purple-300" />
            <span>React.js</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10">
            <Wind size={20} className="text-purple-300" />
            <span>Tailwind CSS</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10">
            <Code size={20} className="text-purple-300" />
            <span>PHP</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10">
            <Database size={20} className="text-purple-300" />
            <span>MySQL</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10">
            <Palette size={20} className="text-purple-300" />
            <span>UI/UX</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 text-white/40 text-sm animate-bounce">
        Role para ver mais ↓
      </div>
    </section>
  );
}
