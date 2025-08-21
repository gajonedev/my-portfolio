import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import { ThemeProvider } from "./provider";
import { cn } from "@/lib/utils";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Néhémie Gandonou | Développeur web fullstack et codeur passioné",
  description:
    "Développeur web et mobile spécialisé en code et no-code. Je vous construit votre prochaine application. Découvrez mes projets et ma méthodologie.",
  keywords: [
    "Next.js",
    "React",
    "Node.js",
    "Développeur Web",
    "Portfolio",
    "Gajone",
    "Gajone Dev",
    "Néhémie",
    "Néhémie Gandonou",
  ],
  authors: [{ name: "Néhémie Gandonou", url: "https://gajone.me" }],
  creator: "Néhémie Gandonou",
  publisher: "Néhémie Gandonou",
  metadataBase: new URL("https://gajone.me"),
  openGraph: {
    title: "Néhémie Gandonou | Développeur web passionné.",
    description:
      "Découvrez mes projets, mon approche de travail et mes compétences en développement.",
    url: "https://gajone.me",
    siteName: "Portfolio Néhémie",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio de Néhémie",
    description: "Développeur Full-Stack passionné..",
    images: ["/og-image.png"],
  },
  // icons: {
  //   icon: "/favicon.ico",
  //   apple: "/favicon.ico",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(outfit.className, "font-outfit")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
