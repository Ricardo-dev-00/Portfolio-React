import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project }) {
  const liveLabel = `Abrir projeto ${project.title}`;
  const sourceLabel = `Abrir código-fonte do projeto ${project.title} no GitHub`;

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col h-full">
      {/* IMAGEM */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-80"></div>
      </div>

      {/* CONTEÚDO */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>

        <p className="text-gray-400 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300 border border-white/10 backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* BOTÕES */}
        <div className="flex gap-3 mt-auto pt-4">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={liveLabel}
            className="flex-1 flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 cursor-pointer text-white text-sm font-semibold py-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all duration-300 hover:scale-105"
          >
            <FaExternalLinkAlt aria-hidden="true" focusable="false" />
            Ver
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={sourceLabel}
            className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 cursor-pointer text-white text-sm font-semibold py-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all duration-300 hover:scale-105"
          >
            <FaGithub aria-hidden="true" focusable="false" />
            Código
          </a>
        </div>
      </div>
    </div>
  );
}
