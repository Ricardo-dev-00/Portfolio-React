import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      <a
        href="https://www.linkedin.com/in/ricardo-vieira-dev/"
        target="_blank"
        className="group w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 hover:bg-blue-600 transition-all duration-300 hover:scale-110"
      >
        <FaLinkedin className="text-gray-300 group-hover:text-white" />
      </a>

      <a
        href="https://github.com/Ricardo-dev-00"
        target="_blank"
        className="group w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
      >
        <FaGithub className="text-gray-300 group-hover:text-white" />
      </a>

      <a
        href="mailto:ricardo.dev.of@gmail.com"
        className="group w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 hover:bg-blue-500 transition-all duration-300 hover:scale-110"
      >
        <FaEnvelope className="text-gray-300 group-hover:text-white" />
      </a>
    </div>
  );
}
