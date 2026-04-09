import ProjectCard from "./ProjectCard";
import projects from "./projectsData";
import { FaGithub, FaArrowRight } from "react-icons/fa";

export default function ProjectsSection() {
  return (
    <section
      id="projetos"
      className="min-h-screen px-4 py-20 flex items-center justify-center"
    >
      <div className="max-w-7xl w-full">
        <h2 className="text-4xl font-bold text-center mb-6">Meus Projetos</h2>

        <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
          Projetos desenvolvidos com foco em prática e aprendizado.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/Ricardo-dev-00"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 px-6 rounded-xl border border-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <FaGithub className="text-lg" />

            <span>Ver mais projetos</span>

            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
