import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500">
      {/* Imagem */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Conteúdo sobreposto */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          {/* Título */}
          <h3 className="text-white text-xl text-center font-bold mb-2">
            {project.title}
          </h3>

          {/* Descrição (aparece no hover) */}
          <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition duration-300 mb-4">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {project.tags.slice(0, 4).map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-white/10 backdrop-blur px-2 py-1 rounded text-white"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Botões */}
          <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition duration-300">
            <a
              href={project.live}
              target="_blank"
              className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-lg transition"
            >
              <FaExternalLinkAlt /> Ver
            </a>

            <a
              href={project.github}
              target="_blank"
              className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm py-2 rounded-lg transition"
            >
              <FaGithub /> Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
