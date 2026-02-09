import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        description="Parlons de votre prochain site ou produit digital."
      />
      <main className="py-16">
        <Container className="gap-10 grid lg:grid-cols-[0.6fr_0.4fr]">
          <form className="gap-4 grid bg-card p-6 border border-stroke rounded-3xl">
            <div className="gap-4 grid md:grid-cols-2">
              <input type="text" placeholder="Nom complet" className="input" />
              <input type="email" placeholder="Email" className="input" />
            </div>
            <input type="text" placeholder="Type de projet" className="input" />
            <textarea
              placeholder="Décrivez votre besoin"
              rows={5}
              className="textarea"
            />
            <button type="button" className="w-fit btn-primary">
              Envoyer la demande
            </button>
          </form>
          <div className="flex flex-col gap-6 bg-card p-6 border border-stroke rounded-3xl">
            <div>
              <p className="text-foreground-muted/60 text-sm uppercase tracking-[0.25em]">
                Coordonnées
              </p>
              <div className="flex flex-col gap-3 mt-4">
                <a
                  href="mailto:gajonedev@gmail.com"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  gajonedev@gmail.com
                </a>
                <a
                  href="tel:+22901468973222"
                  className="flex items-center gap-3 text-foreground-muted hover:text-foreground transition"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  +229 01 46 89 73 22
                </a>
                <div className="flex items-center gap-3 text-foreground-muted">
                  <MapPin className="w-5 h-5 text-primary" />
                  Cotonou, Bénin
                </div>
              </div>
            </div>
            <div className="bg-background p-4 border border-stroke rounded-2xl">
              <div className="flex items-center gap-2 text-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <p className="font-medium">Planning</p>
              </div>
              <p className="mt-2 text-foreground-muted text-sm">
                Prise de brief sous 48h.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-foreground-muted/60 text-xs">
              <span>Cotonou, Bénin</span>
              <span>•</span>
              <span>Remote / Worldwide</span>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
