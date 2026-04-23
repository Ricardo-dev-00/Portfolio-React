import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
      <div className="bg-white/5 p-6 rounded-xl border border-white/10">
        <FaEnvelope
          aria-hidden="true"
          focusable="false"
          className="text-blue-300 text-2xl mx-auto mb-2"
        />
        <a
          href="mailto:ricardo.dev.of@gmail.com"
          className="text-gray-100 underline-offset-4 hover:text-blue-300 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-sm"
        >
          ricardo.dev.of@gmail.com
        </a>
      </div>

      <div className="bg-white/5 p-6 rounded-xl border border-white/10">
        <FaWhatsapp
          aria-hidden="true"
          focusable="false"
          className="text-green-300 text-2xl mx-auto mb-2"
        />
        <a
          href="https://wa.me/5598985881871"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Conversar com Ricardo Vieira no WhatsApp"
          className="text-gray-100 underline-offset-4 hover:text-green-300 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-sm"
        >
          (98) 98588-1871
        </a>
      </div>

      <div className="bg-white/5 p-6 rounded-xl border border-white/10">
        <FaMapMarkerAlt
          aria-hidden="true"
          focusable="false"
          className="text-red-300 text-2xl mx-auto mb-2"
        />
        <p className="text-gray-100">São Luís - MA</p>
      </div>
    </div>
  );
}
