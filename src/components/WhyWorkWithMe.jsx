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
      text: "Comunicação constante, sem caixa preta",
      featured: true,
    },
    {
      icon: CheckCircle,
      text: "Decisões explicadas, não impostas",
    },
    {
      icon: TrendingUp,
      text: "Projetos pensados para crescer",
    },
    {
      icon: PackageCheck,
      text: "Entregas alinhadas, sem surpresas",
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
                Mais que código, é parceria.
              </span>
            </h2>

            <p className="mt-10 text-lg text-white/70">
              Não é só sobre entregar um site bonito. <br />É sobre{" "}
              <strong className="text-white/90">entender o seu negócio</strong>,
              pensar junto e transformar ideias em algo que realmente funcione
              no dia a dia.
            </p>

            <p className="mt-6 text-white/70">
              Gosto de trabalhar com clareza desde o início. Você participa do
              processo, entende cada decisão e sabe exatamente o que está sendo
              construído —{" "}
              <span className="text-white/80">sem surpresas no final.</span>
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

          {/* Right - Highlights + Placeholder */}
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
                  >
                    <Icon size={24} className="text-purple-300 mt-1 shrink-0" />
                    <p className="text-white text-base">{item.text}</p>
                  </div>
                );
              })}
            </div>

            {/* Placeholder visual area */}
            <div className="flex justify-center">
              <p className="italic text-white/50 ">
                “Prefiro explicar uma decisão do que simplesmente impor uma
                solução.”
              </p>
            </div>
            <div className="w-full h-80 md:h-[300px] rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-purple-500/5 backdrop-blur-xl flex items-center justify-center">
              <span className="text-white/30 text-sm italic">
                Imagem em breve
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
