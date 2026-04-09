import SocialLinks from "./SocialLinks";
import "./hero.css";

export default function HeroSection() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-black via-slate-900 to-blue-900">
      {/* Social */}
      <div className="absolute top-8 right-8 z-20">
        <SocialLinks />
      </div>

      {/* GRID futurista */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[40px_40px]" />

      {/* GLOW azul */}
      <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 top-10 left-10"></div>

      {/* GLOW roxo */}
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 bottom-10 right-10"></div>

      {/* Conteúdo */}
      <div className="z-10 text-center px-4">
        <p className="text-blue-400 text-lg mb-4 fade-in-up">Olá, eu sou</p>

        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-bold mb-6 fade-in-up delay-1">
          Ricardo Vieira
        </h1>

        <p className="typing text-gray-300 text-2xl sm:text-3xl mb-10">
          Desenvolvedor Front-end
        </p>

        <a
          href="#contato"
          className="fade-in-up delay-3 smooth-hover bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40 hover:shadow-lg"
        >
          Entre em Contato
        </a>
      </div>
    </div>
  );
}
