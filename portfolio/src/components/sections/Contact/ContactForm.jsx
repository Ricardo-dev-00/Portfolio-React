import { FaPaperPlane } from "react-icons/fa";

import FormInput from "../../ui/FormInput";
import FormTextarea from "../../ui/FormTextarea";
import { useContactForm } from "../../../hooks/useContactForm";

export default function ContactForm() {
  const { loading, success, error, handleSubmit } = useContactForm();

  return (
    <div className="relative">
      {/* Glow fundo */}
      <div className="absolute -inset-1 bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 blur-2xl opacity-20 rounded-2xl"></div>

      <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 shadow-2xl">
        {/* SUCESSO */}
        {success && (
          <div
            role="status"
            aria-live="polite"
            className="mb-6 p-4 rounded-lg bg-green-500/20 text-green-200 border border-green-500/30 text-center animate-fadeIn"
          >
            🎉 Mensagem enviada com sucesso!
          </div>
        )}

        {/* ERRO */}
        {error && (
          <div
            id="contact-form-error"
            role="alert"
            aria-live="assertive"
            className="mb-6 p-4 rounded-lg bg-red-500/20 text-red-200 border border-red-500/30 text-center"
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* INPUT GROUP */}
          <div className="grid sm:grid-cols-2 gap-6">
            <FormInput name="nome" placeholder="Seu nome" />
            <FormInput name="email" type="email" placeholder="Seu email" />
          </div>

          <FormInput name="assunto" placeholder="Assunto" />

          <FormTextarea name="mensagem" placeholder="Sua mensagem..." />

          {/* BOTÃO */}
          <button
            type="submit"
            disabled={loading}
            aria-busy={loading}
            className={`w-full flex items-center justify-center cursor-pointer gap-2 py-3 rounded-xl font-semibold transition-all duration-300 ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-linear-to-r from-blue-700 to-purple-700 text-white hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            }`}
          >
            {loading ? (
              "Enviando..."
            ) : (
              <>
                <FaPaperPlane aria-hidden="true" focusable="false" />
                Enviar Mensagem
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
