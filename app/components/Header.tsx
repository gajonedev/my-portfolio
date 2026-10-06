"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  m,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { contactHref, serviceFromPath } from "@/lib/acquisition";
import Container from "./Container";
import GlowButton from "./ui/GlowButton";
import { Menu, X } from "@/lib/icons";
import { navLinks, siteConfig } from "@/data";

const menuLinks = navLinks.slice(1, 5);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const contextualContact = contactHref(serviceFromPath(pathname), pathname);

  // Hide on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 120);
    setScrolled(latest > 12);
  });

  // Move focus into the menu, trap Tab and restore focus when it closes.
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;
    const main = document.getElementById("main-content");
    const header = trigger?.closest("header");
    const footer = document.querySelector("footer");
    const floating = document.querySelector("[data-floating-whatsapp]");
    const background = [main, header, footer, floating].filter(
      (element): element is HTMLElement => element instanceof HTMLElement,
    );
    const previousInert = background.map((element) => element.inert);
    background.forEach((element) => {
      element.inert = true;
    });
    document.body.style.overflow = "hidden";
    dialogRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
      }
      if (event.key !== "Tab") return;
      const focusable = Array.from(
        dialogRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex="0"]',
        ) || [],
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) setIsOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      background.forEach((element, index) => {
        element.inert = previousInert[index];
      });
      document.removeEventListener("keydown", handleKey);
      window.removeEventListener("resize", onResize);
      trigger?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <m.header
        initial={{ y: 0 }}
        animate={{ y: hidden ? "-110%" : "0%" }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="top-0 z-50 fixed inset-x-0 text-foreground section-dark"
      >
        <div
          className={`transition-colors duration-300 ${
            scrolled
              ? "border-b border-[color:var(--stroke)] bg-[rgba(5,5,7,0.8)] backdrop-blur-xl"
              : "border-b border-transparent bg-transparent"
          }`}
        >
          <Container className="flex justify-between items-center py-4">
            <Link href="/" className="group flex items-center gap-3">
              <span className="flex justify-center items-center bg-primary-fill rounded-xl w-9 h-9 font-display font-bold text-primary-foreground text-sm glow-sm">
                {siteConfig.shortName}
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display font-semibold text-foreground text-sm">
                  Néhémie Gandonou
                </span>
                <span className="font-body text-foreground-muted text-xs">
                  {siteConfig.title}
                </span>
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {menuLinks.map((link) => {
                const active =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(`${link.href}/`));
                return (
                  <Link
                    key={link.href}
                    aria-current={active ? "page" : undefined}
                    href={
                      link.href === "/contact" ? contextualContact : link.href
                    }
                    className={`relative rounded-full px-4 py-2 font-body text-sm transition-colors ${
                      active
                        ? "text-foreground"
                        : "text-foreground-muted hover:text-foreground"
                    }`}
                  >
                    {active && (
                      <m.span
                        layoutId="nav-indicator"
                        className="-z-10 absolute inset-0 bg-[color:var(--background-muted)] border-[color:var(--stroke-hover)] border rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <GlowButton
                href={contextualContact}
                className="lg:inline-flex! hidden!"
              >
                Démarrer un projet
              </GlowButton>
              <button
                ref={triggerRef}
                type="button"
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                onClick={() => setIsOpen(true)}
                className="lg:hidden flex justify-center items-center bg-background-soft border border-stroke hover:border-primary rounded-full w-9 h-9 text-foreground-muted hover:text-foreground transition-colors"
                aria-label="Ouvrir le menu"
              >
                <Menu className="w-4 h-4" />
              </button>
            </div>
          </Container>
        </div>
      </m.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <div className="lg:hidden z-[60] fixed inset-0 section-dark">
            <m.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <m.div
              className="right-0 absolute inset-y-0 flex flex-col bg-background border-stroke border-l w-72 text-foreground"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              ref={dialogRef}
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navigation"
            >
              <div className="flex justify-between items-center p-4 border-stroke border-b">
                <span className="font-display font-semibold text-foreground">
                  Menu
                </span>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex justify-center items-center bg-background-soft border border-stroke hover:border-primary rounded-full w-9 h-9 text-foreground-muted hover:text-foreground transition-colors"
                  aria-label="Fermer le menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <m.nav
                className="flex-1 p-4 overflow-y-auto"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
                  },
                }}
              >
                <ul className="space-y-2">
                  {navLinks.map((link) => {
                    const active =
                      pathname === link.href ||
                      (link.href !== "/" &&
                        pathname.startsWith(`${link.href}/`));
                    return (
                      <m.li
                        key={link.href}
                        variants={{
                          hidden: { opacity: 0, x: 24 },
                          visible: { opacity: 1, x: 0 },
                        }}
                      >
                        <Link
                          href={
                            link.href === "/contact"
                              ? contextualContact
                              : link.href
                          }
                          onClick={() => setIsOpen(false)}
                          className={`block rounded-xl px-4 py-3 font-body text-base font-medium transition-colors ${
                            active
                              ? "bg-primary/10 text-primary"
                              : "text-foreground-muted hover:bg-background-muted hover:text-foreground"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </m.li>
                    );
                  })}
                </ul>
              </m.nav>
              <div className="p-4 border-stroke border-t">
                <GlowButton
                  href={contextualContact}
                  onClick={() => setIsOpen(false)}
                  className="w-full"
                >
                  Démarrer un projet
                </GlowButton>
              </div>
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
