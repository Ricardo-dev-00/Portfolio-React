export function validateContactForm(formData) {
  const requiredFields = ["nome", "email", "mensagem"];

  for (const field of requiredFields) {
    if (!formData.get(field)) {
      return "Preencha os campos obrigatórios.";
    }
  }

  return "";
}
