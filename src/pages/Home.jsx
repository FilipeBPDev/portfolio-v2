import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import WhyWorkWithMe from "../components/WhyWorkWithMe";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <Hero />
      <HowItWorks />
      <WhyWorkWithMe />

      {/* Projetos em destaque */}
      {/* <ProjectsPreview /> */}

      {/* CTA Final */}
      {/* <CTA /> */}
    </main>
  );
}
