export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-purple-300">
        Projetos
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* CARD FUTURO */}
        <div className="bg-slate-900/40 rounded-xl p-6 border border-white/10 hover:border-purple-500 transition">
          <h3 className="text-xl font-semibold mb-2">Projeto 1</h3>
          <p className="text-white/70">Descrição do projeto...</p>
        </div>
      </div>
    </section>
  );
}
