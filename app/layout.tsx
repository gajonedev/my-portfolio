import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Lexend({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const baseUrl = "https://gajone.dev";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Néhémie Gandonou — Développeur Web & Mobile à Cotonou, Bénin",
    template: "%s | Néhémie Gandonou",
  },
  description:
    "Développeur web & mobile freelance basé à Cotonou, Bénin. Création de sites vitrines, e-commerce, SaaS, marketplace et applications mobiles. Disponible à Lokossa, Porto-Novo, Parakou et partout au Bénin.",
  applicationName: "Néhémie Gandonou",
  authors: [{ name: "Néhémie Gandonou", url: baseUrl }],
  creator: "Néhémie Gandonou",
  keywords: [
    "développeur web Cotonou",
    "développeur mobile Bénin",
    "freelance Cotonou",
    "création site web Bénin",
    "développeur React Bénin",
    "développeur Next.js Afrique",
    "e-commerce Cotonou",
    "application mobile Bénin",
    "SaaS Afrique de l'Ouest",
    "développeur Porto-Novo",
    "développeur Lokossa",
    "développeur Parakou",
    "agence web Bénin",
  ],
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "Néhémie Gandonou — Développeur Web & Mobile à Cotonou, Bénin",
    description:
      "Développeur freelance au Bénin : sites vitrines, e-commerce, SaaS, marketplace et apps mobiles. Basé à Cotonou, disponible partout.",
    type: "website",
    url: baseUrl,
    siteName: "Néhémie Gandonou",
    locale: "fr_BJ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Néhémie Gandonou — Développeur Web & Mobile à Cotonou, Bénin",
    description:
      "Développeur freelance au Bénin spécialisé en React, Next.js et applications mobiles.",
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
      image: `${baseUrl}/photo.jpg`,
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
      image: `${baseUrl}/photo.jpg`,
      url: baseUrl,
      telephone: "+22901468973222",
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
        { "@type": "City", name: "Cotonou" },
        { "@type": "City", name: "Porto-Novo" },
        { "@type": "City", name: "Lokossa" },
        { "@type": "City", name: "Parakou" },
        { "@type": "City", name: "Abomey-Calavi" },
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
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} antialiased bg-background font-sans`}
      >
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
