import { validService, whatsappMessage } from "@/lib/acquisition";
import type { Metadata } from "next";
import Container from "../components/Container";
import SectionWrapper from "../components/layout/SectionWrapper";
import PageHeader from "../components/PageHeader";
import BottomGlow from "../components/ui/BottomGlow";
import ContactForm from "../components/ui/ContactForm";
import WhatsAppCta from "../components/ui/WhatsAppCta";
import { Mail, Phone, MapPin, Clock } from "@/lib/icons";
import { contactInfo, siteConfig } from "@/data";

const url = `${siteConfig.url}/contact`;

export const metadata: Metadata = {
  title: "Contact | Parlons de votre produit",
  description:
    "Un projet de plateforme web ou d’application mobile ? Je vous réponds sous 24h pour en discuter, puis je prépare un devis gratuit. Disponible sur WhatsApp.",
  alternates: { canonical: url },
  openGraph: {
    title: "Contactez un développeur web et mobile au Bénin",
    description:
      "Parlez-moi de votre plateforme web ou de votre application mobile. Je vous réponds dans les meilleurs délais pour en discuter.",
    url,
    type: "website",
    locale: "fr_BJ",
  },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string; source?: string }>;
}) {
  const query = await searchParams;
  const selected = validService(
    typeof query.service === "string" ? query.service : undefined,
  );
  const source =
    typeof query.source === "string" &&
    query.source.startsWith("/") &&
    !query.source.startsWith("//")
      ? query.source.split("?")[0].slice(0, 200)
      : undefined;
  return (
    <>
      <PageHeader
        kicker="Contact"
        title="Parlons de votre projet"
        description="Racontez-moi ce que vous voulez créer ou simplifier dans votre activité. Je vous réponds sous 24h pour en discuter et vous proposer la suite."
      />
      <SectionWrapper variant="dark" className="py-16 md:py-20">
        <Container className="items-start gap-8 grid lg:grid-cols-[1.5fr_1fr]">
          <div className="relative bg-card border border-stroke rounded-[2rem] overflow-hidden">
            <BottomGlow />
            <ContactForm
              initialService={selected}
              initialSource={source}
              className="relative p-6 md:p-8"
            />
          </div>

          <aside className="lg:top-28 lg:sticky flex flex-col gap-4">
            <div className="flex flex-col gap-4 p-6 card">
              <h2 className="font-semibold text-foreground text-lg">
                Vous préférez écrire directement ?
              </h2>
              <p className="text-foreground-muted text-sm leading-relaxed">
                WhatsApp reste le canal le plus rapide pour un premier échange.
              </p>
              <WhatsAppCta
                message={whatsappMessage(source || "/contact", selected)}
                label="Discuter sur WhatsApp"
                className="w-full"
              />
            </div>

            <ul className="flex flex-col divide-y divide-stroke card">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="group flex items-center gap-3 p-4 text-sm"
                >
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground group-hover:text-primary transition-colors">
                    {contactInfo.email}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phoneRaw}`}
                  className="group flex items-center gap-3 p-4 text-sm"
                >
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground group-hover:text-primary transition-colors">
                    {contactInfo.phone}
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-3 p-4 text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-foreground-muted">
                  {contactInfo.location} · {contactInfo.availability}
                </span>
              </li>
              <li className="flex items-center gap-3 p-4 text-sm">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span className="text-foreground-muted">
                  {contactInfo.responseTime}
                </span>
              </li>
            </ul>
          </aside>
        </Container>
      </SectionWrapper>
    </>
  );
}
