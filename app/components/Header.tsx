"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  m,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Container from "./Container";
import { Menu, X } from "@/lib/icons";
import { navLinks, siteConfig } from "@/data";

const menuLinks = navLinks.slice(1, 5);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  // Hide on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 120);
    setScrolled(latest > 12);
  });

  // Body scroll lock + escape handling for the mobile menu
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
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
              <span className="flex justify-center items-center bg-primary rounded-xl w-9 h-9 font-display font-bold text-primary-foreground text-sm glow-sm">
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

            <nav className="hidden md:flex items-center gap-1">
              {menuLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
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
              <Link
                href="/contact"
                className="md:inline-flex! hidden! btn-primary"
              >
                Démarrer un projet
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="md:hidden flex justify-center items-center bg-background-soft border border-stroke hover:border-primary rounded-full w-9 h-9 text-foreground-muted hover:text-foreground transition-colors"
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
          <div className="md:hidden z-[60] fixed inset-0 section-dark">
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
                    const active = pathname === link.href;
                    return (
                      <m.li
                        key={link.href}
                        variants={{
                          hidden: { opacity: 0, x: 24 },
                          visible: { opacity: 1, x: 0 },
                        }}
                      >
                        <Link
                          href={link.href}
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
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full btn-primary"
                >
                  Démarrer un projet
                </Link>
              </div>
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
