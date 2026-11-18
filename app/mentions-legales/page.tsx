import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import PageHeader from "../components/PageHeader";
import LegalDocument, { LegalFacts } from "../components/ui/LegalDocument";

export const metadata: Metadata = { title: "Mentions légales", alternates: { canonical: `${siteConfig.url}/mentions-legales` } };

export default async function MentionsLegalesPage() {
  return (
    <>
      <PageHeader
        kicker="Informations légales"
        title="Mentions légales"
        description="Informations légales concernant ce site."
      />
      <LegalDocument
        sections={[
          {
            id: "editeur",
            title: "Éditeur du site",
            content: (
              <LegalFacts
                items={[
                  ["Nom", "Néhémie Gandonou"],
                  ["Statut", "Développeur web indépendant"],
                  ["Adresse", "Cotonou, Bénin"],
                  [
                    "Email",
                    <a key="email" href="mailto:gajonedev@gmail.com">
                      gajonedev@gmail.com
                    </a>,
                  ],
                  [
                    "Téléphone",
                    <a key="phone" href="tel:+2290146897322">
                      +229 01 46 89 73 22
                    </a>,
                  ],
                ]}
              />
            ),
          },
          {
            id: "hebergement",
            title: "Hébergement",
            content: (
              <LegalFacts
                items={[
                  ["Hébergeur", "Vercel Inc."],
                  ["Adresse", "340 S Lemon Ave #4133, Walnut, CA 91789, USA"],
                ]}
              />
            ),
          },
          {
            id: "propriete-intellectuelle",
            title: "Propriété intellectuelle",
            content: (
              <p>
                L&apos;ensemble de ce site relève de la législation sur le droit
                d&apos;auteur et la propriété intellectuelle. Tous les droits de
                reproduction sont réservés, y compris pour les documents
                téléchargeables et les représentations iconographiques et
                photographiques.
              </p>
            ),
          },
          {
            id: "responsabilite",
            title: "Responsabilité",
            content: (
              <p>
                Les informations contenues sur ce site sont aussi précises que
                possible. Toutefois, elles sont susceptibles d&apos;évoluer.
                L&apos;éditeur ne pourra être tenu responsable des dommages
                directs ou indirects résultant de l&apos;utilisation de ce site.
              </p>
            ),
          },
        ]}
      />
    </>
  );
}
