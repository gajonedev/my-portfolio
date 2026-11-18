import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import PageHeader from "../components/PageHeader";
import LegalDocument from "../components/ui/LegalDocument";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  alternates: { canonical: `${siteConfig.url}/politique-confidentialite` },
};

const email = (
  <a href="mailto:gajonedev@gmail.com">gajonedev@gmail.com</a>
);

export default async function PolitiqueConfidentialitePage() {
  return (
    <>
      <PageHeader
        kicker="Informations légales"
        title="Politique de confidentialité"
        description="Comment je traite les informations que vous me confiez."
      />
      <LegalDocument
        sections={[
          {
            id: "collecte",
            title: "Collecte des données",
            content: (
              <p>
                Le formulaire de contact recueille les informations que vous
                fournissez volontairement : nom, adresse email, type de projet
                et message. Des données techniques limitées peuvent aussi être
                traitées pour sécuriser le formulaire et mesurer le bon
                fonctionnement du site.
              </p>
            ),
          },
          {
            id: "utilisation",
            title: "Utilisation des données",
            content: (
              <>
                <p>J’utilise vos données personnelles pour :</p>
                <ul>
                  <li>Répondre à vos demandes de contact</li>
                  <li>Vous envoyer des devis ou propositions commerciales</li>
                  <li>Assurer le suivi de nos échanges</li>
                  <li>Protéger le formulaire contre les envois automatisés</li>
                  <li>
                    Mesurer de façon agrégée la fréquentation et les
                    performances du site
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: "conservation",
            title: "Conservation des données",
            content: (
              <p>
                Vos données sont conservées pendant une durée maximale de 3 ans
                à compter de notre dernier échange, sauf obligation légale de
                conservation plus longue.
              </p>
            ),
          },
          {
            id: "droits",
            title: "Vos droits",
            content: (
              <p>
                Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès,
                de rectification, de suppression et de portabilité de vos
                données. Pour exercer ces droits, contactez-moi à {email}.
              </p>
            ),
          },
          {
            id: "services-techniques",
            title: "Services techniques utilisés",
            content: (
              <p>
                Le site utilise Vercel pour l&apos;hébergement, la mesure
                d&apos;audience et le suivi des performances, ainsi que
                Cloudflare Turnstile pour protéger le formulaire contre les
                robots. Le service d&apos;envoi d&apos;emails reçoit les
                informations nécessaires à la transmission de votre demande.
                Aucun outil publicitaire n&apos;est utilisé.
              </p>
            ),
          },
          {
            id: "destinataires",
            title: "Destinataires et transferts",
            content: (
              <p>
                Les données sont accessibles uniquement à l&apos;éditeur du site
                et aux prestataires techniques nécessaires à l&apos;hébergement,
                à la sécurité et à l&apos;envoi du message. Certains de ces
                prestataires peuvent traiter des données hors du Bénin ; leurs
                propres garanties contractuelles et politiques de
                confidentialité s&apos;appliquent alors.
              </p>
            ),
          },
          {
            id: "contact",
            title: "Contact",
            content: (
              <p>
                Pour toute question concernant cette politique de
                confidentialité, vous pouvez me contacter à l&apos;adresse :{" "}
                {email}
              </p>
            ),
          },
        ]}
      />
    </>
  );
}
