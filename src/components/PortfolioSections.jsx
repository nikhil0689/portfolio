import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Projects from "./Projects";
import Technologies from "./Technologies";

export default function PortfolioSections() {
  return (
    <div>
      <main className="relative mt-28">
        <AboutMe />
        <Projects />
        <Technologies />
        <Contact />
      </main>
    </div>
  );
}
