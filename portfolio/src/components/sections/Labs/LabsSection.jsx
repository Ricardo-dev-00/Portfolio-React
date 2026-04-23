import LabCard from "./LabCard";
import { labsData } from "../../../data/labsData";

export default function LabsSection() {
  return (
    <section
      id="labs"
      className="py-24 px-4 bg-gradient-to-b from-black via-slate-900 to-black"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Experimentos & Labs
        </h2>

        <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
          Espaço dedicado a testes, aprendizado contínuo e exploração de novas
          tecnologias.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {labsData.map((lab, index) => (
            <LabCard key={index} {...lab} />
          ))}
        </div>
      </div>
    </section>
  );
}
