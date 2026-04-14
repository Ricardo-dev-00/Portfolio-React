import ProfileImage from "./ProfileImagem";
import { FaDownload, FaCode, FaRocket, FaLaptopCode } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative py-24 px-6 bg-gray-100 dark:bg-black overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Sobre Mim
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Foto */}
          <ProfileImage />

          {/* Conteúdo */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Desenvolvedor focado em criar experiências digitais modernas
            </h3>

            <p className="text-slate-700 dark:text-gray-300 text-lg mb-6">
              Sou Ricardo Vieira, desenvolvedor front-end de São Luís–MA,
              apaixonado por tecnologia e em busca da minha primeira
              oportunidade profissional na área.
            </p>

            <p className="text-slate-700 dark:text-gray-300 text-lg mb-6">
              Atualmente estudo Engenharia Front-end na EBAC e evoluo
              constantemente através de projetos práticos, focando em
              performance, responsividade e boas práticas de desenvolvimento.
            </p>

            <p className="text-slate-700 dark:text-gray-300 text-lg mb-8">
              Trabalho com React, Next.js e Tailwind CSS, criando interfaces
              modernas, acessíveis e com foco total na experiência do usuário.
            </p>

            {/* HIGHLIGHTS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-4 text-center backdrop-blur">
                <FaCode className="mx-auto text-blue-500 text-xl mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Código limpo
                </p>
              </div>

              <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-4 text-center backdrop-blur">
                <FaLaptopCode className="mx-auto text-purple-500 text-xl mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  UI moderna
                </p>
              </div>

              <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-4 text-center backdrop-blur">
                <FaRocket className="mx-auto text-green-500 text-xl mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Alta performance
                </p>
              </div>
            </div>

            {/* BOTÕES */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/cv-ricardo_vieira.pdf"
                download
                className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black transition-all duration-300 hover:scale-105 hover:shadow-blue-500/30 hover:shadow-lg"
              >
                <FaDownload />
                Baixar Currículo
              </a>

              <a
                href="#projetos"
                className="flex items-center justify-center gap-2 border border-slate-400 dark:border-white/30 text-slate-900 dark:text-white py-3 px-6 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100 dark:focus-visible:ring-white/80 dark:focus-visible:ring-offset-black transition-all"
              >
                Ver Projetos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
