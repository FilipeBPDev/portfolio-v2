import { useEffect, useRef } from "react";

export default function Contact() {
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

  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden scroll-mt-24"
    >
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left - Copy */}
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
              Vamos conversar sobre sua ideia?
            </h2>

            <p className="mt-8 text-lg text-white/70">
              Se você chegou até aqui, provavelmente valoriza clareza e quer
              entender bem antes de decidir.
            </p>

            <p className="mt-4 text-white/70">
              A conversa é simples: você explica o contexto, eu ajudo a
              organizar as ideias e avaliar os caminhos possíveis.
            </p>

            <ul
              className="mt-8 space-y-3 text-white/60 text-sm"
              style={{ color: "var(--color-text-soft)" }}
            >
              <li>• Contato direto comigo</li>
              <li>• Conversa sem compromisso</li>
              <li>• Clareza antes de qualquer proposta</li>
            </ul>

            {/* Secondary CTA */}
            <div className="mt-10">
              <a
                href="https://wa.me/SEUNUMERO"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition"
                style={{ color: "var(--color-button-text)" }}
              >
                Prefere conversar pelo WhatsApp? →
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div
            className="form-glass w-full rounded-2xl p-8 md:p-10 
                       border border-white/10 
                       bg-white/5 backdrop-blur-xl"
            style={{
              border: "1px solid var(--color-border-soft)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <form className="space-y-6">
              <div>
                <label
                  className="block text-sm text-white/60 mb-2"
                  style={{ color: "var(--color-button-text)" }}
                >
                  Seu nome
                </label>
                <input
                  type="text"
                  placeholder="Como posso te chamar?"
                  className="w-full px-4 py-3 rounded-xl 
                             bg-black/30 border border-white/10 
                             text-white placeholder-white/30 
                             focus:outline-none focus:border-purple-400/40"
                />
              </div>

              <div>
                <label
                  className="block text-sm text-white/60 mb-2"
                  style={{ color: "var(--color-button-text)" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Para manter contato"
                  className="w-full px-4 py-3 rounded-xl 
                             bg-black/30 border border-white/10 
                             text-white placeholder-white/30 
                             focus:outline-none focus:border-purple-400/40"
                />
              </div>

              <div>
                <label
                  className="block text-sm text-white/60 mb-2"
                  style={{ color: "var(--color-button-text)" }}
                >
                  Conte um pouco sobre o que você precisa
                </label>
                <textarea
                  rows="4"
                  placeholder="Conte um pouco sobre o que você precisa"
                  className="w-full px-4 py-3 rounded-xl 
                             bg-black/30 border border-white/10 
                             text-white placeholder-white/30 
                             focus:outline-none focus:border-purple-400/40 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-6 px-7 py-3 rounded-xl 
                           bg-purple-600 hover:bg-purple-700 transition 
                           text-white font-medium"
              >
                Iniciar conversa
              </button>

              <p className="mt-4 text-xs text-white/40 text-center">
                Respondo pessoalmente. Normalmente em até 24h.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
