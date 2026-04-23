export default function FormInput({ name, placeholder, type = "text" }) {
  const inputId = `contact-${name}`;
  const autocompleteMap = {
    nome: "name",
    email: "email",
    assunto: "on",
  };
  const isRequired = name === "nome" || name === "email";

  return (
    <div className="relative">
      <input
        id={inputId}
        name={name}
        type={type}
        autoComplete={autocompleteMap[name] ?? "on"}
        required={isRequired}
        placeholder=" "
        aria-required={isRequired}
        className="peer w-full p-3 rounded-xl bg-white/10 border border-white/10 text-white outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
      />
      <label
        htmlFor={inputId}
        className="absolute left-3 text-gray-300 transition-all 
        peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
        peer-focus:-top-5 peer-focus:text-xs peer-focus:text-blue-400
        -top-2 text-xs"
      >
        {placeholder}
      </label>
    </div>
  );
}
