import { useEffect, useRef } from "react";
import { Lightbulb, Palette, Code2, Rocket } from "lucide-react";

export default function HowItWorks() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;
    if (window.innerWidth < 768) return;

    const handleMouseMove = (e) => {
      glow.style.background = `
        radial-gradient(
          500px at ${e.clientX}px ${e.clientY}px,
          rgba(168, 85, 247, 0.12),
          transparent 70%
        )
      `;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const steps = [
    {
      icon: Lightbulb,
      title: "Entendimento & briefing",
      desc: "Alinhamos objetivos, expectativas e referências antes de qualquer decisão. Nada é feito sem clareza.",
    },
    {
      icon: Palette,
      title: "Alinhamento visual",
      desc: "Apresento a direção visual inicial para validação, garantindo que o projeto siga o que você imaginou.",
    },
    {
      icon: Code2,
      title: "Desenvolvimento com acompanhamento",
      desc: "Você acompanha a evolução do projeto com checkpoints e feedback contínuo, evitando retrabalho.",
    },
    {
      icon: Rocket,
      title: "Entrega validada",
      desc: "Entrega final após ajustes, com tudo revisado, testado e alinhado ao que foi combinado.",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-32 overflow-hidden">
      {/* Glow */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
      />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "url('/noise.png')",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-purple-400">
            Como funciona
          </h2>
          <p className="mt-6 text-white/70 max-w-2xl mx-auto">
            Um processo claro, com comunicação constante e entregas alinhadas às
            suas expectativas.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl border border-white/10 
                           bg-white/5 backdrop-blur-xl
                           hover:border-purple-400/40 transition"
              >
                {/* Glow hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition
                             bg-gradient-to-br from-purple-500/10 to-transparent"
                />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div
                    className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl
                                  bg-purple-600/20 text-purple-400"
                  >
                    <Icon size={28} />
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-white/70">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
