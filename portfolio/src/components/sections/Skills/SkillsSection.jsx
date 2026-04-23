import SkillCard from "./SkillCard";
import { skillsData } from "../../../data/skillsData";

export default function SkillsSection() {
  return (
    <section
      id="habilidades"
      className="py-24 px-4 bg-gradient-to-b from-black via-slate-900 to-black"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Habilidades
        </h2>

        <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
          Tecnologias que utilizo para construir interfaces modernas, rápidas e
          com ótima experiência de usuário.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((item, index) => (
            <SkillCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
