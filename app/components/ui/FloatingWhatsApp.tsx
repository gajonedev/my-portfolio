"use client";

import { usePathname } from "next/navigation";
import { whatsappMessage } from "@/lib/acquisition";
import { whatsappUrl } from "@/data";
import WhatsAppIcon from "./WhatsAppIcon";

// CTA WhatsApp flottant, présent sur toutes les pages — le canal qui "close"
// le mieux localement. Faible friction : un tap ouvre une conversation pré-remplie.
// Entrée, survol et appui animés en CSS (.floating-whatsapp, globals.css).
export default function FloatingWhatsApp() {
  const pathname = usePathname();
  return (
    <a
      href={whatsappUrl(whatsappMessage(pathname))}
      target="_blank"
      rel="noopener noreferrer"
      data-floating-whatsapp
      aria-label="Discuter de mon projet sur WhatsApp"
      className="right-4 sm:right-6 bottom-4 sm:bottom-6 z-50 fixed flex items-center gap-2 bg-[#0e7a3d] shadow-[0_8px_30px_rgba(37,211,102,0.45)] px-4 py-3 rounded-full font-body font-semibold text-white text-sm floating-whatsapp"
    >
      <WhatsAppIcon className="w-6 h-6" />
      <span className="hidden sm:inline">Discuter sur WhatsApp</span>
    </a>
  );
}
