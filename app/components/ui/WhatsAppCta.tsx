import WhatsAppIcon from "./WhatsAppIcon";
import { whatsappUrl } from "@/data";

// CTA WhatsApp inline (server-compatible) — vert de marque, aligné sur le
// gabarit des .btn-* (padding/rayon/typo) pour rester à la même hauteur.
export default function WhatsAppCta({
  label = "Discuter sur WhatsApp",
  message,
  className = "",
}: {
  label?: string;
  message?: string;
  className?: string;
}) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex justify-center items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] px-[1.6rem] py-[0.8rem] rounded-full font-semibold text-white text-sm transition-colors ${className}`}
    >
      <WhatsAppIcon className="w-4 h-4" />
      {label}
    </a>
  );
}
