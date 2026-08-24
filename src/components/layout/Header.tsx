"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
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
          ? "border-b border-white/[0.06] bg-[#08080a]/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="section-padding mx-auto flex h-16 max-w-7xl items-center justify-between lg:h-[4.5rem]">
        <a href="#" className="group flex items-center gap-2.5" aria-label={`${SITE.name} — início`}>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600">
            <span className="font-mono text-xs font-bold text-white">SH</span>
          </div>
          <span className="text-sm font-semibold tracking-tight text-zinc-100">
            {SITE.name}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="#contato" size="sm">
            Falar sobre projeto
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-300 transition-colors hover:bg-white/[0.04] md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-30 bg-[#08080a]/95 backdrop-blur-xl transition-all duration-300 md:hidden",
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <nav className="flex flex-col gap-1 p-6" aria-label="Navegação mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-3 text-base text-zinc-300 transition-colors hover:bg-white/[0.04] hover:text-zinc-100"
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
