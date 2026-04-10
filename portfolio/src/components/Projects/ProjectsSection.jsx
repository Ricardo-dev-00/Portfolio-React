import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projects from "./projectsData";

export default function ProjectsSection() {
  return (
    <section className="relative py-24 px-6 bg-black">
      {/* Glow de fundo */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Meus Projetos
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Projetos reais que demonstram minhas habilidades em desenvolvimento
            front-end moderno.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* BOTÃO FINAL */}
        <div className="flex justify-center mt-16">
          <a
            href="https://github.com/Ricardo-dev-00"
            target="_blank"
            className="group flex items-center gap-3 px-8 py-4 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30"
          >
            Ver mais no GitHub
            <span className="group-hover:translate-x-1 transition">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
