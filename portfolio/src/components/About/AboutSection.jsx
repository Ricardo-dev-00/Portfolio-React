import ProfileImage from "./ProfileImagem";
import { FaDownload } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-black py-20"
    >
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-16 text-center">
          Sobre Mim
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Foto */}
          <ProfileImage />

          {/* Texto */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Quem sou eu?
            </h3>

            <p className="text-slate-700 dark:text-gray-300 text-lg mb-6">
              Sou Ricardo Vieira, desenvolvedor front-end de São Luís–MA, em
              busca da minha primeira oportunidade na área.
            </p>

            <p className="text-slate-700 dark:text-gray-300 text-lg mb-6">
              Curso Engenharia Front-end na EBAC e evoluo constantemente por
              meio de projetos práticos.
            </p>

            <p className="text-slate-700 dark:text-gray-300 text-lg mb-10">
              Trabalho com HTML, CSS, JavaScript, React, Next.js e Tailwind CSS.
            </p>

            {/* Botão */}
            <a
              href="/cv-ricardo_vieira.pdf"
              download
              className="inline-flex items-center cursor-pointer gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/30 hover:shadow-lg"
            >
              <FaDownload className="text-sm" />
              Baixar Currículo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
