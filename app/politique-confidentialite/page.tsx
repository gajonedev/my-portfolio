import Container from "../components/Container";
import PageHeader from "../components/PageHeader";

export default async function PolitiqueConfidentialitePage() {
  return (
    <>
      <PageHeader
        title="Politique de confidentialité"
        description="Comment nous protégeons vos données personnelles."
      />
      <main className="py-16">
        <Container className="prose-invert max-w-3xl prose">
          <div className="bg-card p-8 border border-stroke rounded-3xl">
            <h2 className="font-semibold text-foreground text-xl">
              Collecte des données
            </h2>
            <p className="mt-4 text-foreground-muted text-sm">
              Le formulaire de contact recueille les informations que vous
              fournissez volontairement : nom, adresse email, type de projet et
              message. Des données techniques limitées peuvent aussi être
              traitées pour sécuriser le formulaire et mesurer le bon
              fonctionnement du site.
            </p>

            <h2 className="mt-8 font-semibold text-foreground text-xl">
              Utilisation des données
            </h2>
            <p className="mt-4 text-foreground-muted text-sm">
              Vos données personnelles sont utilisées pour :
            </p>
            <ul className="mt-2 pl-5 text-foreground-muted text-sm list-disc">
              <li>Répondre à vos demandes de contact</li>
              <li>Vous envoyer des devis ou propositions commerciales</li>
              <li>Assurer le suivi de nos échanges</li>
              <li>Protéger le formulaire contre les envois automatisés</li>
              <li>Mesurer de façon agrégée la fréquentation et les performances du site</li>
            </ul>

            <h2 className="mt-8 font-semibold text-foreground text-xl">
              Conservation des données
            </h2>
            <p className="mt-4 text-foreground-muted text-sm">
              Vos données sont conservées pendant une durée maximale de 3 ans à
              compter de notre dernier échange, sauf obligation légale de
              conservation plus longue.
            </p>

            <h2 className="mt-8 font-semibold text-foreground text-xl">
              Vos droits
            </h2>
            <p className="mt-4 text-foreground-muted text-sm">
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès,
              de rectification, de suppression et de portabilité de vos données.
              Pour exercer ces droits, contactez-nous à gajonedev@gmail.com.
            </p>

            <h2 className="mt-8 font-semibold text-foreground text-xl">
              Services techniques utilisés
            </h2>
            <p className="mt-4 text-foreground-muted text-sm">
              Le site utilise Vercel pour l&apos;hébergement, la mesure d&apos;audience
              et le suivi des performances, ainsi que Cloudflare Turnstile pour
              protéger le formulaire contre les robots. Le service d&apos;envoi
              d&apos;emails reçoit les informations nécessaires à la transmission
              de votre demande. Aucun outil publicitaire n&apos;est utilisé.
            </p>

            <h2 className="mt-8 font-semibold text-foreground text-xl">
              Destinataires et transferts
            </h2>
            <p className="mt-4 text-foreground-muted text-sm">
              Les données sont accessibles uniquement à l&apos;éditeur du site et
              aux prestataires techniques nécessaires à l&apos;hébergement, à la
              sécurité et à l&apos;envoi du message. Certains de ces prestataires
              peuvent traiter des données hors du Bénin ; leurs propres
              garanties contractuelles et politiques de confidentialité
              s&apos;appliquent alors.
            </p>

            <h2 className="mt-8 font-semibold text-foreground text-xl">
              Contact
            </h2>
            <p className="mt-4 text-foreground-muted text-sm">
              Pour toute question concernant cette politique de confidentialité,
              vous pouvez nous contacter à l&apos;adresse : gajonedev@gmail.com
            </p>
          </div>
        </Container>
      </main>
    </>
  );
}
