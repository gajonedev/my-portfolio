import { serializeJsonLd } from "@/lib/seo";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MotionProvider from "./components/MotionProvider";
import FloatingWhatsApp from "./components/ui/FloatingWhatsApp";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { localCities, siteConfig, contactInfo, socialLinks } from "@/data";
import AcquisitionTracker from "./components/AcquisitionTracker";
import NavigationFlag from "./components/NavigationFlag";

// NeverMind, the typeface released by Xmind under the SIL Open Font License
// (app/fonts/nevermind/OFL.txt). Self-hosted, subset to Latin for French.
// Headings and body share it: globals.css maps --font-display to --font-body.
const nevermind = localFont({
  src: [
    { path: "./fonts/nevermind/NeverMind-Light.woff2", weight: "300" },
    { path: "./fonts/nevermind/NeverMind-Regular.woff2", weight: "400" },
    { path: "./fonts/nevermind/NeverMind-Medium.woff2", weight: "500" },
    { path: "./fonts/nevermind/NeverMind-DemiBold.woff2", weight: "600" },
    { path: "./fonts/nevermind/NeverMind-Bold.woff2", weight: "700" },
  ],
  variable: "--font-body",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const baseUrl = siteConfig.url;

// Mobile browser bar (Chrome Android, Safari iOS 15+): same black as the
// header, so the page runs edge to edge without a visible seam.
export const viewport: Viewport = {
  themeColor: "#050507",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Développeur Web & Mobile à Cotonou, Bénin | Néhémie Gandonou",
    template: "%s | Néhémie Gandonou",
  },
  description:
    "Développeur web et mobile indépendant basé à Cotonou. Je conçois des plateformes web, des logiciels métier et des applications mobiles pour des entreprises et des porteurs de produit au Bénin et à distance.",
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
    title: "Développeur Web & Mobile à Cotonou, Bénin | Néhémie Gandonou",
    description:
      "Développeur indépendant au Bénin : plateformes web, logiciels métier et applications mobiles. Basé à Cotonou et disponible à distance.",
    type: "website",
    url: baseUrl,
    siteName: "Néhémie Gandonou",
    locale: "fr_BJ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Développeur Web & Mobile à Cotonou, Bénin | Néhémie Gandonou",
    description:
      "Développeur indépendant au Bénin : applications web avec Next.js et Node.js, applications mobiles avec Flutter et outils métier sur mesure.",
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
      image: `${baseUrl}/portrait.png`,
      sameAs: socialLinks.map((social) => social.href),
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
      image: `${baseUrl}/portrait.png`,
      url: baseUrl,
      telephone: contactInfo.phoneRaw,
      email: contactInfo.email,
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
      sameAs: socialLinks.map((social) => social.href),
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
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
        />
      </head>
      <body
        className={`${nevermind.variable} antialiased bg-background text-foreground font-sans`}
      >
        <MotionProvider>
          <a href="#main-content" className="skip-link">
            Aller au contenu
          </a>
          <AcquisitionTracker />
          <NavigationFlag />
          <Header />
          <main id="main-content" tabIndex={-1} className="pt-17 min-h-screen">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
        </MotionProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
