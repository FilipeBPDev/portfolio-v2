import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Foto from "../../assets/img/cryptotracker.jpeg";
import LogoCrypto from "../../assets/img/projects-logo/logo.png";
import LogoFin from "../../assets/img/projects-logo/Logo-FinManager.png";

export default function Projects() {
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

  const projects = [
    {
      logo: LogoCrypto,
      id: "01",
      title: "Crypto Tracker",
      description:
        "Dashboard para acompanhar preços em tempo real do mercado de criptomoedas.",
      tags: ["React", "API", "UX"],
      link: "https://cryptotracker.devfilipe.com/",
    },
    {
      logo: LogoFin,
      id: "02",
      title: "FinManager",
      description:
        "Sistema de controle financeiro pessoal que permite gerenciar suas finanças de forma simples e eficiente.",
      tags: ["React", "Design System", "UI"],
      link: "https://github.com/orgs/Financial-Manage/repositories",
    },
  ];

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="flex items-center justify-center">
          <div className="max-w-4xl text-center gap-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Projetos pensados como
              <span className="text-purple-400">
                {" "}
                produtos, não apenas como código.
              </span>
            </h2>
            <p className="mt-10 mb-16 text-white/70 text-lg">
              Cada projeto reflete decisões técnicas reais, foco em usabilidade
              e crescimento a longo prazo.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative flex flex-col md:flex-row md:items-center gap-6 
                         p-6 rounded-2xl border border-white/10 
                         bg-white/5 backdrop-blur-xl
                         hover:border-purple-400/30 transition"
              style={{
                background: "var(--color-card-bg)",
                border: "1px solid var(--color-card-border)",
                backdropFilter: "blur(12px)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              {/* Index */}
              <div className="shrink-0">
                <img
                  src={project.logo}
                  alt={project.title}
                  className="w-30 h-30 object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-2 text-white/70">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full 
                                 bg-purple-500/10 text-purple-300 
                                 border border-purple-400/20"
                      style={{ color: "var(--color-button-text)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="self-start md:self-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-300 hover:text-purple-200 transition"
                  style={{ color: "var(--color-button-text)" }}
                >
                  Ver detalhes <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Project */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold text-white">
              Projeto em{" "}
              <span style={{ color: "var(--color-button-text)" }}>
                destaque
              </span>
            </h3>

            <p className="mt-6 text-white/70">
              Este projeto mostra como eu abordo problemas reais desde o
              entendimento até a estrutura técnica.
            </p>

            <ul
              className="mt-6 space-y-3 text-white/70"
              style={{ color: "var( --color-button-text)" }}
            >
              <li>• Problema definido antes da implementação</li>
              <li>• Decisões técnicas com propósito</li>
              <li>• Estrutura preparada para evoluir</li>
            </ul>

            <a
              href="#"
              className="inline-block mt-8 px-7 py-3 rounded-xl 
                         bg-purple-600 hover:bg-purple-700 transition 
                         text-white font-medium"
            >
              Ver estudo completo
            </a>
          </div>

          {/* Placeholder visual */}
          <div
            className="w-full h-80 rounded-2xl border border-white/10 
             bg-gradient-to-br from-white/5 to-purple-500/5 
             backdrop-blur-xl overflow-hidden"
            style={{
              border: "1px solid var(--color-border-soft)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <img
              src={Foto}
              alt="Preview do projeto"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
