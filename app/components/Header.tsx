"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "@/lib/icons";
import { navLinks, siteConfig } from "@/data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLAnchorElement[]>([]);
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [pathname]);

  // GSAP animations
  useEffect(() => {
    const menu = menuRef.current;
    const overlay = overlayRef.current;
    const items = menuItemsRef.current;

    if (!menu || !overlay) return;

    if (isOpen) {
      // Prevent body scroll
      document.body.style.overflow = "hidden";

      // Animate overlay
      gsap.to(overlay, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });

      // Animate menu panel
      gsap.to(menu, {
        x: 0,
        duration: 0.4,
        ease: "power3.out",
      });

      // Animate menu items with stagger
      gsap.fromTo(
        items,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          ease: "power3.out",
          stagger: 0.08,
          delay: 0.2,
        },
      );
    } else {
      // Restore body scroll
      document.body.style.overflow = "";

      // Animate out
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });

      gsap.to(menu, {
        x: "100%",
        duration: 0.3,
        ease: "power2.in",
      });
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <>
      <header className="top-0 z-40 sticky bg-background/80 backdrop-blur-md border-stroke border-b">
        <Container className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex justify-center items-center bg-primary rounded-xl w-9 h-9 font-bold text-[#1a1625] text-sm">
              {siteConfig.shortName}
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">
                {siteConfig.name}
              </p>
              <p className="text-foreground-muted text-xs">
                {siteConfig.title}
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-foreground-muted text-sm">
            {navLinks.slice(1, 5).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-foreground transition ${
                  pathname === link.href ? "text-primary" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/contact"
              className="hidden sm:inline-flex bg-primary hover:bg-primary-strong px-5 py-2 rounded-full font-semibold text-[#1a1625] text-sm transition"
            >
              Démarrer un projet
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="md:hidden flex justify-center items-center bg-card/50 border border-stroke hover:border-primary rounded-full w-9 h-9 text-foreground-muted hover:text-foreground transition-colors"
              aria-label="Ouvrir le menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{ opacity: 0 }}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div
        ref={menuRef}
        className="md:hidden top-0 right-0 bottom-0 z-50 fixed flex flex-col bg-background border-stroke border-l w-70"
        style={{ transform: "translateX(100%)" }}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
      >
        {/* Menu Header */}
        <div className="flex justify-between items-center p-4 border-stroke border-b">
          <span className="font-semibold text-foreground">Menu</span>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="flex justify-center items-center bg-card/50 border border-stroke hover:border-primary rounded-full w-9 h-9 text-foreground-muted hover:text-foreground transition-colors"
            aria-label="Fermer le menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Menu Links */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-2">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <Link
                  ref={(el) => {
                    if (el) menuItemsRef.current[index] = el;
                  }}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-foreground-muted hover:bg-card hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Menu Footer */}
        <div className="p-4 border-stroke border-t">
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block bg-primary hover:bg-primary-strong px-5 py-3 rounded-full w-full font-semibold text-[#1a1625] text-sm text-center transition"
          >
            Démarrer un projet
          </Link>
        </div>
      </div>
    </>
  );
}
