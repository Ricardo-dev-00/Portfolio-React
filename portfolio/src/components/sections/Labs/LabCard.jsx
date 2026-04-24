import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function LabCard({
  title,
  description,
  icon: Icon,
  gradient,
  link,
  github,
}) {
  const MotionDiv = motion.div;
  const LabIcon = Icon;
  const showActions = Boolean(link && github);
  const demoLabel = `Abrir laboratório ${title}`;
  const sourceLabel = `Abrir código do laboratório ${title} no GitHub`;

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-xl"></div>

      {/* Icon com gradiente */}
      <div
        className={`w-14 h-14 mx-auto flex items-center justify-center rounded-xl mb-4 bg-gradient-to-br ${gradient}`}
      >
        <LabIcon className="text-white text-2xl" />
      </div>

      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>

      <p className={`text-gray-400 text-sm ${showActions ? "mb-6" : "mb-0"}`}>
        {description}
      </p>

      {showActions && (
        <div className="relative z-10 flex gap-3">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={demoLabel}
            className="flex-1 flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-lg text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black transition hover:scale-105 cursor-pointer"
          >
            <FaExternalLinkAlt aria-hidden="true" focusable="false" /> Ver
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={sourceLabel}
            className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black transition hover:scale-105 cursor-pointer"
          >
            <FaGithub aria-hidden="true" focusable="false" /> Código
          </a>
        </div>
      )}
    </MotionDiv>
  );
}
