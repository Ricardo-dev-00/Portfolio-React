import { motion } from "framer-motion";
import SkillIcon from "./SkillIcon";

export default function SkillCard({ title, skills }) {
  const MotionDiv = motion.div;

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]"
    >
      {/* Glow background */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-xl"></div>

      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white mb-6">{title}</h3>

        <div className="flex flex-wrap gap-4">
          {skills.slice(0, 6).map((skill, index) => (
            <SkillIcon key={index} {...skill} />
          ))}
        </div>
      </div>
    </MotionDiv>
  );
}
