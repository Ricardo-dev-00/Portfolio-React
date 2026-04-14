export default function FooterLinks() {
  const links = [
    { name: "Início", link: "#" },
    { name: "Sobre", link: "#sobre" },
    { name: "Projetos", link: "#projetos" },
    { name: "Contato", link: "#contato" },
  ];

  return (
    <div>
      <h3 className="text-white text-xl font-bold mb-4">Navegação</h3>

      <ul className="space-y-2">
        {links.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              className="text-gray-200 hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm transition"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
