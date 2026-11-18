"use client";

import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import type { MouseEvent, RefObject } from "react";
import { ArrowUpRight } from "lucide-react";
import { contactInfo, navLinks, socialLinks, whatsappUrl } from "@/data";
import Container from "./Container";
import WhatsAppIcon from "./ui/WhatsAppIcon";
import LogoMark from "./ui/LogoMark";

interface MobileMenuProps {
  pathname: string;
  contactHref: string;
  /** Center of the burger button: the screen opens in a circle from there. */
  origin: { x: number; y: number };
  dialogRef: RefObject<HTMLDivElement | null>;
  onClose: () => void;
  /** Internal links: closes the menu, then navigates (see Header). */
  onNavigate: (href: string) => void;
}

const EASE_IO = [0.76, 0, 0.24, 1] as const;
const EASE_OUT = [0.16, 1, 0.3, 1] as const;
const pad = (value: number) => String(value).padStart(2, "0");

/*
 * Full-screen menu: the night opens in a circle from the burger, the links
 * rise out of their masks one by one and the horizon of the home page lights
 * up under them. With reduced motion it simply fades in.
 */
export default function MobileMenu({
  pathname,
  contactHref,
  origin,
  dialogRef,
  onClose,
  onNavigate,
}: MobileMenuProps) {
  // Let modified clicks (new tab, new window) behave as usual.
  const go = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (event.button !== 0) return;
    event.preventDefault();
    onNavigate(href);
  };

  const reduced = useReducedMotion();
  const radius =
    typeof window === "undefined"
      ? 2000
      : Math.hypot(
          Math.max(origin.x, window.innerWidth - origin.x),
          Math.max(origin.y, window.innerHeight - origin.y),
        ) + 40;
  const at = `at ${origin.x}px ${origin.y}px`;

  const reveal = reduced
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
      }
    : {
        initial: { clipPath: `circle(0px ${at})` },
        animate: { clipPath: `circle(${radius}px ${at})` },
        exit: {
          clipPath: `circle(0px ${at})`,
          transition: { duration: 0.55, ease: EASE_IO },
        },
        transition: { duration: 0.8, ease: EASE_IO },
      };

  const rise = (index: number) =>
    reduced
      ? {}
      : {
          initial: { y: "110%" },
          animate: { y: "0%" },
          transition: { duration: 0.9, ease: EASE_OUT, delay: 0.28 + index * 0.05 },
        };

  const fade = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease: EASE_OUT, delay },
        };

  return (
    <m.div
      ref={dialogRef}
      id="mobile-navigation"
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navigation"
      className="lg:hidden z-[60] fixed inset-0 text-foreground menu section-dark"
      {...reveal}
    >
      <div aria-hidden="true" className="menu-sky" />

      <div className="relative flex flex-col h-full overflow-y-auto">
        {/* same bar as the header, so the cross sits where the burger was */}
        <Container className="flex justify-between items-center py-4">
          <Link href="/" onClick={go("/")} className="flex items-center gap-3">
            <LogoMark />
            <span className="font-display font-semibold text-foreground text-sm">
              Néhémie Gandonou
            </span>
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer le menu"
            className="burger is-open"
          >
            <span aria-hidden="true" className="burger-lines">
              <span />
              <span />
            </span>
          </button>
        </Container>

        <Container className="flex flex-col flex-1 pt-6 pb-8">
          <nav aria-label="Navigation principale">
            <ul className="menu-list">
              {navLinks.map((link, index) => {
                const active =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(`${link.href}/`));
                return (
                  <li key={link.href} className="menu-item">
                    <span className="menu-mask">
                      <m.span className="block" {...rise(index)}>
                        <Link
                          href={link.href === "/contact" ? contactHref : link.href}
                          onClick={go(link.href === "/contact" ? contactHref : link.href)}
                          aria-current={active ? "page" : undefined}
                          className="menu-link"
                        >
                          <span className="menu-index">{pad(index + 1)}</span>
                          <span className="menu-label">{link.label}</span>
                          <ArrowUpRight aria-hidden="true" className="menu-arrow" />
                        </Link>
                      </m.span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* the horizon of the home page */}
          <div aria-hidden="true" className="menu-horizon">
            <m.span
              className="menu-horizon-line"
              initial={reduced ? false : { scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.3, ease: EASE_IO, delay: 0.45 }}
            />
            <span className="menu-floor" />
          </div>

          <m.div className="flex flex-col gap-6 mt-auto" {...fade(0.7)}>
            <Link href={contactHref} onClick={go(contactHref)} className="w-full pill-solid">
              <span className="pill-solid-label">Démarrer un projet</span>
              <span aria-hidden="true" className="pill-solid-badge">
                <span className="pill-solid-icon">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
                <span className="pill-solid-icon pill-solid-icon-next">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </span>
            </Link>

            <div className="gap-3 grid text-sm">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 w-fit text-foreground"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25d366]" />
                {contactInfo.phone}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="w-fit text-foreground-muted">
                {contactInfo.email}
              </a>
            </div>

            <div className="flex flex-wrap justify-between items-center gap-4 pt-5 border-white/[0.07] border-t text-foreground-subtle text-xs">
              <ul className="flex gap-5">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground transition-colors"
                    >
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
              <span>{contactInfo.location} · À distance</span>
            </div>
          </m.div>
        </Container>
      </div>
    </m.div>
  );
}
