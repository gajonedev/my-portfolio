"use client";

import { usePathname } from "next/navigation";
import { whatsappMessage } from "@/lib/acquisition";
import WhatsAppIcon from "./WhatsAppIcon";
import { whatsappUrl } from "@/data";

// CTA WhatsApp inline — vert de marque, même gabarit et mêmes états que les
// .btn-* (voir .btn-whatsapp) pour rester à la même hauteur.
export default function WhatsAppCta({
  label = "Discuter sur WhatsApp",
  message,
  className = "",
}: {
  label?: string;
  message?: string;
  className?: string;
}) {
  const pathname = usePathname();
  return (
    <a
      href={whatsappUrl(message || whatsappMessage(pathname))}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-whatsapp ${className}`}
    >
      <WhatsAppIcon className="w-4 h-4" />
      {label}
    </a>
  );
}
