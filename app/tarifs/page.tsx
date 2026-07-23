import type { Metadata } from "next";
import Link from "next/link";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import PriceTag from "../components/ui/PriceTag";
import SpotlightCard from "../components/ui/SpotlightCard";
import WhatsAppCta from "../components/ui/WhatsAppCta";
import { CheckCircle, ArrowRight, ChevronRight, Quote, Clock } from "@/lib/icons";
import {
  pricingTiers,
  alwaysIncluded,
  priceFactors,
  pricingFaq,
  testimonials,
  siteConfig,
} from "@/data";
import { getAllPosts } from "@/lib/blog";

const url = `${siteConfig.url}/tarifs`;

const ACCENTS = ["#ff4d3d", "#3b82f6", "#f59e0b"];
const CORNERS = ["tr", "tl", "br", "bl"] as const;

// Cluster « prix » : /tarifs (pilier) renvoie vers les articles coût + paiement
const PRICING_CLUSTER_SLUGS = [
  "combien-coute-site-web-benin-2026",
  "combien-coute-application-mobile-benin-2026",
  "fedapay-kkiapay-paydunya-comparatif",
];

export const metadata: Metadata = {
  title:
    "Tarifs — Prix d'un Site Web, d'une App Mobile ou d'un E-commerce au Bénin",
  description:
    "Combien coûte un site web, une boutique en ligne ou une application mobile au Bénin ? Fourchettes de prix transparentes en FCFA, ce qui est inclus, et devis précis sous 24h.",
  keywords: [
    "prix site web Bénin",
    "coût application mobile Bénin",
    "tarif création site internet Cotonou",
    "prix boutique en ligne FCFA",
    "devis site web Bénin",
    "combien coûte un site web",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Tarifs — Création de sites et applications au Bénin",
    description:
      "Des fourchettes de prix transparentes en FCFA pour votre site web, boutique en ligne ou application mobile. Devis précis sous 24h.",
    url,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Tarifs",
          item: url,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: pricingFaq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default async function TarifsPage() {
  const relatedPosts = getAllPosts().filter((post) =>
    PRICING_CLUSTER_SLUGS.includes(post.slug),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        title="Tarifs & fourchettes de prix"
        description="Combien coûte un site web, une boutique en ligne ou une application mobile ? Voici des fourchettes en FCFA, et je vous fais un devis pour votre besoin sous 24h."
      />

      <main className="py-16">
        <Container className="gap-14 grid">
          {/* Intro */}
          <section className="max-w-3xl">
            <p className="text-foreground-muted leading-relaxed">
              Vous cherchez un ordre de grandeur avant de vous lancer ? Le voici.
              Les fourchettes ci-dessous vous donnent un repère réaliste pour
              situer votre budget. Chaque projet étant unique, le chiffrage
              précis se fait sur devis :{" "}
              <strong className="text-foreground">
                gratuit, détaillé et envoyé sous 24h
              </strong>
              .
            </p>
          </section>

          {/* Grille tarifaire */}
          <section>
            <div className="gap-4 sm:gap-6 grid md:grid-cols-2 lg:grid-cols-3">
              {pricingTiers.map((tier, index) => (
                <SpotlightCard
                  key={tier.title}
                  corner={CORNERS[index % CORNERS.length]}
                  cornerColor={ACCENTS[index % ACCENTS.length]}
                  hover={false}
                  glow={false}
                >
                  <div className="flex flex-col p-6 h-full">
                    <h2 className="font-display font-semibold text-foreground text-lg">
                      {tier.title}
                    </h2>
                    <p className="mt-2 text-foreground-muted text-sm">
                      {tier.description}
                    </p>
                    <div className="mt-5">
                      <span className="block mb-2 text-foreground-muted text-xs uppercase tracking-wider">
                        À partir de
                      </span>
                      <PriceTag
                        tilt={index % 2 === 0 ? "left" : "right"}
                        className="text-xl"
                      >
                        {tier.priceFrom}
                      </PriceTag>
                    </div>
                    <p className="mt-3 text-foreground-muted text-xs">
                      {tier.priceNote}
                    </p>
                    <p className="flex items-center gap-1.5 mt-2 text-foreground-muted text-xs">
                      <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>
                        <span className="font-medium text-foreground">
                          Délai indicatif :
                        </span>{" "}
                        {tier.delay}
                      </span>
                    </p>
                    <ul className="flex flex-col gap-2 mt-5">
                      {tier.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <CheckCircle className="mt-0.5 w-4 h-4 text-green-500 shrink-0" />
                          <span className="text-foreground-muted text-sm">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-foreground-muted text-xs">
                      <span className="font-medium text-foreground">
                        Idéal pour :
                      </span>{" "}
                      {tier.idealFor}
                    </p>
                    {tier.serviceSlug && (
                      <Link
                        href={`/services/${tier.serviceSlug}`}
                        className="inline-flex items-center gap-1.5 mt-auto pt-5 font-medium text-primary text-sm hover:underline"
                      >
                        Détails du service
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </section>

          {/* Toujours inclus */}
          <section className="bg-card p-8 border border-stroke rounded-3xl">
            <h2 className="mb-6 font-semibold text-foreground text-xl">
              Toujours inclus, quel que soit le projet
            </h2>
            <div className="gap-3 grid md:grid-cols-2">
              {alwaysIncluded.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 w-5 h-5 text-green-500 shrink-0" />
                  <p className="text-foreground-muted text-sm">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Facteurs de prix */}
          <section>
            <h2 className="mb-6 font-semibold text-foreground text-2xl">
              Ce qui fait varier le prix
            </h2>
            <div className="gap-4 grid md:grid-cols-2">
              {priceFactors.map((factor) => (
                <div
                  key={factor.title}
                  className="bg-card p-5 border border-stroke rounded-2xl"
                >
                  <h3 className="font-semibold text-foreground">
                    {factor.title}
                  </h3>
                  <p className="mt-2 text-foreground-muted text-sm leading-relaxed">
                    {factor.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="mb-6 font-semibold text-foreground text-xl">
              Questions fréquentes sur les prix
            </h2>
            <div className="flex flex-col gap-4">
              {pricingFaq.map((item) => (
                <details
                  key={item.question}
                  className="group bg-card open:pb-5 border border-stroke rounded-2xl"
                >
                  <summary className="flex justify-between items-center gap-4 p-5 font-medium text-foreground cursor-pointer list-none">
                    {item.question}
                    <ChevronRight className="w-5 h-5 text-foreground-muted group-open:rotate-90 transition-transform shrink-0" />
                  </summary>
                  <p className="px-5 text-foreground-muted text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Cluster prix — pour approfondir */}
          {relatedPosts.length > 0 && (
            <section>
              <h2 className="mb-2 font-semibold text-foreground text-xl">
                Pour approfondir avant de décider
              </h2>
              <p className="mb-6 text-foreground-muted text-sm">
                Des repères détaillés sur les prix et les moyens de paiement au
                Bénin.
              </p>
              <div className="gap-4 grid md:grid-cols-3">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col bg-card p-5 border border-stroke hover:border-primary/40 rounded-2xl transition"
                  >
                    <span className="bg-primary/10 px-3 py-1 rounded-full w-fit font-semibold text-primary text-xs">
                      {post.category}
                    </span>
                    <h3 className="mt-3 font-medium text-foreground group-hover:text-primary transition">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-foreground-muted text-sm">
                      {post.summary}
                    </p>
                    <span className="flex items-center gap-1.5 mt-4 font-medium text-primary text-sm">
                      Lire l&apos;article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Preuve avant le CTA */}
          <section>
            <SpotlightCard
              corner="tr"
              cornerColor="#ff4d3d"
              hover={false}
              glow={false}
            >
              <figure className="flex flex-col gap-4 p-8 md:p-10">
                <Quote className="w-8 h-8 text-primary" />
                <blockquote className="max-w-3xl font-body text-foreground text-lg leading-relaxed">
                  {testimonials[0].quote}
                </blockquote>
                <figcaption className="font-body text-foreground-muted text-sm">
                  <span className="font-medium text-foreground">
                    {testimonials[0].name}
                  </span>{" "}
                  · {testimonials[0].role}
                </figcaption>
              </figure>
            </SpotlightCard>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="font-semibold text-foreground text-2xl">
              Votre devis précis, sous 24h
            </h2>
            <p className="mt-3 text-foreground-muted">
              Décrivez-moi votre projet en quelques lignes, je reviens vers vous
              avec un chiffrage détaillé et sans engagement.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <WhatsAppCta
                label="Demander mon devis sur WhatsApp"
                message="Bonjour Néhémie, j'aimerais un devis pour mon projet."
              />
              <Link href="/contact" className="btn-secondary">
                Ou via le formulaire
              </Link>
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}
