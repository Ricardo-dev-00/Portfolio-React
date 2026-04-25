import CasaInteligente from "../assets/images/casa-inteligent-blog.webp";
import ValorCar from "../assets/images/ValorCar.webp";
import anotacoes from "../assets/images/anotacoes.webp";
import lc from "../assets/images/lc-servicos.webp";
import cine from "../assets/images/cinenow.webp";
import rei from "../assets/images/Rei-chapa.webp";

const projects = [
  {
    title: "Casa Inteligente Blog",
    image: CasaInteligente,
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
    title: "ValorCar",
    image: ValorCar,
    description:
      "Aplicacao web para consulta de valor FIPE com experiencia simples, rapida e orientada ao usuario final.",
    tags: [
      "HTML",
      "Tailwind",
      "TypeScript",
      "React",
      "Vite",
      "Responsivo",
      "API",
      "ESLint",
    ],
    live: "https://ricardo-dev-00.github.io/ValorCar/",
    github: "https://github.com/Ricardo-dev-00/ValorCar",
  },

  {
    title: "Anotações PWA",
    image: anotacoes,
    description:
      "Anotações PWA é uma aplicação web com experiência de app, criada para registrar atividades diárias de forma simples, rápida e com suporte offline.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "PWA",
      "Responsivo",
      "github-pages",
      "Web App Manifest",
      "Service Worker",
    ],
    live: "https://ricardo-dev-00.github.io/Diario-de-Bordo_PWA/",
    github: "https://github.com/Ricardo-dev-00/Diario-de-Bordo_PWA",
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
