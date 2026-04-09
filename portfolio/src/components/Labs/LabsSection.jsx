import LabCard from "./LabCard";
import labs from "./labsData";

export default function LabsSection() {
  return (
    <section
      id="labs"
      className="min-h-screen px-4 py-20 flex items-center justify-center bg-black"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl font-bold text-center text-white mb-6">
          Experimentos & Labs
        </h2>

        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Espaço para explorar novas tecnologias e experimentações.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {labs.map((lab, index) => (
            <LabCard key={index} lab={lab} />
          ))}
        </div>
      </div>
    </section>
  );
}
