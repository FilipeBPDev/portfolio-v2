import Contact from "../components/Home/Contact";
import Hero from "../components/Home/Hero";
import HowItWorks from "../components/Home/HowItWorks";
import Projects from "../components/Home/Projects";
import WhyWorkWithMe from "../components/Home/WhyWorkWithMe";

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
