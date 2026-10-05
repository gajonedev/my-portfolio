import Link from "next/link";
import Container from "../Container";
import SectionWrapper from "../layout/SectionWrapper";
import BottomGlow from "./BottomGlow";
import WhatsAppCta from "./WhatsAppCta";

interface FinalCtaProps {
  title: string;
  text: string;
  kicker?: string;
  /** Pre-filled WhatsApp message (defaults to the page-aware one). */
  whatsappMessage?: string;
  whatsappLabel?: string;
  secondary?: { href: string; label: string };
  variant?: "dark" | "light";
  id?: string;
}

// Closing call-to-action shared by every page: one glowing card, the
// WhatsApp action first and a single secondary route.
export default function FinalCta({
  title,
  text,
  kicker = "Votre projet",
  whatsappMessage,
  whatsappLabel = "Discuter sur WhatsApp",
  secondary = { href: "/contact", label: "Décrire mon projet" },
  variant = "dark",
  id,
}: FinalCtaProps) {
  return (
    <SectionWrapper variant={variant} id={id} className="py-16 md:py-24">
      <Container>
        <div className="relative bg-background-soft border border-stroke rounded-[2rem] overflow-hidden">
          <BottomGlow />
          <div className="relative items-center gap-8 grid md:grid-cols-[1fr_auto] p-8 md:p-14">
            <div className="flex flex-col gap-4 max-w-2xl">
              <span className="flex items-center gap-2 font-body font-medium text-primary text-xs uppercase tracking-[0.3em]">
                <span className="inline-block bg-primary rounded-full w-1.5 h-1.5 glow-sm" />
                {kicker}
              </span>
              <h2 className="font-display font-semibold text-foreground text-3xl md:text-4xl text-balance tracking-tight">
                {title}
              </h2>
              <p className="text-foreground-muted leading-relaxed">{text}</p>
            </div>
            <div className="flex md:flex-col flex-wrap gap-3">
              <WhatsAppCta label={whatsappLabel} message={whatsappMessage} />
              <Link href={secondary.href} className="btn-secondary">
                {secondary.label}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
