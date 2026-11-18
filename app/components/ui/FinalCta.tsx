import Container from "../Container";
import PillButton from "../home/PillButton";
import SplitWords from "../home/SplitWords";
import WhatsAppPill from "./WhatsAppPill";

interface FinalCtaProps {
  title: string;
  text: string;
  kicker?: string;
  /** Pre-filled WhatsApp message (defaults to the page-aware one). */
  whatsappMessage?: string;
  whatsappLabel?: string;
  secondary?: { href: string; label: string };
  /** Kept for compatibility: the finale is always dark. */
  variant?: "dark" | "light";
  id?: string;
}

// Closing scene shared by every page, as on the home: the horizon comes back
// at the bottom and frames the call to action.
export default function FinalCta({
  title,
  text,
  kicker = "Votre projet",
  whatsappMessage,
  whatsappLabel = "Discuter sur WhatsApp",
  secondary = { href: "/contact", label: "Décrire mon projet" },
  id,
}: FinalCtaProps) {
  return (
    <section id={id} className="home-finale page-finale home-divider section-dark">
      <div aria-hidden="true" className="finale-sky" />
      <div aria-hidden="true" className="finale-beam" data-finale-beam />

      <Container className="z-10 relative flex flex-col items-center gap-7 text-center">
        <p className="ed-kicker" data-anim="fade">
          <span aria-hidden="true" className="ed-kicker-line" />
          {kicker}
        </p>
        <h2
          data-anim="words"
          className="max-w-[18ch] font-display font-medium text-[clamp(2.4rem,6vw,5rem)] text-foreground text-balance leading-[1] tracking-[-0.03em]"
        >
          <SplitWords text={title} />
        </h2>
        <p data-anim="fade" className="max-w-xl text-foreground-muted md:text-lg">
          {text}
        </p>
        <div
          data-anim="fade"
          className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mt-3"
        >
          <WhatsAppPill label={whatsappLabel} message={whatsappMessage} />
          <PillButton href={secondary.href} variant="ghost">
            {secondary.label}
          </PillButton>
        </div>
      </Container>
    </section>
  );
}
