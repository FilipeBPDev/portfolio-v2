import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <Hero />
      <HowItWorks />

      {/* Projetos em destaque */}
      {/* <ProjectsPreview /> */}

      {/* CTA Final */}
      {/* <CTA /> */}
    </main>
  );
}
