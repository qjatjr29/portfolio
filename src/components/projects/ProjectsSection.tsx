import { PROJECTS } from "../constants/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="flex flex-col gap-12 items-center w-full max-w-6xl mx-auto py-20 px-6"
      data-name="Projects"
    >
      <header className="w-full text-center space-y-4">
        <div>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0f172b]">
            🧑🏻‍💻 Projects
          </h2>
          <div className="h-1 w-25 bg-blue-500 mx-auto rounded-full" />
        </div>
      </header>

      {/* 프로젝트 리스트 */}
      <div className="flex flex-col gap-10 w-full items-center">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
