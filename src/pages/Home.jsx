import Contact from "../components/Contact";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Projects from "../components/Projects";
import WhyWorkWithMe from "../components/WhyWorkWithMe";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <Hero />
      <HowItWorks />
      <WhyWorkWithMe />
      <Projects />
      <Contact />

      {/* Projetos em destaque */}
      {/* <ProjectsPreview /> */}

      {/* CTA Final */}
      {/* <CTA /> */}
    </main>
  );
}
