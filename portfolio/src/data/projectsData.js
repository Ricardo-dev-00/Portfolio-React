import CasaInteligente from "../assets/images/casa-inteligent-blog.webp";
import ValorCar from "../assets/images/ValorCar.webp";
import anotacoes from "../assets/images/anotacoes.webp";
import lc from "../assets/images/lc-servicos.webp";
import cine from "../assets/images/cinenow.webp";
import rei from "../assets/images/Rei-chapa.webp";
import GoViagens from "../assets/images/GoViagens.webp";

const projects = [
  {
    title: "Casa Inteligente Blog",
    image: CasaInteligente,
    description:
      "Projeto de conteúdo com foco em casa, organização, limpeza, receitas e ofertas, construído com Next.js App Router, painel CMS próprio e integração com Supabase.",
    metrics: [
      { label: "Arquitetura", value: "Router", icon: "code" },
      { label: "Backoffice", value: "CMS", icon: "chart" },
      { label: "Dados", value: "Supabase", icon: "stack" },
    ],
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
    featured: true,
    badge: "Consulta FIPE",
    image: ValorCar,
    description:
      "Quem já tentou saber o valor de um carro pela tabela FIPE sabe que o processo oficial é confuso. O ValorCar resolve isso: uma interface limpa onde o usuário seleciona marca, modelo e ano e recebe o valor de referência em segundos. Consome a API FIPE em cascata com loading states por etapa, tratamento de erros e layout responsivo pensado para mobile.",
    metrics: [
      { label: "Consulta", value: "Tabela FIPE", icon: "search" },
      { label: "Interface", value: "Responsiva", icon: "eye" },
      { label: "Stack", value: "React + TS", icon: "code" },
    ],
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
    metrics: [
      { label: "Modo", value: "Offline", icon: "eye" },
      { label: "Entrega", value: "PWA", icon: "stack" },
      { label: "Recursos", value: "Manifest", icon: "code" },
    ],
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
    metrics: [
      { label: "Projeto", value: "Cliente real", icon: "chart" },
      { label: "Experiência", value: "Objetiva", icon: "eye" },
      { label: "Entrega", value: "Responsiva", icon: "code" },
    ],
    tags: ["HTML", "CSS", "JavaScript", "Responsivo"],
    live: "https://ricardo-dev-00.github.io/Projeto-LC_SERVI-OS/index.html",
    github: "https://github.com/Ricardo-dev-00/Projeto-LC_SERVI-OS",
  },

  {
    title: "Go Viagens",
    image: GoViagens,
    description:
      "Landing page de viagens com foco em interface visual, organização de componentes por seção, responsividade e animações de entrada leves.",
    metrics: [
      { label: "Layout", value: "Visual", icon: "eye" },
      { label: "Deploy", value: "Automático", icon: "stack" },
      { label: "Stack", value: "React + Vite", icon: "code" },
    ],
    tags: ["React", "Vite", "Tailwind", "JavaScript", "GitHub Actions"],
    live: "https://ricardo-dev-00.github.io/Go-Viagens/",
    github: "https://github.com/Ricardo-dev-00/Go-Viagens",
  },

  {
    title: "CineNow",
    featured: true,
    badge: "Catálogo de filmes",
    image: cine,
    description:
      "O CineNow nasceu da necessidade de ter um lugar simples para descobrir o que está em cartaz sem navegar por sites pesados. Consome a API do TMDb para listar filmes em tempo real, com páginas de detalhes, sistema de rotas com React Router, requisições via Axios e uma interface visual que prioriza a imagem dos filmes. TypeScript garantiu consistência nos dados da API do início ao fim.",
    metrics: [
      { label: "Catálogo", value: "Em cartaz", icon: "search" },
      { label: "Integração", value: "TMDb API", icon: "stack" },
      { label: "Stack", value: "React + TS", icon: "code" },
    ],
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
    featured: true,
    badge: "Pedidos + Pix",
    image: rei,
    description:
      "Desenvolvido para uma lanchonete real, este sistema permite que clientes montem o pedido pelo navegador e o estabelecimento receba a notificação instantânea via Telegram Bot. O pagamento é gerado como QR Code Pix diretamente na tela. Front-end em React com Zustand para o carrinho, back-end em Node.js com Express para orquestrar o bot e gerar o Pix. Um projeto de ponta a ponta com uso real.",
    metrics: [
      { label: "Pagamento", value: "Pix", icon: "chart" },
      { label: "Automação", value: "Telegram", icon: "stack" },
      { label: "Arquitetura", value: "Full stack", icon: "code" },
    ],
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
    live: "https://ricardo-dev-00.github.io/AutomaLanches/",
    github: "https://github.com/Ricardo-dev-00/AutomaLanches",
  },
];

export default projects;
