import SocialLinks from "./SocialLinks";
import "./hero.css";
import bgImage from "../../assets/images/bg-hero.webp";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black"></div>

      {/* Fade bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black"></div>

      {/* Social */}
      <div className="absolute top-8 right-8 z-20">
        <SocialLinks />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        {/* Nome */}
        <p className="text-blue-300 text-lg mb-4 fade-in-up">Olá, eu sou</p>

        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-bold mb-4 drop-shadow-lg fade-in-up delay-1">
          Ricardo Vieira
        </h1>

        {/* Título animado */}
        <p className="typing text-gray-200 text-2xl sm:text-3xl mb-6">
          Desenvolvedor Front-end
        </p>

        {/* Subtítulo forte */}
        <p className="text-gray-200 text-lg sm:text-xl max-w-xl mx-auto mb-6 fade-in-up delay-2">
          Construo interfaces modernas, rápidas e responsivas com React, focadas
          em performance e experiência do usuário.
        </p>

        {/* Stack */}
        <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-200 mb-6 fade-in-up delay-2">
          <span>React</span>
          <span>•</span>
          <span>Next.js</span>
          <span>•</span>
          <span>Tailwind</span>
          <span>•</span>
          <span>TypeScript</span>
        </div>

        {/* Status */}
        <p className="text-green-400 text-sm mb-8 fade-in-up delay-2">
          ● Disponível para oportunidades
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up delay-3">
          <a
            href="#projetos"
            className="bg-blue-700 hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40 hover:shadow-lg"
          >
            Ver Projetos
          </a>

          <a
            href="#contato"
            className="border border-white/30 text-white py-3 px-8 rounded-lg hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all duration-300"
          >
            Falar comigo
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-200 animate-bounce">
        ↓
      </div>
    </section>
  );
}
