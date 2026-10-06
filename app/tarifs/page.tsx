import { serializeJsonLd } from "@/lib/seo";
import { contactHref } from "@/lib/acquisition";
import type { Metadata } from "next";
import Link from "next/link";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import SectionWrapper from "../components/layout/SectionWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import SpotlightCard from "../components/ui/SpotlightCard";
import TestimonialQuote from "../components/ui/TestimonialQuote";
import FaqList from "../components/ui/FaqList";
import FinalCta from "../components/ui/FinalCta";
import { CheckCircle, Clock } from "@/lib/icons";
import {
  pricingTiers,
  alwaysIncluded,
  priceFactors,
  pricingFaq,
  siteConfig,
} from "@/data";
import { getAllPosts } from "@/lib/blog";

const url = `${siteConfig.url}/tarifs`;

const ACCENTS = ["#ff4d3d", "#3b82f6", "#f59e0b"];
const CORNERS = ["tr", "tl", "br", "bl"] as const;
const TIER_ORDER = [
  "creation-application-web",
  "creation-application-mobile",
  "creation-saas-dashboard",
  "creation-ecommerce",
  "creation-site-vitrine",
  "audit-optimisation",
];

// Cluster « prix » : /tarifs (pilier) renvoie vers les articles coût + paiement
const PRICING_CLUSTER_SLUGS = [
  "combien-coute-site-web-benin-2026",
  "combien-coute-application-mobile-benin-2026",
  "fedapay-kkiapay-paydunya-comparatif",
];

export const metadata: Metadata = {
  title:
    "Tarifs | Prix d'un Site Web, d'une App Mobile ou d'un E-commerce au Bénin",
  description:
    "Combien coûte un site web, une boutique en ligne ou une application mobile au Bénin ? Fourchettes de prix transparentes en FCFA, ce qui est inclus, et devis gratuit selon votre besoin.",
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
    title: "Tarifs | Création de sites et applications au Bénin",
    description:
      "Des fourchettes de prix transparentes en FCFA pour votre site web, boutique en ligne ou application mobile. Devis gratuit selon les fonctionnalités dont vous avez besoin.",
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
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <PageHeader
        kicker="Tarifs"
        title="Quel budget prévoir ?"
        description="Voici mes prix de départ en FCFA pour vous aider à préparer votre budget. Parlez-moi de ce que vous voulez construire : je vous prépare ensuite un devis."
      />

      {/* Grille tarifaire */}
      <SectionWrapper variant="light" className="py-16 md:py-24">
        <Container className="gap-6 grid md:grid-cols-2 lg:grid-cols-3">
          {[...pricingTiers]
            .sort(
              (a, b) =>
                TIER_ORDER.indexOf(a.serviceSlug || "") -
                TIER_ORDER.indexOf(b.serviceSlug || ""),
            )
            .map((tier, index) => (
              <SpotlightCard
                key={tier.title}
                corner={CORNERS[index % CORNERS.length]}
                cornerColor={ACCENTS[index % ACCENTS.length]}
                hover={false}
                className="h-full [&>.spotlight-content]:h-full"
              >
                <article className="flex flex-col p-7 h-full">
                  <h2 className="font-display font-semibold text-foreground text-lg">
                    {tier.title}
                  </h2>
                  <p className="mt-2 text-foreground-muted text-sm leading-relaxed">
                    {tier.description}
                  </p>
                  <div className="my-6 py-5 border-stroke border-y">
                    <span className="text-foreground-muted text-xs">
                      À partir de
                    </span>
                    <p className="font-display font-bold text-foreground text-3xl tracking-tight">
                      {tier.priceFrom}
                    </p>
                    <p className="flex items-center gap-1.5 mt-2 text-foreground-muted text-xs">
                      <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
                      {tier.delay}
                    </p>
                  </div>
                  <ul className="flex flex-col gap-2.5 mb-8">
                    {tier.includes.slice(0, 4).map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle className="mt-0.5 w-4 h-4 text-primary shrink-0" />
                        <span className="text-foreground-muted text-sm">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {tier.optionsNote && (
                    <p className="mb-6 text-foreground-muted text-sm leading-relaxed">
                      {tier.optionsNote}
                    </p>
                  )}
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mt-auto">
                    <Link
                      href={contactHref(tier.serviceSlug, "/tarifs")}
                      className="btn-secondary"
                    >
                      Discuter de ce projet
                    </Link>
                    {tier.serviceSlug && (
                      <Link
                        href={`/services/${tier.serviceSlug}`}
                        className="font-medium text-primary text-sm hover:underline"
                      >
                        Détails →
                      </Link>
                    )}
                  </div>
                </article>
              </SpotlightCard>
            ))}
        </Container>
      </SectionWrapper>

      {/* Inclus + facteurs de prix */}
      <SectionWrapper variant="dark" className="py-16 md:py-24">
        <Container className="items-start gap-10 grid lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <SectionHeading
              kicker="Inclus"
              title="Toujours inclus, quel que soit le projet"
            />
            <ul className="flex flex-col gap-4 p-7 card">
              {alwaysIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground-muted text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <SectionHeading
              kicker="Variables"
              title="Ce qui fait varier le prix"
            />
            <dl className="flex flex-col divide-y divide-stroke card">
              {priceFactors.map((factor, index) => (
                <div key={factor.title} className="flex gap-4 p-6">
                  <span className="font-display font-semibold tabular-nums text-primary text-sm">
                    0{index + 1}
                  </span>
                  <div>
                    <dt className="font-semibold text-foreground">
                      {factor.title}
                    </dt>
                    <dd className="mt-1.5 text-foreground-muted text-sm leading-relaxed">
                      {factor.description}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </SectionWrapper>

      {/* FAQ + avis client */}
      <SectionWrapper variant="light" className="py-16 md:py-24">
        <Container className="gap-16 grid">
          <div className="items-start gap-10 grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="lg:top-28 lg:sticky flex flex-col gap-6">
              <SectionHeading
                kicker="FAQ"
                title="Questions fréquentes sur les prix"
              />
              <TestimonialQuote name="Rodolphe Gandonou" />
            </div>
            <FaqList items={pricingFaq} />
          </div>

          {relatedPosts.length > 0 && (
            <div className="flex flex-col gap-8">
              <SectionHeading
                kicker="Pour approfondir"
                title="Des repères avant de décider"
                subtitle="Les prix et les moyens de paiement au Bénin, en détail."
              />
              <div className="gap-4 grid md:grid-cols-3">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col p-6 card-interactive"
                  >
                    <span className="font-semibold text-primary text-xs uppercase tracking-wider">
                      {post.category}
                    </span>
                    <h3 className="mt-3 font-semibold text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-foreground-muted text-sm leading-relaxed">
                      {post.summary}
                    </p>
                    <span className="mt-auto pt-4 font-medium text-primary text-sm">
                      Lire l’article →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </SectionWrapper>

      <FinalCta
        title="Parlons de votre budget"
        text="Parlez-moi des fonctionnalités dont vous avez besoin. Je vous prépare un devis gratuit."
        whatsappLabel="Demander mon devis"
        whatsappMessage="Bonjour Néhémie, j'aimerais un devis pour mon projet."
        secondary={{ href: "/contact", label: "Passer par le formulaire" }}
      />
    </>
  );
}
