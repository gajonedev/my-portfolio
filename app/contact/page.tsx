import type { Metadata } from "next";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ui/ContactForm";
import WhatsAppCta from "../components/ui/WhatsAppCta";
import { Mail, Phone, MapPin, Clock } from "@/lib/icons";
import { contactInfo, siteConfig } from "@/data";

const url = `${siteConfig.url}/contact`;

export const metadata: Metadata = {
  title: "Contact — Votre devis gratuit sous 24h",
  description:
    "Un projet de site ou d'application ? Décrivez-le en deux lignes : je reviens vers vous avec un devis clair sous 24h. Disponible aussi sur WhatsApp.",
  alternates: { canonical: url },
  openGraph: {
    title: "Contactez un développeur web et mobile au Bénin",
    description:
      "Décrivez votre projet en deux lignes : devis clair sous 24h. Disponible aussi sur WhatsApp.",
    url,
    type: "website",
    locale: "fr_BJ",
  },
};

export default async function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        description="Parlons de votre prochain site web ou application mobile."
      />
      <main className="py-16">
        <Container className="gap-10 grid lg:grid-cols-[0.6fr_0.4fr]">
          <div className="flex flex-col gap-6 bg-card p-6 border border-stroke rounded-3xl">
            <div>
              <p className="text-foreground-muted text-sm uppercase tracking-[0.25em]">
                Coordonnées
              </p>
              <div className="flex flex-col gap-3 mt-4">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-foreground hover:text-primary transition"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  {contactInfo.email}
                </a>
                <a
                  href={`tel:${contactInfo.phoneRaw}`}
                  className="flex items-center gap-3 text-foreground-muted hover:text-foreground transition"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  {contactInfo.phone}
                </a>
                <div className="flex items-center gap-3 text-foreground-muted">
                  <MapPin className="w-5 h-5 text-primary" />
                  {contactInfo.location}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <WhatsAppCta label="Discuter sur WhatsApp" className="w-full" />
              <p className="text-foreground-subtle text-xs text-center">
                Le canal le plus direct pour un échange rapide.
              </p>
            </div>
            <div className="bg-background p-4 border border-stroke rounded-2xl">
              <div className="flex items-center gap-2 text-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <p className="font-medium">Planning</p>
              </div>
              <p className="mt-2 text-foreground-muted text-sm">
                {contactInfo.responseTime}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-foreground-muted text-xs">
              <span>{contactInfo.location}</span>
              <span>•</span>
              <span>{contactInfo.availability}</span>
            </div>
          </div>
          <ContactForm className="bg-card p-6 border border-stroke rounded-3xl" />
        </Container>
      </main>
    </>
  );
}
