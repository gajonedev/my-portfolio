import Container from "../components/Container";
import PageHeader from "../components/PageHeader";

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHeader
        title="Mentions légales"
        description="Informations légales concernant ce site."
      />
      <main className="py-16">
        <Container className="prose-invert max-w-3xl prose">
          <div className="bg-card p-8 border border-stroke rounded-3xl">
            <h2 className="font-semibold text-foreground text-xl">
              Éditeur du site
            </h2>
            <div className="space-y-2 mt-4 text-foreground-muted text-sm">
              <p>
                <strong className="text-foreground">Nom :</strong> Néhémie
                Gandonou
              </p>
              <p>
                <strong className="text-foreground">Statut :</strong>{" "}
                Développeur web indépendant
              </p>
              <p>
                <strong className="text-foreground">Adresse :</strong> Cotonou,
                Bénin
              </p>
              <p>
                <strong className="text-foreground">Email :</strong>{" "}
                gajonedev@gmail.com
              </p>
              <p>
                <strong className="text-foreground">Téléphone :</strong> +229 01
                46 89 73 22
              </p>
            </div>

            <h2 className="mt-8 font-semibold text-foreground text-xl">
              Hébergement
            </h2>
            <div className="space-y-2 mt-4 text-foreground-muted text-sm">
              <p>
                <strong className="text-foreground">Hébergeur :</strong> Vercel
                Inc.
              </p>
              <p>
                <strong className="text-foreground">Adresse :</strong> 340 S
                Lemon Ave #4133, Walnut, CA 91789, USA
              </p>
            </div>

            <h2 className="mt-8 font-semibold text-foreground text-xl">
              Propriété intellectuelle
            </h2>
            <p className="mt-4 text-foreground-muted text-sm">
              L&apos;ensemble de ce site relève de la législation sur le droit
              d&apos;auteur et la propriété intellectuelle. Tous les droits de
              reproduction sont réservés, y compris pour les documents
              téléchargeables et les représentations iconographiques et
              photographiques.
            </p>

            <h2 className="mt-8 font-semibold text-foreground text-xl">
              Responsabilité
            </h2>
            <p className="mt-4 text-foreground-muted text-sm">
              Les informations contenues sur ce site sont aussi précises que
              possible. Toutefois, elles sont susceptibles d&apos;évoluer.
              L&apos;éditeur ne pourra être tenu responsable des dommages
              directs ou indirects résultant de l&apos;utilisation de ce site.
            </p>
          </div>
        </Container>
      </main>
    </>
  );
}
