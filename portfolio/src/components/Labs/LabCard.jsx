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
  return (
    <motion.div
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
        <Icon className="text-white text-2xl" />
      </div>

      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>

      <p className="text-gray-400 text-sm mb-6">{description}</p>

      {/* Botões */}
      <div className="relative z-10 flex gap-3">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm transition hover:scale-105 cursor-pointer"
        >
          <FaExternalLinkAlt /> Ver
        </a>

        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg text-sm transition hover:scale-105 cursor-pointer"
        >
          <FaGithub /> Código
        </a>
      </div>
    </motion.div>
  );
}
