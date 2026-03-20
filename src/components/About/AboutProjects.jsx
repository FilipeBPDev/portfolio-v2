import { useRef } from "react";
import { FaFolderOpen } from "react-icons/fa";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { PROJECTS } from "../../data/projects";

export default function AboutProjects() {
  const scrollRef = useRef(null);
  const cardsRef = useRef([]);

  const scrollToCard = (direction) => {
    if (!scrollRef.current || !cardsRef.current.length) return;

    const containerCenter =
      scrollRef.current.scrollLeft + scrollRef.current.offsetWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cardsRef.current.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    const targetIndex =
      direction === "left"
        ? Math.max(0, closestIndex - 1)
        : Math.min(PROJECTS.length - 1, closestIndex + 1);

    cardsRef.current[targetIndex]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  return (
    <section className="relative w-full py-28">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* header */}
        <div className="mb-16 flex items-center gap-3 text-purple-400">
          <FaFolderOpen className="text-2xl" />
          <span className="text-sm uppercase tracking-widest">
            projetos selecionados
          </span>
        </div>

        {/* intro */}
        <div className="mb-24 max-w-3xl">
          <h2 className="mb-6 text-3xl font-semibold text-white">
            Aplicações reais, decisões conscientes
          </h2>
          <p className="leading-relaxed text-white/70">
            Estes projetos representam minha forma de atuar como desenvolvedor:
            entender o problema, respeitar o contexto existente e estruturar
            soluções sustentáveis ao longo do tempo.
          </p>
        </div>

        {/* scroll wrapper */}

        <div className="relative">
          <div className="overflow-visible">
            {/* fades laterais (sem manchar fundo) */}
            <div
              className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16"
              style={{
                background:
                  "linear-gradient(to right, var(--color-fade-edge), transparent)",
              }}
            />

            <div
              className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16"
              style={{
                background:
                  "linear-gradient(to left, var(--color-fade-edge), transparent)",
              }}
            />

            {/* botões fora da área */}
            <button
              onClick={() => scrollToCard("left")}
              className="absolute -left-14 top-1/2 z-20 hidden -translate-y-1/2
              text-white/40 transition hover:text-purple-400 lg:block"
              style={{ color: "var(--accent)" }}
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={() => scrollToCard("right")}
              className="absolute -right-14 top-1/2 z-20 hidden -translate-y-1/2
              text-white/40 transition hover:text-purple-400 lg:block"
              style={{ color: "var(--accent)" }}
            >
              <ChevronRight size={28} />
            </button>

            {/* scroll horizontal */}
            <div
              ref={scrollRef}
              className="
              flex gap-12
              overflow-x-auto
              scroll-smooth
              snap-x snap-mandatory
              scrollbar-none
              px-[10vw]
              py-[02vw]
            "
            >
              {/* spacer left */}
              <div className="min-w-[10vw]" />

              {PROJECTS.map((project, index) => (
                <article
                  key={project.id}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="
                  group
                  relative
                  snap-center
                  min-w-[72vw] lg:min-w-[48vw]
                  rounded-2xl
                  p-10
                  transition-all duration-500 ease-out
                  will-change-transform
                  hover:-translate-y-2
                  hover:z-30
                  hover:scale-[1.02]
                  hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)]
                "
                  style={{
                    background:
                      "linear-gradient(145deg, var(--color-bg-soft), transparent)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid var(--color-border-soft)",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                  }}
                >
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle at top left, rgba(168,85,247,0.15), transparent 60%)",
                    }}
                  />
                  <div
                    className="grid grid-cols-1 gap-10 lg:grid-cols-2"
                    style={{ color: "var(--accent)" }}
                  >
                    {/* conteúdo */}
                    <div
                      className="flex flex-col justify-between"
                      style={{ border: "var(--color-card-border )" }}
                    >
                      <div>
                        <h3 className="mb-4 text-2xl font-medium text-white">
                          {project.title}
                        </h3>

                        <p className="mb-6 leading-relaxed text-white/70">
                          {project.description}
                        </p>

                        <ul className="flex flex-wrap gap-3">
                          {project.stack.map((tech) => (
                            <li
                              key={tech}
                              className="rounded-full border border-white/10
                              bg-white/5 px-4 py-1 text-xs text-white/60"
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-8">
                        <button
                          className="inline-flex items-center gap-2 text-sm
                        text-purple-400 transition hover:text-purple-300"
                        >
                          Ver detalhes
                          <ArrowUpRight size={16} />
                        </button>
                      </div>
                    </div>

                    {/* preview */}
                    <div
                      className="flex items-center justify-center rounded-xl
                    border border-white/10
                    bg-gradient-to-br from-purple-500/10 to-transparent"
                      style={{ border: "1px solid var(--color-border-soft)" }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover rounded-xl opacity-90
                        transition duration-500 group-hover:opacity-100"
                      />
                    </div>
                  </div>
                </article>
              ))}

              {/* spacer right */}
              <div className="min-w-[15vw]" />
            </div>
          </div>
        </div>

        {/* mobile hint */}
        <p className="mt-8 text-xs text-white/40 lg:hidden">
          Arraste horizontalmente para explorar os projetos →
        </p>
      </div>
    </section>
  );
}
