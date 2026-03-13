import { useState } from "react";
import { FaBrain, FaPuzzlePiece } from "react-icons/fa";
import {
  ChevronDown,
  MessageCircle,
  Home,
  ClipboardList,
  Users,
  Layers,
  Compass,
  TrendingUp,
  FileCode,
} from "lucide-react";

// engineering notes data
const ENGINEERING_NOTES = [
  {
    id: "arquitetura",
    icon: Layers,
    title: "Arquitetura orientada à manutenibilidade",
    description:
      "Estruturo sistemas pensando em clareza, separação de responsabilidades e facilidade de manutenção ao longo do tempo.",
  },
  {
    id: "contexto",
    icon: Compass,
    title: "Decisões guiadas por contexto",
    description:
      "Evito aplicar padrões ou abstrações sem necessidade real. Primeiro compreendo o domínio, o legado existente e as restrições técnicas.",
  },
  {
    id: "evolucao",
    icon: TrendingUp,
    title: "Evolução incremental e segura",
    description:
      "Prefiro melhorias graduais e consistentes, reduzindo riscos em produção e mantendo estabilidade durante a evolução do sistema.",
  },
];

export default function DevMindset() {
  // state to control open notes
  const [openNotes, setOpenNotes] = useState({});

  // toggle note open state
  const toggleNote = (id) => {
    setOpenNotes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="relative w-full py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* header */}
        <div className="mb-16 flex items-center gap-3 text-purple-400">
          <FaBrain className="text-2xl" />
          <span className="uppercase tracking-widest text-sm">
            mindset tecnico
          </span>
        </div>

        {/* main content */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* left text */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold text-white">
              Como penso e tomo decisões técnicas
            </h2>

            <p className="text-white/70 leading-relaxed">
              Minha jornada foi construída a partir de experiências reais com
              sistemas em produção, código legado e ambientes onde decisões
              técnicas têm impacto direto no negócio e na rotina do time. Sempre
              procuro entender o contexto completo: regras de negócio, histórico
              do sistema, limitações técnicas, expectativas de quem usa e,
              principalmente, quem irá manter aquele código no futuro.
              <br />
              <br />
              Tomo decisões considerando arquitetura, legibilidade e
              manutenibilidade como fatores centrais. Prefiro estruturas claras,
              com responsabilidades bem definidas, mesmo que isso signifique
              abrir mão de abordagens mais sofisticadas quando elas não trazem
              ganho prático.
              <br />
              <br />
              Valorizo evolução incremental, mudanças seguras e soluções que
              respeitam o sistema existente. Busco melhorar pontos críticos,
              reduzir complexidade desnecessária e tornar o sistema mais
              previsível a cada iteração.
            </p>
          </div>

          {/* engineering notes */}
          <div className="flex flex-col gap-4">
            {ENGINEERING_NOTES.map((note) => {
              const isOpen = openNotes[note.id];

              return (
                <button
                  key={note.id}
                  onClick={() => toggleNote(note.id)}
                  className="
                    w-full text-left
                    rounded-xl border border-white/10 bg-white/5
                    px-6 py-5 backdrop-blur
                    transition-all duration-300
                    hover:border-purple-400/40 hover:bg-white/10
                  "
                  style={{
                    border: "1px solid var(--color-border-soft)",
                    boxShadow:
                      "0 20px 40px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.05)",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <note.icon className="text-purple-400" size={18} />

                    <h3 className="font-medium text-white">{note.title}</h3>

                    <ChevronDown
                      size={18}
                      className={`
                      ml-auto text-white/60 transition-transform duration-300
                      ${isOpen ? "rotate-180 text-purple-400" : ""}
                    `}
                      style={{ color: "var(--accent)" }}
                    />
                  </div>

                  <div
                    className={`
                      mt-3 overflow-hidden
                      text-sm text-white/60 leading-relaxed
                      transition-all duration-300
                      ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
                    `}
                    style={{ color: "var(--color-text-soft)" }}
                  >
                    {note.description}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
        <div className="mt-26 mb-16 flex items-center gap-3 text-purple-400">
          <FaPuzzlePiece className="text-3xl" />
          <span className="uppercase tracking-widest text-sm">
            Como atuo no dia a dia
          </span>
        </div>

        <div className="mt-8 flex justify-center">
          <div
            className="
            w-full max-w-5xl
            rounded-2xl border border-white/10
            bg-white/5 px-10 py-12
            backdrop-blur-xl
            transition-all duration-300
            hover:-translate-y-1 hover:border-purple-400/40
          "
            style={{
              boxShadow:
                "0 20px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            <h3 className="mb-8 text-2xl font-medium text-white">
              Soft Skills aplicadas
            </h3>

            <ul className="space-y-10 text-sm leading-relaxed text-white/70">
              <li className="flex gap-5 items-start">
                <MessageCircle className="text-purple-400 mt-1 shrink-0" />
                <div>
                  <strong
                    className="text-white/90"
                    style={{ color: "var(--color-text-purple)" }}
                  >
                    Comunicação técnica clara
                  </strong>
                  <p className="mt-2">
                    Consigo traduzir decisões técnicas para diferentes níveis do
                    time, facilitando alinhamento entre desenvolvimento, produto
                    e áreas não técnicas, evitando ruídos e retrabalho.
                  </p>
                </div>
              </li>

              <li className="flex gap-5 items-start">
                <Home size={20} className="text-purple-400 mt-1 shrink-0" />
                <div>
                  <strong
                    className="text-white/90"
                    style={{ color: "var(--color-text-purple)" }}
                  >
                    Autonomia em ambientes remotos
                  </strong>
                  <p className="mt-2">
                    Atuar remotamente exige organização, disciplina e
                    comunicação ativa. Tenho experiência real nesse formato,
                    assumindo responsabilidade por decisões técnicas e prazos.
                  </p>
                </div>
              </li>

              <li className="flex gap-5 items-start">
                <ClipboardList
                  size={20}
                  className="text-purple-400 mt-1 shrink-0"
                />
                <div>
                  <strong
                    className="text-white/90"
                    style={{ color: "var(--color-text-purple)" }}
                  >
                    Organização e processos
                  </strong>
                  <p className="mt-2">
                    Valorizo processos simples e bem definidos, que ajudam o
                    time a evoluir o sistema com segurança, previsibilidade e
                    menos dependência de pessoas específicas.
                  </p>
                </div>
              </li>

              <li className="flex gap-5 items-start">
                <Users size={20} className="text-purple-400 mt-1 shrink-0" />
                <div>
                  <strong
                    className="text-white/90"
                    style={{ color: "var(--color-text-purple)" }}
                  >
                    Colaboração e visão coletiva
                  </strong>
                  <p className="mt-2">
                    Encaro código como uma forma de comunicação entre pessoas.
                    Procuro respeitar decisões passadas, colaborar com o time
                    atual e facilitar o trabalho de quem dará continuidade no
                    futuro.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
