import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MotionProvider from "./components/MotionProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { localCities } from "@/data/cities";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const baseUrl = "https://gajone.dev";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Néhémie Gandonou — Développeur Web & Mobile à Cotonou, Bénin",
    template: "%s | Néhémie Gandonou",
  },
  description:
    "Développeur web & mobile freelance basé à Cotonou, Bénin. Je conçois des applications web fullstack, des applications mobiles et des plateformes SaaS / e-commerce, avec un backend solide et scalable. Disponible à Cotonou, Porto-Novo, Lokossa, Parakou et partout au Bénin.",
  applicationName: "Néhémie Gandonou",
  authors: [{ name: "Néhémie Gandonou", url: baseUrl }],
  creator: "Néhémie Gandonou",
  keywords: [
    "développeur web Cotonou",
    "développeur mobile Bénin",
    "développeur fullstack Bénin",
    "application web Bénin",
    "application mobile Bénin",
    "développeur Flutter Bénin",
    "développeur React Bénin",
    "développeur Next.js Afrique",
    "création site web Bénin",
    "e-commerce Cotonou",
    "SaaS Afrique de l'Ouest",
    "freelance Cotonou",
    "développeur Porto-Novo",
    "développeur Parakou",
    "développeur Lokossa",
  ],
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "Néhémie Gandonou — Développeur Web & Mobile à Cotonou, Bénin",
    description:
      "Développeur freelance au Bénin : applications web fullstack, apps mobiles, plateformes SaaS et e-commerce, backends solides. Basé à Cotonou, disponible partout.",
    type: "website",
    url: baseUrl,
    siteName: "Néhémie Gandonou",
    locale: "fr_BJ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Néhémie Gandonou — Développeur Web & Mobile à Cotonou, Bénin",
    description:
      "Développeur freelance au Bénin : applications web fullstack (Next.js, Node.js), apps mobiles (Flutter) et backends solides.",
    creator: "@gajonedev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "BJ-LI",
    "geo.placename": "Cotonou",
    "geo.position": "6.3654;2.4183",
    ICBM: "6.3654, 2.4183",
  },
};

// Schema.org JSON-LD pour SEO local
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${baseUrl}/#person`,
      name: "Néhémie Gandonou",
      url: baseUrl,
      image: `${baseUrl}/portrait.webp`,
      sameAs: [
        "https://github.com/gajonedev",
        "https://linkedin.com/in/gajonedev",
        "https://twitter.com/gajonedev",
      ],
      jobTitle: "Développeur Web & Mobile",
      worksFor: {
        "@type": "Organization",
        name: "Freelance",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cotonou",
        addressRegion: "Littoral",
        addressCountry: "BJ",
      },
      knowsAbout: [
        "Développement Web",
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Applications Mobiles",
        "E-commerce",
        "SaaS",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${baseUrl}/#business`,
      name: "Néhémie Gandonou - Développeur Web",
      image: `${baseUrl}/portrait.webp`,
      url: baseUrl,
      telephone: "+2290146897322",
      email: "gajonedev@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Cotonou",
        addressLocality: "Cotonou",
        addressRegion: "Littoral",
        postalCode: "",
        addressCountry: "BJ",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 6.3654,
        longitude: 2.4183,
      },
      areaServed: [
        ...localCities.map((city) => ({
          "@type": "City",
          name: city.name,
        })),
        { "@type": "Country", name: "Bénin" },
        { "@type": "Country", name: "Togo" },
        { "@type": "Country", name: "Niger" },
      ],
      priceRange: "$$",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      sameAs: [
        "https://github.com/gajonedev",
        "https://linkedin.com/in/gajonedev",
        "https://twitter.com/gajonedev",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "Néhémie Gandonou",
      description: "Développeur Web & Mobile freelance à Cotonou, Bénin",
      publisher: { "@id": `${baseUrl}/#person` },
      inLanguage: "fr-BJ",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${outfit.variable} ${plusJakarta.variable} antialiased bg-background text-foreground font-sans`}
      >
        <MotionProvider>
          <Header />
          <main className="pt-17 min-h-screen">{children}</main>
          <Footer />
        </MotionProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
