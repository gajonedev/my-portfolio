"use client";

import { usePathname } from "next/navigation";
import { whatsappUrl } from "@/data";
import { whatsappMessage } from "@/lib/acquisition";
import PillButton from "../home/PillButton";
import WhatsAppIcon from "./WhatsAppIcon";

// Light pill of the home page, opening WhatsApp with a message that names
// the page the visitor comes from (unless a message is given).
export default function WhatsAppPill({
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
    <PillButton
      href={whatsappUrl(message || whatsappMessage(pathname))}
      external
      icon={<WhatsAppIcon className="w-4 h-4" />}
      className={className}
    >
      {label}
    </PillButton>
  );
}
