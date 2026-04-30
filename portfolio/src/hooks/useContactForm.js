import { useState } from "react";

import { sendContactForm } from "../services/contactService";
import { validateContactForm } from "../utils/contactFormValidation";

export function useContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSuccess(false);

    const form = event.target;
    const data = new FormData(form);
    const validationError = validateContactForm(data);

    if (validationError) {
      setSuccess(false);
      setError(validationError);
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await sendContactForm(data);

      if (response.ok) {
        setSuccess(true);
        setError("");
        form.reset();
      } else {
        let errorMessage = "Erro ao enviar.";
        try {
          const body = await response.json();
          if (body?.message) {
            errorMessage = body.message;
          }
        } catch {
          // Mantém mensagem padrão quando o backend não retornar JSON.
        }
        setSuccess(false);
        setError(errorMessage);
      }
    } catch {
      setSuccess(false);
      setError("Erro de conexão.");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    success,
    error,
    handleSubmit,
  };
}
