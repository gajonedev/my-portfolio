"use client";

import { m } from "framer-motion";
import { whatsappUrl } from "@/data";
import WhatsAppIcon from "./WhatsAppIcon";

// CTA WhatsApp flottant, présent sur toutes les pages — le canal qui "close"
// le mieux localement. Faible friction : un tap ouvre une conversation pré-remplie.
export default function FloatingWhatsApp() {
  return (
    <m.a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter de mon projet sur WhatsApp"
      className="right-4 bottom-4 sm:right-6 sm:bottom-6 z-50 fixed flex items-center gap-2 bg-[#25D366] shadow-[0_8px_30px_rgba(37,211,102,0.45)] px-4 py-3 rounded-full font-body font-semibold text-white text-sm"
      initial={{ opacity: 0, scale: 0.8, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <WhatsAppIcon className="w-6 h-6" />
      <span className="hidden sm:inline">Discuter sur WhatsApp</span>
    </m.a>
  );
}
