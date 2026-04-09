import solar from "../../assets/images/solar.png";
import pet from "../../assets/images/pet&style.png";
import estilo from "../../assets/images/estilolivre.png";
import lc from "../../assets/images/lc-servicos.png";
import cine from "../../assets/images/cinenow.png";
import rei from "../../assets/images/Rei-chapa.png";

const projects = [
  {
    title: "Cálculo de Potencial Solar",
    image: solar,
    description:
      "Simulador de energia solar que calcula placas necessárias, estima economia e gera relatório em PDF.",
    tags: ["HTML", "CSS", "JavaScript", "jsPDF", "API REST"],
    live: "https://ricardo-dev-00.github.io/Energia__Solar/",
    github: "https://github.com/Ricardo-dev-00/Energia__Solar",
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
