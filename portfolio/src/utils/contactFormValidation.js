export function validateContactForm(formData) {
  const requiredFields = ["nome", "email", "mensagem"];

  for (const field of requiredFields) {
    const value = formData.get(field);
    if (!String(value ?? "").trim()) {
      return "Preencha os campos obrigatórios.";
    }
  }

  const email = String(formData.get("email") ?? "").trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Informe um e-mail válido.";
  }

  return "";
}
