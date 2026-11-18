import { whatsappUrl } from "@/data";
import { contactHref, whatsappMessage } from "@/lib/acquisition";
import Container from "../Container";
import WhatsAppIcon from "../ui/WhatsAppIcon";
import PillButton from "./PillButton";
import SplitWords from "./SplitWords";

// Closing scene: the horizon of the hero comes back and frames the call to
// action, so the page ends where it started.
export default function HomeFinale() {
  return (
    <section id="contact" className="home-finale home-divider section-dark" data-finale>
      <div aria-hidden="true" className="finale-sky" />
      <div aria-hidden="true" className="finale-beam" data-finale-beam />

      <Container className="z-10 relative flex flex-col items-center gap-8 text-center">
        <p className="ed-kicker" data-anim="fade">
          <span className="font-mono text-foreground-subtle">(05)</span>
          <span aria-hidden="true" className="ed-kicker-line" />
          Votre projet
        </p>
        <h2
          data-anim="words"
          className="max-w-[14ch] font-display font-medium text-[clamp(2.8rem,8vw,7rem)] text-foreground leading-[0.98] tracking-[-0.03em]"
        >
          <SplitWords text="Parlez-moi de votre idée." accent={["idée"]} />
        </h2>
        <p data-anim="fade" className="max-w-xl text-foreground-muted md:text-lg">
          Vous avez une idée ou un problème à résoudre&nbsp;? Parlons-en.
        </p>
        <div
          data-anim="fade"
          className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mt-4"
        >
          <PillButton
            href={whatsappUrl(whatsappMessage("/"))}
            external
            icon={<WhatsAppIcon className="w-4 h-4" />}
          >
            Discuter sur WhatsApp
          </PillButton>
          <PillButton href={contactHref(undefined, "/")} variant="ghost">
            Décrire mon projet
          </PillButton>
        </div>
      </Container>
    </section>
  );
}
