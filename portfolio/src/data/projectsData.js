import solar from "../assets/images/casa-inteligent-blog.webp";
import pet from "../assets/images/Go-Viagens.webp";
import estilo from "../assets/images/estilolivre.webp";
import lc from "../assets/images/lc-servicos.webp";
import cine from "../assets/images/cinenow.webp";
import rei from "../assets/images/Rei-chapa.webp";

const projects = [
  {
    title: "Casa Inteligente Blog",
    image: solar,
    description:
      "Projeto de conteúdo com foco em casa, organização, limpeza, receitas e ofertas, construído com Next.js App Router, painel CMS próprio e integração com Supabase.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node",
      "ESLint",
      "Tailwind",
      "Next.js",
      "Supabase",
    ],
    live: "https://casainteligente.social.br/",
    github: "https://github.com/Ricardo-dev-00/casa-inteligente-blog",
  },

  {
    title: "Go Viagens",
    image: pet,
    description:
      "Este projeto foi desenvolvido por mim como forma de aprofundar meus estudos em frontend, principalmente na criacao de landing pages com React.",
    tags: [
      "HTML",
      "CSS",
      "Tailwind",
      "JavaScript",
      "React",
      "Vite",
      "Responsivo",
    ],
    live: "https://ricardo-dev-00.github.io/Go-Viagens/",
    github: "https://github.com/Ricardo-dev-00/Go-Viagens",
  },

  {
    title: "Estilo Livre",
    image: estilo,
    description:
      "Landing page responsiva para barbearia com design elegante e foco em experiência do usuário.",
    tags: ["HTML", "CSS", "Bootstrap"],
    live: "https://ricardo-dev-00.github.io/Estilo_Livre/",
    github: "https://github.com/Ricardo-dev-00/Estilo_Livre",
  },

  {
    title: "LC Serviços",
    image: lc,
    description:
      "Site institucional desenvolvido para cliente real, com apresentação de serviços e contato.",
    tags: ["HTML", "CSS", "JavaScript", "Responsivo"],
    live: "https://ricardo-dev-00.github.io/Projeto-LC_SERVI-OS/index.html",
    github: "https://github.com/Ricardo-dev-00/Projeto-LC_SERVI-OS",
  },

  {
    title: "CineNow",
    image: cine,
    description:
      "Aplicação web para descobrir filmes em cartaz, integrada com API TMDb e interface moderna.",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind",
      "React Router",
      "Axios",
      "API",
    ],
    live: "https://ricardo-dev-00.github.io/CineNow/",
    github: "https://github.com/Ricardo-dev-00/CineNow",
  },

  {
    title: "Sistema de Pedidos Online",
    image: rei,
    description:
      "Sistema profissional de pedidos online com integração Telegram Bot e pagamento via Pix.",
    tags: [
      "React",
      "Vite",
      "Tailwind",
      "Zustand",
      "Node.js",
      "Express",
      "Telegram Bot",
      "Pix",
    ],
    live: "https://automalanches-production.up.railway.app/",
    github: "https://github.com/Ricardo-dev-00/AutomaLanches",
  },
];

export default projects;
