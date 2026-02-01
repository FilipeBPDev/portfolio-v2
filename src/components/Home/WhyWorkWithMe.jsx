import { useEffect, useRef } from "react";
import {
  MessageCircle,
  CheckCircle,
  TrendingUp,
  PackageCheck,
} from "lucide-react";

export default function WhyWorkWithMe() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;
    if (window.innerWidth < 768) return;

    const handleMouseMove = (e) => {
      glow.style.background = `
        radial-gradient(
          600px at ${e.clientX}px ${e.clientY}px,
          rgba(168, 85, 247, 0.12),
          transparent 70%
        )
      `;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const highlights = [
    {
      icon: MessageCircle,
      title: "Comunicação transparente",
      text: "Você acompanha o processo e entende cada etapa.",
      featured: true,
    },
    {
      icon: CheckCircle,
      title: "Decisões bem explicadas",
      text: "Cada escolha é pensada para o seu negócio.",
    },
    {
      icon: TrendingUp,
      title: "Projetos para escalar",
      text: "Estrutura preparada para evolução futura.",
    },
    {
      icon: PackageCheck,
      title: "Entregas alinhadas",
      text: "O combinado é exatamente o que você recebe.",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
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
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Manifesto + CTA */}
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Por que trabalhar comigo? <br />
              <span className="text-purple-400">
                Clareza, parceria e resultados reais.{" "}
              </span>
            </h2>

            <p className="mt-10 text-lg text-white/70">
              Não é só sobre entregar um site bonito. <br />É sobre{" "}
              <strong
                className="text-white/90"
                style={{ color: "var(--color-button-text)" }}
              >
                entender o seu negócio
              </strong>
              , seus objetivos e transformar ideias em soluções digitais que
              fazem sentido no dia a dia.
            </p>

            <p className="mt-6 text-white/70">
              Trabalho com um processo claro e colaborativo. Você acompanha cada
              etapa, entende as decisões e sabe exatamente o que está sendo
              construído —{" "}
              <span
                className="text-white/80"
                style={{ color: "var(--color-button-text)" }}
              >
                sem surpresas no final.
              </span>
            </p>

            <div className="mt-10 w-full flex justify-center">
              <a
                href="#contact"
                className="block w-80 px-7 py-3 rounded-xl 
                           bg-purple-600 hover:bg-purple-700 transition 
                           text-white font-medium text-center"
              >
                Vamos conversar sobre sua ideia
              </a>
            </div>
          </div>

          {/* direita - destaques placeholder */}
          <div className="flex flex-col justify-between h-full w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className={`
          rounded-2xl p-5 backdrop-blur-xl flex items-start gap-4 transition
          ${
            item.featured
              ? "border border-purple-400/40 bg-purple-500/10"
              : "border border-white/10 bg-white/5 hover:border-purple-400/30"
          }
        `}
                    style={{
                      border: "1px solid var(--color-border-soft)",
                      boxShadow: "var(--shadow-card)",
                    }}
                  >
                    {/* Ícone */}
                    <Icon
                      size={24}
                      className="mt-1 shrink-0"
                      style={{ color: "var(--color-button-text)" }}
                    />

                    {/* Conteúdo */}
                    <div className="flex flex-col gap-2">
                      <h3
                        className="text-base font-semibold leading-tight"
                        style={{ color: "var(--color-button-text)" }}
                      >
                        {item.title}
                      </h3>

                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--color-text-soft)" }}
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Placeholder visual area */}
            {/*  <div className="flex justify-center">
              <p
                className="italic text-white/10 text-sm"
                style={{ color: "var(--color-button-text)" }}
              >
                “Prefiro alinhar expectativas desde o início do que corrigir
                problemas no final..”
              </p>
            </div> */}
            <div
              className="w-full h-80 md:h-[300px] rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-purple-500/5 backdrop-blur-xl flex items-center justify-center"
              style={{
                border: "1px solid var(--color-border-soft)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <span
                className="text-white/30 text-sm italic"
                style={{ color: "var(--color-button-text)" }}
              >
                Imagem em breve
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
