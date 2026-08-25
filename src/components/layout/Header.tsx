"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { SITE } from "@/lib/constants";
import { getNavLinks } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = getNavLinks();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-[var(--line)] bg-[var(--header-bg)] backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="section-padding mx-auto flex h-16 max-w-7xl items-center justify-between lg:h-[4.5rem]">
        <a href="#" className="group flex items-center gap-2.5" aria-label={`${SITE.name} — início`}>
          <span className="text-sm font-semibold tracking-tight text-[var(--fg-1)]">
            {SITE.name}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--fg-4)] transition-colors hover:text-[var(--fg-1)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button href="#contato" size="sm">
            Falar sobre projeto
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--line-strong)] text-[var(--fg-3)] transition-colors hover:bg-[var(--panel-hover)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-30 bg-[var(--header-bg-solid)] backdrop-blur-xl transition-all duration-300 md:hidden",
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <nav className="flex flex-col gap-1 p-6" aria-label="Navegação mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-3 text-base text-[var(--fg-3)] transition-colors hover:bg-[var(--panel-hover)] hover:text-[var(--fg-1)]"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 px-4">
            <Button href="#contato" className="w-full" onClick={() => setMobileOpen(false)}>
              Falar sobre projeto
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
