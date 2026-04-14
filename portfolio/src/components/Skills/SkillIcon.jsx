import { motion } from "framer-motion";

export default function SkillIcon({ icon: Icon, name, color, glow }) {
  const MotionDiv = motion.div;
  const SkillSvg = Icon;

  return (
    <MotionDiv
      whileHover={{ scale: 1.15 }}
      className={`group relative flex items-center justify-center w-14 h-14 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 shadow-md ${glow}`}
    >
      <SkillSvg className={`text-2xl ${color} group-hover:text-white`} />

      {/* Tooltip */}
      <span className="absolute -bottom-8 text-xs text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
        {name}
      </span>
    </MotionDiv>
  );
}
