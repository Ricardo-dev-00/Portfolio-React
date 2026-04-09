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
              className="text-gray-400 hover:text-blue-400 transition"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
