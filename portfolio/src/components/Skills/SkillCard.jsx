import {
  FaLaptopCode,
  FaReact,
  FaPalette,
  FaToolbox,
  FaCheckCircle,
  FaGraduationCap,
} from "react-icons/fa";

const icons = {
  frontend: <FaLaptopCode className="text-blue-600 text-2xl" />,
  react: <FaReact className="text-cyan-500 text-2xl" />,
  ui: <FaPalette className="text-pink-500 text-2xl" />,
  tools: <FaToolbox className="text-amber-500 text-2xl" />,
  practices: <FaCheckCircle className="text-green-500 text-2xl" />,
  learning: <FaGraduationCap className="text-purple-500 text-2xl" />,
};

export default function SkillCard({ type, title, children }) {
  return (
    <div className="bg-white dark:bg-black/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition">
      <div className="flex items-center gap-3 mb-4">
        {icons[type]}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          {title}
        </h3>
      </div>

      <ul className="space-y-3 text-slate-700 dark:text-gray-300 text-sm leading-relaxed">
        {children}
      </ul>
    </div>
  );
}
