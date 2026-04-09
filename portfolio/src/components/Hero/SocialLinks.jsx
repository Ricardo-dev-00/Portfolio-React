import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      <a
        href="https://www.linkedin.com/in/ricardo-vieira-dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-2xl hover:text-blue-400 transition transform hover:scale-110"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://github.com/Ricardo-dev-00"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-2xl hover:text-gray-400 transition transform hover:scale-110"
      >
        <FaGithub />
      </a>
    </div>
  );
}
