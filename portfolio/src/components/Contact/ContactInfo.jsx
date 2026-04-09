import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
      <div className="bg-white/5 p-6 rounded-xl border border-white/10">
        <FaEnvelope className="text-blue-400 text-2xl mx-auto mb-2" />
        <p className="text-gray-300">ricardo.dev.of@gmail.com</p>
      </div>

      <div className="bg-white/5 p-6 rounded-xl border border-white/10">
        <FaWhatsapp className="text-green-400 text-2xl mx-auto mb-2" />
        <p className="text-gray-300">(98) 98588-1871</p>
      </div>

      <div className="bg-white/5 p-6 rounded-xl border border-white/10">
        <FaMapMarkerAlt className="text-red-400 text-2xl mx-auto mb-2" />
        <p className="text-gray-300">São Luís - MA</p>
      </div>
    </div>
  );
}
