import { useEffect, useRef } from "react";
import { Atom, Wind, Code, Database, Palette } from "lucide-react";
import { ReactTyped } from "react-typed";

export default function Hero() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;
    if (window.innerWidth < 768) return;

    const handleMouseMove = (e) => {
      glow.style.background = `
        radial-gradient(
          600px at ${e.clientX}px ${e.clientY}px,
          rgba(168, 85, 247, 0.15),
          transparent 70%
        )
      `;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
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

      {/* Conteúdo */}
      <div className="mt-10 relative gap-6 z-10 flex flex-col items-center text-center px-6">
        <div className="min-h-[9rem] md:min-h-[12rem] max-w-7xl w-full flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            {" "}
            <ReactTyped
              strings={[
                "Websites profissionais que transmitem confiança desde o primeiro acesso",
                "Design moderno, código bem estruturado e foco total na experiência",
              ]}
              typeSpeed={120}
              backSpeed={60}
              loop
            />{" "}
          </h1>
        </div>
        <p className="mt-6 max-w-5xl text-lg md:text-xl opacity-80">
          Sou desenvolvedor web, formado em Análise e Desenvolvimento de
          Sistemas. Crio sites que fortalecem a credibilidade da marca e
          transformam ideias em experiências digitais rápidas e bem
          estruturadas.
        </p>

        {/* CTAs */}
        <div className="mt-12 flex gap-4">
          {" "}
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition text-white font-medium"
          >
            {" "}
            Ver projetos reais{" "}
          </a>{" "}
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-purple-300 hover:bg-purple-300/10 transition"
            style={{
              color: "var(--color-button-text)",
              border: "1px solid var(--color-button-border)",
            }}
          >
            {" "}
            Vamos conversar{" "}
          </a>{" "}
        </div>

        {/* tecnologia com icones */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-black/70 dark:text-white/70">
          <div
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-white/10"
            style={{
              border: "1px solid var(--color-button-border)",
              boxShadow: "var(--shadow-badges)",
            }}
          >
            <Atom
              size={20}
              className="text-purple-500 dark:text-purple-300"
              style={{
                color: "var(--color-button-text)",
              }}
            />
            <span
              style={{
                color: "var(--color-button-text)",
              }}
            >
              React.js
            </span>
          </div>
          <div
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-white/10"
            style={{
              border: "1px solid var(--color-button-border)",
              boxShadow: "var(--shadow-badges)",
            }}
          >
            <Wind
              size={20}
              className="text-purple-500 dark:text-purple-300"
              style={{
                color: "var(--color-button-text)",
              }}
            />
            <span
              style={{
                color: "var(--color-button-text)",
              }}
            >
              Tailwind CSS
            </span>
          </div>
          <div
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-white/10"
            style={{
              border: "1px solid var(--color-button-border)",
              boxShadow: "var(--shadow-badges)",
            }}
          >
            <Code
              size={20}
              className="text-purple-500 dark:text-purple-300"
              style={{
                color: "var(--color-button-text)",
              }}
            />
            <span
              style={{
                color: "var(--color-button-text)",
              }}
            >
              PHP (Backend)
            </span>
          </div>
          <div
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-white/10"
            style={{
              border: "1px solid var(--color-button-border)",
              boxShadow: "var(--shadow-badges)",
            }}
          >
            <Database
              size={20}
              className="text-purple-500 dark:text-purple-300"
              style={{
                color: "var(--color-button-text)",
              }}
            />
            <span
              style={{
                color: "var(--color-button-text)",
              }}
            >
              Banco de Dados
            </span>
          </div>
          <div
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-white/10"
            style={{
              border: "1px solid var(--color-button-border)",
              boxShadow: "var(--shadow-badges)",
            }}
          >
            <Palette
              size={20}
              className="text-purple-500 dark:text-purple-300"
              style={{
                color: "var(--color-button-text)",
              }}
            />
            <span
              style={{
                color: "var(--color-button-text)",
              }}
            >
              UI/UX
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 text-black/40 dark:text-white/40 text-sm animate-bounce"
        style={{
          color: "var(--color-button-text)",
        }}
      >
        Role para ver mais ↓
      </div>
    </section>
  );
}
