import { FileText } from "lucide-react";
import {
  FaReact,
  FaDatabase,
  FaLinux,
  FaLaravel,
  FaGitAlt,
  FaCodeBranch,
} from "react-icons/fa6";

export default function AboutProfile() {
  return (
    <section className="relative py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Texto principal */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-semibold mb-6">
              Um pouco mais sobre minha trajetória
            </h2>

            <div className="space-y-5 text-base leading-relaxed text-white/70">
              <p>
                Sou desenvolvedor fullstack com experiência em aplicações reais,
                atuando há mais de 4 anos de forma totalmente remota. Trabalho
                com sistemas em produção, manutenção de código legado e evolução
                contínua de produtos que precisam ser estáveis, claros e
                sustentáveis ao longo do tempo.
              </p>

              <p>
                Minha atuação envolve tanto front-end quanto back-end, passando
                por interfaces em React, regras de negócio em PHP/Laravel, banco
                de dados SQL, relatórios complexos e integrações. Gosto de
                entender o problema antes da solução, desde a experiência do
                usuário até a forma como os dados são modelados e mantidos.
              </p>

              <p>
                Trabalho em ambiente Linux, e constante versionamento de código,
                organização de projetos e comunicação em times distribuídos.
                Valorizo código como forma de comunicação entre pessoas,
                decisões guiadas pelo uso real e processos que facilitem a
                colaboração e a evolução do sistema, especialmente em contextos
                que envolvem legado.
              </p>
            </div>

            {/* curriculo */}
            <a
              href="/cv-filipe-batista.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2 mt-8
                text-sm font-medium
                hover:opacity-80 transition
              "
              style={{ color: "var(--accent)" }}
            >
              <FileText size={15} />
              Ver currículo em PDF
            </a>
          </div>

          {/* Card lateral */}
          <div
            className="
              rounded-2xl p-6
              backdrop-blur-xl bg-white/5
              transition-all duration-300
              hover:-translate-y-1
            "
            style={{
              border: "1px solid var(--color-border-soft)",
              boxShadow:
                "0 20px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            <h3 className="text-sm font-medium mb-5 opacity-80">
              <span> Stack & Contexto de Uso</span>
            </h3>

            <ul
              className="space-y-4 text-sm text-white/70"
              style={{ color: "var(--color-text-purple)" }}
            >
              <li
                className="flex items-center gap-3"
                style={{ color: "var-(--color-text)" }}
              >
                <FaReact size={30} />
                <span>
                  React / JavaScript — interfaces e experiência do usuário
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FaLaravel size={30} />
                <span>
                  Laravel / PHP — regras de negócio e sistemas legados
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FaDatabase size={21} />
                <span>MySQL — consultas, relatórios e dados em produção</span>
              </li>

              <li className="flex items-center gap-3">
                <FaGitAlt size={30} />
                <span>
                  Git & versionamento — colaboração, histórico e organização
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FaCodeBranch size={21} />
                <span>
                  Integração de APIs — consumo, validação e fluxo de dados
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FaLinux size={25} />
                <span>Linux — ambiente, deploy e rotina remota</span>
              </li>
            </ul>
            <h6 className="text-sm mt-5 font-medium mb-5 opacity-80">
              <span>
                {" "}
                Experiência prática em projetos em produção e evolução contínua
                de sistemas existentes.
              </span>
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
}
