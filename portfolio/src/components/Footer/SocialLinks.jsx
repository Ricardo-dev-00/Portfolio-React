import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      <a
        href="https://www.linkedin.com/in/ricardo-vieira-dev/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir perfil do Ricardo Vieira no LinkedIn"
        title="LinkedIn do Ricardo Vieira"
        className="group w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all duration-300 hover:scale-110"
      >
        <FaLinkedin
          aria-hidden="true"
          focusable="false"
          className="text-gray-100 group-hover:text-white"
        />
        <span className="sr-only">LinkedIn</span>
      </a>

      <a
        href="https://github.com/Ricardo-dev-00"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir perfil do Ricardo Vieira no GitHub"
        title="GitHub do Ricardo Vieira"
        className="group w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all duration-300 hover:scale-110"
      >
        <FaGithub
          aria-hidden="true"
          focusable="false"
          className="text-gray-100 group-hover:text-white"
        />
        <span className="sr-only">GitHub</span>
      </a>

      <a
        href="mailto:ricardo.dev.of@gmail.com"
        aria-label="Enviar e-mail para Ricardo Vieira"
        title="Enviar e-mail para Ricardo Vieira"
        className="group w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all duration-300 hover:scale-110"
      >
        <FaEnvelope
          aria-hidden="true"
          focusable="false"
          className="text-gray-100 group-hover:text-white"
        />
        <span className="sr-only">E-mail</span>
      </a>
    </div>
  );
}
