import FooterLinks from "./FooterLinks";
import FooterSocialLinks from "./FooterSocialLinks";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* Glow topo */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* SOBRE */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              Ricardo Vieira
            </h3>
            <p className="text-gray-200 leading-relaxed">
              Desenvolvedor Front-end focado em criar interfaces modernas,
              responsivas e com ótima experiência do usuário.
            </p>
          </div>

          {/* LINKS */}
          <FooterLinks />

          {/* SOCIAL */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Conecte-se</h3>

            <FooterSocialLinks />
          </div>
        </div>

        {/* DIVISOR */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Ricardo Vieira. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
