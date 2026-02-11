import Link from "next/link";
import Container from "./Container";
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from "@/lib/icons";
import {
  navLinks,
  footerLinks,
  socialLinks,
  siteConfig,
  contactInfo,
} from "@/data";

const socialIconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
};

export default function Footer() {
  return (
    <footer className="bg-card/50 py-12 border-stroke border-t">
      <Container className="gap-10 grid md:grid-cols-3">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex justify-center items-center bg-primary rounded-xl w-9 h-9 font-bold text-[#1a1625] text-sm">
              {siteConfig.shortName}
            </div>
            <span className="font-semibold text-foreground text-lg">
              {siteConfig.name}
            </span>
          </Link>
          <p className="max-w-md text-foreground-muted text-sm">
            {siteConfig.description}
          </p>
          <div className="flex gap-3">
            {socialLinks.map((social) => {
              const Icon = socialIconMap[social.name];
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center bg-background border border-stroke hover:border-primary rounded-full w-9 h-9 text-foreground-muted hover:text-primary transition"
                  aria-label={social.name}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex justify-center items-center bg-background border border-stroke hover:border-primary rounded-full w-9 h-9 text-foreground-muted hover:text-primary transition"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${contactInfo.phoneRaw}`}
              className="flex justify-center items-center bg-background border border-stroke hover:border-primary rounded-full w-9 h-9 text-foreground-muted hover:text-primary transition"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-semibold text-foreground-muted/60 text-sm uppercase tracking-[0.2em]">
            Navigation
          </span>
          <div className="gap-2 grid grid-cols-2 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground-muted hover:text-foreground transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-semibold text-foreground-muted/60 text-sm uppercase tracking-[0.2em]">
            Contact
          </span>
          <div className="flex flex-col gap-3 text-foreground-muted text-sm">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-2 hover:text-foreground transition"
            >
              <Mail className="w-4 h-4" />
              {contactInfo.email}
            </a>
            <a
              href={`tel:${contactInfo.phoneRaw}`}
              className="flex items-center gap-2 hover:text-foreground transition"
            >
              <Phone className="w-4 h-4" />
              {contactInfo.phone}
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {contactInfo.location}
            </div>
          </div>
        </div>
      </Container>

      <Container className="flex md:flex-row flex-col justify-between items-center gap-4 mt-10 pt-6 border-stroke border-t text-foreground-muted/60 text-xs">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
        </p>
        <div className="flex gap-4">
          {footerLinks.legal.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-foreground transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
