import { useEffect, useRef, useState } from "react";

const focusAreas = {
  frontend: {
    title: "Front-end Engineering",
    text: "Interfaces performáticas, componentes bem estruturados e atenção aos detalhes visuais.",
  },
  ux: {
    title: "UX & Product Thinking",
    text: "Decisões guiadas por clareza, fluxo do usuário e experiência real de uso.",
  },
  backend: {
    title: "Back-end & Integrações",
    text: "APIs, formulários, lógica de negócio e comunicação entre sistemas.",
  },
};

export default function AboutIntro() {
  const glowRef = useRef(null);
  const [active, setActive] = useState("frontend");

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow || window.innerWidth < 768) return;

    const handleMouseMove = (e) => {
      glow.style.background = `
        radial-gradient(
          480px at ${e.clientX}px ${e.clientY}px,
          rgba(168, 85, 247, 0.10),
          transparent 70%
        )
      `;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative py-26 overflow-hidden">
      {/* Glow */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
      />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "url('/noise.png')",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Filipe Batista
          </h1>
          <p className="mt-3 text-lg text-white/70">
            Desenvolvedor focado em interfaces claras, código organizado e
            experiência do usuário.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Profile Card */}
          <div
            className="rounded-2xl p-6 backdrop-blur-xl bg-white/5 border border-white/10"
            style={{
              border: "1px solid var(--color-border-soft)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div
              className="w-full rounded-xl bg-gradient-to-br from-white/5 to-purple-500/10 flex items-center justify-center overflow-hidden"
              style={{
                aspectRatio: "3 / 4",
                maxHeight: "400px",
                padding: "0.75rem",
                border: "1px solid var(--color-border-soft)",
              }}
            >
              <span
                className="text-sm italic"
                style={{ color: "var(--color-text-soft)" }}
              >
                Foto profissional
              </span>
            </div>

            <div
              className="mt-4 text-sm opacity-70"
              style={{ color: "var(--color-text-soft)" }}
            >
              São Paulo, Brasil · Remoto
            </div>
          </div>

          {/* Focus Areas */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex gap-3 flex-wrap">
              {Object.keys(focusAreas).map((key) => (
                <button
                  key={key}
                  onMouseEnter={() => setActive(key)}
                  onFocus={() => setActive(key)}
                  className={`px-4 py-2 rounded-full text-sm transition
                    ${
                      active === key
                        ? "bg-purple-500/20 border-purple-400/40"
                        : "bg-white/5 border-white/10 hover:border-purple-400/30"
                    }`}
                  style={{
                    border: "1px solid var(--color-border-soft)",
                    color: "var(--color-text-soft)",
                  }}
                >
                  {focusAreas[key].title}
                </button>
              ))}
            </div>

            <div
              className="rounded-2xl p-6 bg-white/5 backdrop-blur-xl transition"
              style={{
                border: "1px solid var(--color-border-soft)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <h3 className="text-lg font-medium mb-2">
                {focusAreas[active].title}
              </h3>
              <p className="text-white/70 leading-relaxed max-w-2xl">
                {focusAreas[active].text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
