import solar from "../../assets/images/casa-inteligent-blog.webp";
import pet from "../../assets/images/pet&style.webp";
import estilo from "../../assets/images/estilolivre.webp";
import lc from "../../assets/images/lc-servicos.webp";
import cine from "../../assets/images/cinenow.webp";
import rei from "../../assets/images/Rei-chapa.webp";

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
    title: "Pet&Style",
    image: pet,
    description:
      "Loja fictícia com produtos para pets, design moderno e responsivo com navegação intuitiva.",
    tags: ["HTML", "CSS", "Tailwind", "JavaScript"],
    live: "https://ricardo-dev-00.github.io/Pet-Style/#produtos",
    github: "https://github.com/Ricardo-dev-00/Pet-Style",
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
