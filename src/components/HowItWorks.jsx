import briefingImg from "../assets/img/img1.jpg";
import visualImg from "../assets/img/img2.jpg";
import devImg from "../assets/img/img3.jpg";
import deliveryImg from "../assets/img/img4.jpg";
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
      title: "Alinhamento inicial",
      desc: "Alinhamos expectativas e necessidades antes de qualquer decisão. Tudo começa com clareza e direção.",
      image: briefingImg, // sugestão: reunião ou brainstorming
    },
    {
      icon: Palette,
      title: "Direção visual validada",
      desc: "Definimos a proposta visual inicial antes de avançar, garantindo alinhamento desde o começo.",
      image: visualImg, // sugestão: wireframe ou tela de design
    },
    {
      icon: Code2,
      title: "Desenvolvimento",
      desc: "O projeto evolui com organização e checkpoints, permitindo ajustes contínuos e evitando surpresas no final.",
      image: devImg, // sugestão: tela de código ou dev trabalhando
    },
    {
      icon: Rocket,
      title: "Entrega final e revisão",
      desc: "Após os ajustes finais, entrego o projeto revisado, testado e alinhado ao que foi combinado.",
      image: deliveryImg, // sugestão: mockup final ou cliente feliz
    },
  ];

  return (
    <section id="how-it-works" className="relative py-20 overflow-hidden">
      {/* glow */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
      />

      {/* content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-purple-400">
            Como funciona o processo do seu projeto{" "}
          </h2>
          <p className="mt-10 text-white/70 max-w-4xl mx-auto">
            Do primeiro contato à entrega final, sigo um processo claro e
            colaborativo, com validações em cada etapa. Assim, você acompanha a
            evolução do projeto, evita surpresas e tem total segurança sobre o
            resultado final.
          </p>
        </div>

        {/*steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl border border-white/10 
                           bg-white/5 backdrop-blur-xl
                           hover:border-purple-400/40 transition"
                style={{
                  border: "1px solid var(--color-border-soft)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                {/* Glow hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition
                             bg-gradient-to-br from-purple-500/10 to-transparent"
                />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="mb-6 rounded-xl w-full h-32 object-cover shadow-md"
                  />
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl
                                bg-purple-600/20 text-purple-400"
                    style={{ color: "var(--color-button-text)" }}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
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
