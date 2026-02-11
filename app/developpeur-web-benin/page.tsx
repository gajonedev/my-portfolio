import type { Metadata } from "next";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import Link from "next/link";
import {
  MapPin,
  Globe,
  ShoppingCart,
  Smartphone,
  Bot,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Développeur Web & Mobile au Bénin — Cotonou, Porto-Novo, Lokossa",
  description:
    "Recherchez un développeur web freelance au Bénin ? Création de sites internet, e-commerce, applications mobiles à Cotonou, Porto-Novo, Lokossa, Parakou. Devis gratuit.",
  keywords: [
    "développeur web Bénin",
    "développeur Cotonou",
    "création site internet Bénin",
    "développeur freelance Porto-Novo",
    "agence web Cotonou",
    "développeur mobile Bénin",
    "e-commerce Bénin",
    "développeur Lokossa",
    "développeur Parakou",
    "site web Abomey-Calavi",
  ],
  alternates: {
    canonical: "https://gajone.dev/developpeur-web-benin",
  },
  openGraph: {
    title: "Développeur Web & Mobile au Bénin",
    description:
      "Votre développeur freelance pour sites web, e-commerce et apps mobiles à Cotonou, Porto-Novo, Lokossa et partout au Bénin.",
    url: "https://gajone.dev/developpeur-web-benin",
  },
};

const cities = [
  {
    name: "Cotonou",
    description: "Capitale économique du Bénin",
    available: true,
  },
  {
    name: "Porto-Novo",
    description: "Capitale administrative",
    available: true,
  },
  {
    name: "Lokossa",
    description: "Chef-lieu du Mono",
    available: true,
  },
  {
    name: "Parakou",
    description: "Capitale du Nord",
    available: true,
  },
  {
    name: "Abomey-Calavi",
    description: "Ville universitaire",
    available: true,
  },
  {
    name: "Bohicon",
    description: "Carrefour du Sud",
    available: true,
  },
];

const services = [
  {
    icon: Globe,
    title: "Sites vitrines",
    description:
      "Sites internet professionnels pour entreprises béninoises, optimisés pour Google.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Boutiques en ligne avec paiement mobile money, FedaPay, et livraison locale.",
  },
  {
    icon: Smartphone,
    title: "Applications mobiles",
    description:
      "Apps iOS et Android pour startups et entreprises au Bénin.",
  },
  {
    icon: Bot,
    title: "Automatisation",
    description:
      "Chatbots WhatsApp, automatisation des processus métier et intégrations API.",
  },
];

const advantages = [
  "Développeur local, disponible en présentiel à Cotonou",
  "Connaissance du marché béninois et des moyens de paiement locaux",
  "Intégration FedaPay, MTN MoMo, Moov Money",
  "Support en français et accompagnement personnalisé",
  "Prix adaptés au marché africain",
  "Délais respectés et communication transparente",
];

export default function DeveloppeurWebBeninPage() {
  return (
    <>
      <PageHeader
        title="Développeur Web & Mobile au Bénin"
        description="Votre partenaire digital à Cotonou pour créer des sites web, e-commerce et applications mobiles performants."
      />

      <main className="py-16">
        <Container className="gap-16 grid">
          {/* Introduction SEO */}
          <section className="max-w-3xl">
            <h2 className="font-semibold text-foreground text-2xl">
              Votre développeur web freelance au Bénin
            </h2>
            <p className="mt-4 text-foreground-muted leading-relaxed">
              Je suis <strong>Néhémie Gandonou</strong>, développeur web et
              mobile freelance basé à <strong>Cotonou, Bénin</strong>. Je
              propose des services de création de sites internet, boutiques
              e-commerce, applications mobiles et automatisation pour les
              entreprises, startups et entrepreneurs au Bénin et en Afrique de
              l&apos;Ouest.
            </p>
            <p className="mt-4 text-foreground-muted leading-relaxed">
              Que vous soyez à <strong>Cotonou</strong>,{" "}
              <strong>Porto-Novo</strong>, <strong>Lokossa</strong>,{" "}
              <strong>Parakou</strong> ou ailleurs au Bénin, je peux vous
              accompagner dans votre projet digital avec un suivi personnalisé
              et des solutions adaptées au marché local.
            </p>
          </section>

          {/* Services */}
          <section>
            <h2 className="font-semibold text-foreground text-xl mb-6">
              Services disponibles au Bénin
            </h2>
            <div className="gap-4 grid md:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="flex gap-4 bg-card p-5 border border-stroke rounded-2xl"
                  >
                    <div className="flex justify-center items-center bg-primary/20 rounded-xl w-12 h-12 text-primary shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-foreground-muted text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Villes couvertes */}
          <section>
            <h2 className="font-semibold text-foreground text-xl mb-6">
              Villes où j&apos;interviens
            </h2>
            <div className="gap-3 grid grid-cols-2 md:grid-cols-3">
              {cities.map((city) => (
                <div
                  key={city.name}
                  className="flex items-center gap-3 bg-card/50 p-4 border border-stroke rounded-xl"
                >
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">{city.name}</p>
                    <p className="text-foreground-muted text-xs">
                      {city.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-foreground-muted text-sm">
              Je travaille également en remote avec des clients au{" "}
              <strong>Togo</strong>, <strong>Niger</strong>,{" "}
              <strong>Burkina Faso</strong>, <strong>Côte d&apos;Ivoire</strong>{" "}
              et partout dans le monde.
            </p>
          </section>

          {/* Avantages */}
          <section className="bg-card p-8 border border-stroke rounded-3xl">
            <h2 className="font-semibold text-foreground text-xl mb-6">
              Pourquoi choisir un développeur local ?
            </h2>
            <div className="gap-3 grid md:grid-cols-2">
              {advantages.map((advantage) => (
                <div key={advantage} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-foreground-muted text-sm">{advantage}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="font-semibold text-foreground text-2xl">
              Prêt à lancer votre projet ?
            </h2>
            <p className="mt-3 text-foreground-muted">
              Discutons de votre projet digital. Devis gratuit sous 48h.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Link href="/contact" className="btn-primary">
                Demander un devis
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="btn-secondary">
                Voir tous les services
              </Link>
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}
