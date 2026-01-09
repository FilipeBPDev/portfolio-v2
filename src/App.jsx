import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Background from "./components/Background";

export default function App() {
  return (
    <>
      {/* Fundo global */}
      <Background />

      {/* Conteúdo */}
      <div className="relative text-white">
        <Navbar />

        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
