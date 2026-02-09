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

export const metadata: Metadata = {
  title: "Néhémie Gandonou — Développeur Web & Mobile",
  description:
    "Portfolio de développeur web & mobile basé à Cotonou, Bénin : sites vitrines, e-commerce, SaaS, marketplace, automatisation IA et applications mobiles.",
  applicationName: "Néhémie Gandonou",
  openGraph: {
    title: "Néhémie Gandonou — Développeur Web & Mobile",
    description:
      "Sites vitrines, e-commerce, SaaS, marketplace, automatisation IA et apps mobiles.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Néhémie Gandonou — Développeur Web & Mobile",
    description:
      "Portfolio de développeur web & mobile avec une approche orientée design et performance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
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
