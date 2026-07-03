// Liens de navigation

export const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Projets", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "À propos", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = {
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    {
      label: "Politique de confidentialité",
      href: "/politique-confidentialite",
    },
  ],
} as const;

export type NavLink = (typeof navLinks)[number];
