'use client'
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import clsx from "clsx";
import ThemeToggle from "./ThemeToggle";

const links = [
  { id: "services", label: "Services" },
  { id: "pricing", label: "Pricing" },
  { id: "str", label: "Short-Term Rentals" },
  { id: "faq", label: "FAQ" },
  { id: "policies", label: "Policies" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [infoTab, setInfoTab] = useState("faq");

  // Highlight the nav link for the section crossing the middle of the viewport.
  // FAQ and Policies share one tabbed section, so the selected tab decides which lights up.
  useEffect(() => {
    const targets = ["home", ...links.map(l => l.id).filter(id => id !== "faq")]
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id === "home" ? null : entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    targets.forEach(t => observer.observe(t));

    const onTab = (e: Event) => setInfoTab((e as CustomEvent<string>).detail);
    window.addEventListener("info-tab", onTab);
    return () => {
      observer.disconnect();
      window.removeEventListener("info-tab", onTab);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (id: string) => {
    if (active !== "policies") return active === id;
    if (id === "faq") return infoTab === "faq";
    if (id === "policies") return infoTab !== "faq";
    return false;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/90 backdrop-blur-md">
      <a
        href="#main"
        className="btn btn-primary sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3"
      >
        Skip to content
      </a>

      <div className="wrap flex h-[var(--header-h)] items-center justify-between gap-6">
        <a href="#home" className="shrink-0" aria-label="Maid for Cleaning LLC, back to top">
          <Image src="/logo-mark.png" alt="" width={720} height={470} priority className="h-12 w-auto dark:hidden" />
          <Image src="/logo-mark-dark.png" alt="" width={720} height={470} className="hidden h-12 w-auto dark:block" />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {links.map(l => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  aria-current={isActive(l.id) ? "location" : undefined}
                  className={clsx(
                    "relative block px-3 py-2 text-[0.9375rem] font-medium transition-colors duration-200 hover:text-brand",
                    "after:absolute after:inset-x-3 after:bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-brand after:transition-transform after:duration-200 after:ease-out",
                    isActive(l.id) ? "text-brand after:scale-x-100" : "text-ink"
                  )}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a href="tel:+15551234567" className="hidden items-center gap-2 font-bold text-ink transition-colors hover:text-brand xl:flex">
            <Phone aria-hidden className="size-4 text-brand" />
            (555) 123-4567
          </a>
          <ThemeToggle />
          <a href="#contact" className="btn btn-primary hidden sm:inline-flex">
            Get a quote
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-control border border-line text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(o => !o)}
          >
            {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="menu-panel border-t border-line bg-surface lg:hidden">
          <ul className="wrap py-2">
            {links.map(l => (
              <li key={l.id} className="border-b border-line last:border-0">
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="flex min-h-13 items-center text-lg font-bold text-ink hover:text-brand"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
