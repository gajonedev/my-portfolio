"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  m,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { contactHref, serviceFromPath } from "@/lib/acquisition";
import Container from "./Container";
import PillButton from "./home/PillButton";
import LogoMark from "./ui/LogoMark";
import MobileMenu from "./MobileMenu";
import { navLinks, siteConfig } from "@/data";

// Desktop: every page except Accueil (the logo) and Contact (the button).
const menuLinks = navLinks.slice(1, 6);

// The open menu owns one history entry, so the phone's back button closes it
// instead of leaving the page. Every other way of closing pops that entry.
const MENU_STATE = "ngMenu";
const menuInHistory = () =>
  typeof window !== "undefined" && Boolean(window.history.state?.[MENU_STATE]);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const pendingHref = useRef<string | null>(null);
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

  const openMenu = (button: HTMLButtonElement) => {
    const rect = button.getBoundingClientRect();
    setOrigin({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    setIsOpen(true);
    // keep Next.js' own state on the entry, only flag it as the menu
    window.history.pushState({ ...window.history.state, [MENU_STATE]: true }, "");
  };

  // Cross, Escape, resize: going back closes the menu (popstate below).
  const closeMenu = () => {
    if (menuInHistory()) window.history.back();
    else setIsOpen(false);
  };

  // A link: leave the menu entry first, then navigate, so the history keeps
  // no trace of the menu.
  const navigateFromMenu = (href: string) => {
    if (menuInHistory()) {
      pendingHref.current = href;
      window.history.back();
    } else {
      setIsOpen(false);
      router.push(href);
    }
  };

  // A reload while the menu was open leaves a flagged entry: unflag it.
  useEffect(() => {
    if (!menuInHistory()) return;
    const state = { ...window.history.state };
    delete state[MENU_STATE];
    window.history.replaceState(state, "");
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onPop = () => {
      setIsOpen(false);
      const href = pendingHref.current;
      pendingHref.current = null;
      if (href) router.push(href);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [isOpen, router]);

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
        if (menuInHistory()) window.history.back();
        else setIsOpen(false);
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
      if (!window.matchMedia("(min-width: 1024px)").matches) return;
      if (menuInHistory()) window.history.back();
      else setIsOpen(false);
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
          data-scrolled={scrolled || undefined}
          className={`header-bar transition-colors duration-300 ${
            scrolled ? "bg-[rgba(5,5,7,0.8)] backdrop-blur-xl" : "bg-transparent"
          }`}
        >
          <Container className="flex justify-between items-center py-4">
            <Link href="/" className="group flex items-center gap-3">
              <LogoMark />
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
              <div className="hidden lg:block">
                <PillButton href={contextualContact} className="pill-sm">
                  Démarrer un projet
                </PillButton>
              </div>
              <button
                ref={triggerRef}
                type="button"
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                onClick={(event) => openMenu(event.currentTarget)}
                className="lg:hidden burger"
                aria-label="Ouvrir le menu"
              >
                <span aria-hidden="true" className="burger-lines">
                  <span />
                  <span />
                </span>
              </button>
            </div>
          </Container>
        </div>
      </m.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            pathname={pathname}
            contactHref={contextualContact}
            origin={origin}
            dialogRef={dialogRef}
            onClose={closeMenu}
            onNavigate={navigateFromMenu}
          />
        )}
      </AnimatePresence>
    </>
  );
}
