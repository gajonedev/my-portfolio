import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CityLanding from "../components/landings/CityLanding";
import ExpertiseLanding from "../components/landings/ExpertiseLanding";
import {
  localCities,
  cityFullSlug,
  getCityByFullSlug,
  expertises,
  getExpertiseBySlug,
  siteConfig,
} from "@/data";

// Route landing racine : sert les pages villes (/developpeur-web-{ville})
// et les pages expertise (/developpeur-{tech}-benin). Tout autre slug → 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...localCities.map((city) => ({ landing: cityFullSlug(city) })),
    ...expertises.map((expertise) => ({ landing: expertise.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ landing: string }>;
}): Promise<Metadata> {
  const { landing } = await params;

  const city = getCityByFullSlug(landing);
  if (city) {
    const url = `${siteConfig.url}/${cityFullSlug(city)}`;
    return {
      title: `Développeur Web & Mobile à ${city.name} | Sites, Applications, E-commerce`,
      description: city.metaDescription,
      keywords: [
        `développeur web ${city.name}`,
        `développeur ${city.name}`,
        `création site web ${city.name}`,
        `application mobile ${city.name}`,
        `développeur mobile ${city.name}`,
        `freelance ${city.name}`,
        `e-commerce ${city.name}`,
        `développeur web ${city.department} Bénin`,
      ],
      alternates: { canonical: url },
      openGraph: {
        title: `Développeur Web & Mobile à ${city.name}`,
        description: city.metaDescription,
        url,
        type: "website",
        locale: "fr_BJ",
      },
      other: {
        "geo.region": city.regionCode,
        "geo.placename": city.name,
        "geo.position": `${city.geo.latitude};${city.geo.longitude}`,
        ICBM: `${city.geo.latitude}, ${city.geo.longitude}`,
      },
    };
  }

  const expertise = getExpertiseBySlug(landing);
  if (expertise) {
    const url = `${siteConfig.url}/${expertise.slug}`;
    return {
      title: expertise.metaTitle,
      description: expertise.metaDescription,
      keywords: expertise.keywords,
      alternates: { canonical: url },
      openGraph: {
        title: expertise.metaTitle,
        description: expertise.metaDescription,
        url,
        type: "website",
        locale: "fr_BJ",
      },
    };
  }

  return {};
}

export default async function LandingPage({
  params,
}: {
  params: Promise<{ landing: string }>;
}) {
  const { landing } = await params;

  const city = getCityByFullSlug(landing);
  if (city) return <CityLanding city={city} />;

  const expertise = getExpertiseBySlug(landing);
  if (expertise) return <ExpertiseLanding expertise={expertise} />;

  notFound();
}
