import { FaGithub, FaExternalLinkAlt, FaFlask } from "react-icons/fa";
import {
  FaSpotify,
  FaLayerGroup,
  FaPlug,
  FaFilm,
  FaMagic,
} from "react-icons/fa";

const icons = {
  magic: <FaMagic />,
  layers: <FaLayerGroup />,
  plug: <FaPlug />,
  spotify: <FaSpotify />,
  film: <FaFilm />,
  flask: <FaFlask />,
};

export default function LabCard({ lab }) {
  return (
    <div className="group bg-slate-900 border flex flex-col justify-center border-slate-800 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
      {/* Ícone */}
      <div className="text-3xl text-blue-400 mb-4">{icons[lab.icon]}</div>

      {/* Título */}
      <h3 className="text-lg font-bold text-white mb-2">{lab.title}</h3>

      {/* Descrição */}
      <p className="text-gray-400 text-sm mb-4">{lab.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {lab.tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs bg-white/10 px-2 py-1 rounded text-white"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Botões */}
      <div className="flex gap-2 mt-auto">
        <a
          href={lab.live}
          target="_blank"
          className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded"
        >
          <FaExternalLinkAlt /> Ver
        </a>

        <a
          href={lab.github}
          target="_blank"
          className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm py-2 rounded"
        >
          <FaGithub /> Code
        </a>
      </div>
    </div>
  );
}
