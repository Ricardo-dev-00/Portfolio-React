import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactSection() {
  return (
    <section
      id="contato"
      className="min-h-screen px-4 py-20 flex items-center justify-center bg-slate-950"
    >
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-center">
          Entre em Contato
        </h2>

        <p className="text-gray-400 text-center text-lg mb-12 max-w-2xl mx-auto">
          Tem um projeto em mente ou quer bater um papo? Vamos conversar!
        </p>

        {/* Formulário */}
        <ContactForm />

        {/* Infos */}
        <ContactInfo />
      </div>
    </section>
  );
}
