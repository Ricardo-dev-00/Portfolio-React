import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      <a
        href="https://www.linkedin.com/in/ricardo-vieira-dev/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir perfil do Ricardo Vieira no LinkedIn"
        title="LinkedIn do Ricardo Vieira"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white text-2xl hover:border-blue-300 hover:text-blue-200 transition transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        <FaLinkedin aria-hidden="true" focusable="false" />
        <span className="sr-only">LinkedIn</span>
      </a>

      <a
        href="https://github.com/Ricardo-dev-00"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir perfil do Ricardo Vieira no GitHub"
        title="GitHub do Ricardo Vieira"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white text-2xl hover:border-gray-200 hover:text-gray-100 transition transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        <FaGithub aria-hidden="true" focusable="false" />
        <span className="sr-only">GitHub</span>
      </a>
    </div>
  );
}
