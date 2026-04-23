export default function FormTextarea({ name, placeholder }) {
  const textareaId = `contact-${name}`;

  return (
    <div className="relative">
      <textarea
        id={textareaId}
        name={name}
        rows="5"
        autoComplete="off"
        required
        placeholder=" "
        aria-required="true"
        className="peer w-full p-3 rounded-xl bg-white/10 border border-white/10 text-white outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition resize-none"
      />
      <label
        htmlFor={textareaId}
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
