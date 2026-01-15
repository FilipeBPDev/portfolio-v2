import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

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
      id: "01",
      title: "Crypto Tracker",
      description:
        "Acompanhar ativos de forma simples, sem depender de dashboards confusos.",
      tags: ["React", "API", "UX"],
    },
    {
      id: "02",
      title: "Portfolio v2",
      description:
        "Um site pensado para conversão, clareza e posicionamento profissional.",
      tags: ["React", "Design System", "UI"],
    },
    {
      id: "03",
      title: "Sistema de Relatórios",
      description:
        "Geração dinâmica de relatórios com filtros e foco em usabilidade.",
      tags: ["PHP", "SQL", "Back-end"],
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="flex items-center justify-center">
          <div className="max-w-3xl text-center gap-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Projetos desenvolvidos com foco em clareza,
              <span className="text-purple-400"> estrutura e evolução.</span>
            </h2>
            <p className="mt-10 mb-16 text-white/70 text-lg">
              Cada projeto representa decisões reais, aprendizado contínuo e
              preocupação com o que funciona na prática — não apenas estética.
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
              <div className="text-4xl font-bold text-purple-400 shrink-0">
                {project.id}
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
                  href="#"
                  className="flex items-center gap-2 text-purple-300 hover:text-purple-200 transition"
                  style={{ color: "var(--color-button-text)" }}
                >
                  Ver projeto <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Project */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold text-white">
              Projeto em destaque
            </h3>

            <p className="mt-6 text-white/70">
              Este projeto representa bem como eu penso produto, experiência e
              crescimento desde o início.
            </p>

            <ul
              className="mt-6 space-y-3 text-white/70"
              style={{ color: "var( --color-button-text)" }}
            >
              <li>• Problema bem definido antes do código</li>
              <li>• Decisões de arquitetura conscientes</li>
              <li>• Pensado para evoluir, não só existir</li>
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
                          backdrop-blur-xl flex items-center justify-center"
            style={{
              border: "1px solid var(--color-border-soft)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <span className="text-white/30 text-sm italic">
              Preview do projeto
            </span>
          </div>
        </div>

        {/* Closing */}
        <div className="mt-20 text-center">
          <p className="text-white/70 text-lg">
            Se você gostou da forma como eu penso projetos,
            <br />
            talvez a gente pense parecido.
          </p>

          <a
            href="#contact"
            className="inline-block mt-8 px-8 py-3 rounded-xl 
                       bg-purple-600 hover:bg-purple-700 transition 
                       text-white font-medium"
          >
            Vamos conversar
          </a>
        </div>
      </div>
    </section>
  );
}
