import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const profiles = {
  linkedin: "https://www.linkedin.com/in/ricardo-vieira-dev/",
  github: "https://github.com/Ricardo-dev-00",
  email: "mailto:ricardo.dev.of@gmail.com",
};

const variantClasses = {
  hero: {
    wrapper: "flex items-center gap-4",
    button:
      "flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white text-2xl transition transform hover:scale-110",
    linkedin:
      "hover:border-blue-300 hover:text-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
    github:
      "hover:border-gray-200 hover:text-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black",
    email:
      "hover:border-blue-300 hover:text-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
    icon: "",
  },
  footer: {
    wrapper: "flex gap-4",
    button:
      "group h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 transition-all duration-300 hover:scale-110",
    linkedin:
      "hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
    github:
      "hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black",
    email:
      "hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
    icon: "text-gray-100 group-hover:text-white",
  },
};

function SocialAnchor({
  href,
  ariaLabel,
  title,
  className,
  children,
  isExternal,
}) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      title={title}
      className={className}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

export default function SocialLinks({ variant = "footer", showEmail = true }) {
  const selected = variantClasses[variant] || variantClasses.footer;

  return (
    <div className={selected.wrapper}>
      <SocialAnchor
        href={profiles.linkedin}
        isExternal
        ariaLabel="Abrir perfil do Ricardo Vieira no LinkedIn"
        title="LinkedIn do Ricardo Vieira"
        className={`${selected.button} ${selected.linkedin}`}
      >
        <FaLinkedin
          aria-hidden="true"
          focusable="false"
          className={selected.icon}
        />
        <span className="sr-only">LinkedIn</span>
      </SocialAnchor>

      <SocialAnchor
        href={profiles.github}
        isExternal
        ariaLabel="Abrir perfil do Ricardo Vieira no GitHub"
        title="GitHub do Ricardo Vieira"
        className={`${selected.button} ${selected.github}`}
      >
        <FaGithub
          aria-hidden="true"
          focusable="false"
          className={selected.icon}
        />
        <span className="sr-only">GitHub</span>
      </SocialAnchor>

      {showEmail && (
        <SocialAnchor
          href={profiles.email}
          ariaLabel="Enviar e-mail para Ricardo Vieira"
          title="Enviar e-mail para Ricardo Vieira"
          className={`${selected.button} ${selected.email}`}
        >
          <FaEnvelope
            aria-hidden="true"
            focusable="false"
            className={selected.icon}
          />
          <span className="sr-only">E-mail</span>
        </SocialAnchor>
      )}
    </div>
  );
}
