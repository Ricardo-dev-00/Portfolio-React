import { useState } from "react";

import { sendContactForm } from "../services/contactService";
import { validateContactForm } from "../utils/contactFormValidation";

export function useContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

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
        form.reset();
      } else {
        setSuccess(false);
        setError("Erro ao enviar.");
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
