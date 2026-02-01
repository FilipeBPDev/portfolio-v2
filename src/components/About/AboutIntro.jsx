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

const principles = [
  {
    title: "Clarity over complexity",
    text: "Interfaces e código devem ser fáceis de entender — para usuários e para quem mantém.",
  },
  {
    title: "UX-driven decisions",
    text: "Estrutura, fluxo e layout partem do uso real, não apenas da implementação.",
  },
  {
    title: "Code as communication",
    text: "Código é uma forma de comunicação entre pessoas, não só instruções para máquinas.",
  },
];

export default function AboutIntro() {
  const glowRef = useRef(null);
  const [active, setActive] = useState("frontend");
  const [showPrinciplesInfo, setShowPrinciplesInfo] = useState(false);

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
    <section className="relative py-24 overflow-hidden">
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
      />

      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "url('/noise.png')",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Filipe Batista
          </h1>
          <p className="mt-3 text-lg text-white/70">
            Desenvolvedor focado em interfaces claras, código organizado e
            experiência do usuário.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Profile Card */}
          <div
            className="rounded-2xl p-6 backdrop-blur-xl bg-white/5"
            style={{
              border: "1px solid var(--color-border-soft)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div
              className="w-full rounded-xl bg-gradient-to-br from-white/5 to-purple-500/10 
                         flex items-center justify-center overflow-hidden"
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

          {/* Content */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Focus Areas */}
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

            {/* Principles */}
            <div className="mt-8">
              <div className="relative flex items-center gap-32 mb-10">
                <h2 className="text-xl ml-8 font-semibold opacity-90">
                  Como eu penso e construo produtos
                </h2>

                {/* Tooltip Wrapper */}
                <div
                  className="relative"
                  onMouseLeave={() => setShowPrinciplesInfo(false)}
                >
                  <button
                    type="button"
                    onMouseEnter={() => setShowPrinciplesInfo(true)}
                    onFocus={() => setShowPrinciplesInfo(true)}
                    onBlur={() => setShowPrinciplesInfo(false)}
                    className="
                      flex items-center gap-2
                      px-5 py-2 text-sm rounded-full
                      bg-white/5 hover:bg-white/10
                      transition border
                    "
                    style={{
                      border: "1px solid var(--color-border-soft)",
                      color: "var(--color-text-soft)",
                    }}
                  >
                    <span>Visão de desenvolvimento</span>
                    <span className="opacity-60">ⓘ</span>
                  </button>

                  {showPrinciplesInfo && (
                    <div
                      className="
                        absolute left-0 top-full mt-3
                        w-[320px] p-4 rounded-xl
                        backdrop-blur-xl
                        text-sm
                        z-20
                        animate-fade-in"
                      style={{
                        background: "var(--color-card-bg)",
                        color: "var(--color-text)",
                        border: "1px solid var(--color-border-soft)",
                        boxShadow: "var(--shadow-card)",
                      }}
                    >
                      <p
                        className="leading-relaxed"
                        style={{ color: "var(--color-text-soft)" }}
                      >
                        Esses princípios orientam minhas decisões técnicas e de
                        produto, desde o primeiro briefing até a entrega e
                        manutenção do código.
                      </p>
                      <p
                        className="mt-2 leading-relaxed"
                        style={{ color: "var(--color-text-soft)" }}
                      >
                        Eles ajudam a alinhar expectativas com o time,
                        stakeholders e facilitam a evolução do produto no longo
                        prazo.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {principles.map((item) => (
                  <div
                    key={item.title}
                    className="group relative rounded-2xl p-6 bg-white/5 backdrop-blur-xl
                               transition-all duration-300 hover:-translate-y-1"
                    style={{
                      border: "1px solid var(--color-border-soft)",
                      boxShadow: "var(--shadow-card)",
                    }}
                  >
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 
                                 group-hover:opacity-100 transition-opacity
                                 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(300px at top left, rgba(168,85,247,0.15), transparent 70%)",
                      }}
                    />

                    <div className="relative z-10">
                      <h3 className="text-base font-medium mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-white/70">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
