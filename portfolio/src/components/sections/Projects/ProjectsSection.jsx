import ProjectCard from "./ProjectCard";
import projects from "../../../data/projectsData";

export default function ProjectsSection() {
  const sortedProjects = [...projects].sort((leftProject, rightProject) => {
    if (leftProject.featured === rightProject.featured) {
      return 0;
    }

    return leftProject.featured ? -1 : 1;
  });

  return (
    <section
      className="relative overflow-hidden bg-black px-6 py-24"
      id="projetos"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(14,165,233,0.16),transparent_30%),radial-gradient(circle_at_84%_24%,rgba(217,70,239,0.14),transparent_28%),radial-gradient(circle_at_74%_82%,rgba(59,130,246,0.14),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black_35%,transparent_90%)]" />

      <div className="absolute -left-24 top-28 size-80 rounded-full bg-cyan-500/15 blur-[120px]" />
      <div className="absolute -right-20 bottom-12 size-80 rounded-full bg-fuchsia-500/15 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <span className="size-2 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.75)]" />
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-gray-300">
              O que eu construí
            </span>
          </div>

          <h2 className="mb-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
              Projetos que
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-500 bg-clip-text text-transparent">
              falam por mim
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
            Cada projeto aqui foi pensado, desenvolvido e publicado por mim — do
            layout ao deploy.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-8">
          {sortedProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <a
            href="https://github.com/Ricardo-dev-00"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl px-8 py-4 font-semibold text-white transition-transform duration-300 hover:scale-[1.03]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-fuchsia-600" />
            <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r from-cyan-400 via-sky-500 to-fuchsia-500" />
            <span className="relative">Ver mais no GitHub</span>
            <span className="relative transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
