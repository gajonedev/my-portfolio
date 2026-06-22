"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
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
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: hidden ? "-110%" : "0%" }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="section-dark fixed inset-x-0 top-0 z-50 text-foreground"
      >
        <div
          className={`transition-colors duration-300 ${
            scrolled
              ? "border-b border-[color:var(--stroke)] bg-[rgba(5,5,7,0.8)] backdrop-blur-xl"
              : "border-b border-transparent bg-transparent"
          }`}
        >
          <Container className="flex items-center justify-between py-4">
            <Link href="/" className="group flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary font-display text-sm font-bold text-primary-foreground glow-sm">
                {siteConfig.shortName}
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-sm font-semibold text-foreground">
                  Gajone Dev
                </span>
                <span className="font-body text-xs text-foreground-muted">
                  {siteConfig.title}
                </span>
              </span>
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
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
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 -z-10 rounded-full border border-[color:var(--stroke-hover)] bg-[color:var(--background-muted)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
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
                className="hidden btn-primary sm:inline-flex"
              >
                Démarrer un projet
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-stroke bg-background-soft text-foreground-muted transition-colors hover:border-primary hover:text-foreground md:hidden"
                aria-label="Ouvrir le menu"
              >
                <Menu className="h-4 w-4" />
              </button>
            </div>
          </Container>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <div className="section-dark fixed inset-0 z-[60] md:hidden">
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              className="absolute inset-y-0 right-0 flex w-72 flex-col border-l border-stroke bg-background text-foreground"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navigation"
            >
              <div className="flex items-center justify-between border-b border-stroke p-4">
                <span className="font-display font-semibold text-foreground">
                  Menu
                </span>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-stroke bg-background-soft text-foreground-muted transition-colors hover:border-primary hover:text-foreground"
                  aria-label="Fermer le menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <motion.nav
                className="flex-1 overflow-y-auto p-4"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
                }}
              >
                <ul className="space-y-2">
                  {navLinks.map((link) => {
                    const active = pathname === link.href;
                    return (
                      <motion.li
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
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.nav>
              <div className="border-t border-stroke p-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full"
                >
                  Démarrer un projet
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
