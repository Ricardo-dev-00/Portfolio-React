import { footerLinksData } from "../../data/footerLinksData";

export default function FooterLinks() {
  return (
    <div>
      <h3 className="text-white text-xl font-bold mb-4">Navegação</h3>

      <ul className="space-y-2">
        {footerLinksData.map((item) => (
          <li key={item.link}>
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
