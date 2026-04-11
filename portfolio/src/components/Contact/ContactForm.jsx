import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    if (!data.get("nome") || !data.get("email") || !data.get("mensagem")) {
      setError("Preencha os campos obrigatórios.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/ricardo.dev.of@gmail.com",
        {
          method: "POST",
          body: data,
        },
      );

      if (res.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setError("Erro ao enviar.");
      }
    } catch {
      setError("Erro de conexão.");
    }

    setLoading(false);
  };

  return (
    <div className="relative">
      {/* Glow fundo */}
      <div className="absolute -inset-1 bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 blur-2xl opacity-20 rounded-2xl"></div>

      <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 shadow-2xl">
        {/* SUCESSO */}
        {success && (
          <div className="mb-6 p-4 rounded-lg bg-green-500/20 text-green-300 border border-green-500/30 text-center animate-fadeIn">
            🎉 Mensagem enviada com sucesso!
          </div>
        )}

        {/* ERRO */}
        {error && (
          <div className="mb-6 p-4 rounded-lg bg-red-500/20 text-red-300 border border-red-500/30 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* INPUT GROUP */}
          <div className="grid sm:grid-cols-2 gap-6">
            <Input name="nome" placeholder="Seu nome" />
            <Input name="email" type="email" placeholder="Seu email" />
          </div>

          <Input name="assunto" placeholder="Assunto" />

          <Textarea name="mensagem" placeholder="Sua mensagem..." />

          {/* BOTÃO */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center cursor-pointer gap-2 py-3 rounded-xl font-semibold transition-all duration-300 ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-linear-to-r from-blue-600 to-purple-600 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30"
            }`}
          >
            {loading ? (
              "Enviando..."
            ) : (
              <>
                <FaPaperPlane />
                Enviar Mensagem
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

/* COMPONENTES REUTILIZÁVEIS */

function Input({ name, placeholder, type = "text" }) {
  const inputId = `contact-${name}`;

  return (
    <div className="relative">
      <input
        id={inputId}
        name={name}
        type={type}
        placeholder=" "
        className="peer w-full p-3 rounded-xl bg-white/10 border border-white/10 text-white outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
      <label
        htmlFor={inputId}
        className="absolute left-3 text-gray-400 transition-all 
        peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
        peer-focus:-top-5 peer-focus:text-xs peer-focus:text-blue-400
        -top-2 text-xs"
      >
        {placeholder}
      </label>
    </div>
  );
}

function Textarea({ name, placeholder }) {
  const textareaId = `contact-${name}`;

  return (
    <div className="relative">
      <textarea
        id={textareaId}
        name={name}
        rows="5"
        placeholder=" "
        className="peer w-full p-3 rounded-xl bg-white/10 border border-white/10 text-white outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
      />
      <label
        htmlFor={textareaId}
        className="absolute left-3 text-gray-400 transition-all 
        peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
        peer-focus:-top-5 peer-focus:text-xs peer-focus:text-blue-400
        -top-2 text-xs"
      >
        {placeholder}
      </label>
    </div>
  );
}
