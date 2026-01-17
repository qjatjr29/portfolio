import { Github, ExternalLink, PlayCircle, FileText } from "lucide-react";
import type { Project } from "../constants/projects";

const LinkIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "github":
      return <Github size={16} />;
    case "video":
      return <PlayCircle size={16} />;
    case "notion":
      return <FileText size={16} />;
    default:
      return <ExternalLink size={16} />;
  }
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="relative w-full rounded-2xl bg-linear-to-br from-slate-50 to-blue-50 border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="p-6 sm:p-8 flex flex-col gap-8">
        {/* Header */}
        <header className="flex gap-4 items-start">
          <div
            className="shrink-0 size-16 rounded-2xl flex items-center justify-center text-3xl shadow-inner"
            style={{
              backgroundImage: `linear-gradient(135deg, ${project.colors.from}, ${project.colors.to})`,
            }}
          >
            {project.emoji}
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              {project.title}
            </h3>
            <p className="text-slate-700 font-medium leading-relaxed">
              {project.description}
            </p>
            {project.goal && (
              <p className="text-sm text-slate-500 italic">“{project.goal}”</p>
            )}
          </div>
        </header>

        {/* Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-600 border-y border-slate-100 py-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-400">Period</span>{" "}
            {project.period}
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-400">Role</span>{" "}
            {project.role}
          </div>
        </div>

        {/* Tech Stack */}
        <section className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wider">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="space-y-4">
          <div className="space-y-5">
            {project.achievements.map((item, idx) => (
              <div
                key={idx}
                className="border-l-2 border-blue-400 pl-4 space-y-2"
              >
                <p className="font-medium text-slate-800 leading-tight">
                  {item.title}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  • {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Links */}
        <footer className="flex flex-wrap gap-3 mt-2">
          {project.links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white border border-blue-200 rounded-xl text-sm font-medium text-blue-600 hover:bg-blue-50 transition-colors"
            >
              <LinkIcon type={link.type} />
              {link.label}
            </a>
          ))}
        </footer>
      </div>
    </article>
  );
}
