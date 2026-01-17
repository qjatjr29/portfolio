import { useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/skills/Skills";
import Experience from "./components/Experience";
import ProjectsSection from "./components/projects/ProjectsSection";
import Awards from "./components/Awards";
import EducationSection from "./components/EducationSection";

const SECTION_CLASS =
  "min-h-screen flex flex-col justify-center py-20 sm:py-32 px-6 sm:px-12 md:px-20 lg:px-[133px] max-w-7xl mx-auto w-full";

export default function App() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      const element = document.getElementById(id);
      if (element) {
        // 즉시 실행하면 렌더링 타이밍 차이로 위치가 어긋날 수 있어 100ms 지연
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex justify-center selection:bg-blue-100">
      <div className="w-full max-w-360 bg-white shadow-2xl flex flex-col items-center relative">
        <Navigation />

        <main className="w-full">
          <section id="home" className="min-h-screen">
            <Hero />
          </section>

          <section id="about" className={SECTION_CLASS}>
            <About />
          </section>

          <section
            id="skills"
            className="min-h-screen bg-slate-50/50 w-full flex items-center justify-center"
          >
            <div className="max-w-7xl w-full py-20 sm:py-32 px-6 sm:px-12 md:px-20 lg:px-33.25">
              <Skills />
            </div>
          </section>

          <section id="experience" className={SECTION_CLASS}>
            <Experience />
          </section>

          <section id="projects" className={`${SECTION_CLASS} bg-slate-50/30`}>
            <ProjectsSection />
          </section>

          <section id="awards" className={SECTION_CLASS}>
            <Awards />
          </section>

          <section id="education" className={SECTION_CLASS}>
            <EducationSection />
          </section>
        </main>
      </div>
    </div>
  );
}
