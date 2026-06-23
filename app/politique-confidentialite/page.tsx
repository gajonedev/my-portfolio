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
              Les données personnelles collectées sur ce site sont uniquement
              celles que vous nous fournissez volontairement via le formulaire
              de contact : nom, adresse email, et message. Ces données sont
              utilisées exclusivement pour répondre à vos demandes.
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
              Cookies
            </h2>
            <p className="mt-4 text-foreground-muted text-sm">
              Ce site utilise des cookies techniques nécessaires à son
              fonctionnement. Aucun cookie publicitaire ou de tracking
              n&apos;est utilisé.
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
