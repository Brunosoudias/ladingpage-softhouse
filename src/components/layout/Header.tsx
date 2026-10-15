"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { getNavLinks } from "@/lib/nav";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const pathname = usePathname();
  const mobileOpen = menuPath === pathname;
  const navLinks = getNavLinks();
  const closeMenu = () => setMenuPath(null);

  const isCurrent = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#") || href.includes("#")) return false;
    return pathname === href;
  };

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

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuPath(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
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
        <Link href="/" className="group flex items-center gap-2.5" aria-label={`${siteConfig.name} — início`}>
          <span className="text-sm font-semibold tracking-tight text-[var(--fg-1)]">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isCurrent(link.href) ? "page" : undefined}
              className={cn(
                "text-sm transition-colors hover:text-[var(--fg-1)]",
                isCurrent(link.href) ? "text-[var(--fg-1)]" : "text-[var(--fg-4)]"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button href="/#contato" size="sm">
            Solicitar orçamento
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--line-strong)] text-[var(--fg-3)] transition-colors hover:bg-[var(--panel-hover)]"
            onClick={() => setMenuPath(mobileOpen ? null : pathname)}
            aria-expanded={mobileOpen}
            aria-controls="menu-mobile"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 top-16 z-30 bg-[var(--header-bg-solid)] backdrop-blur-xl transition-all duration-300 lg:hidden",
          mobileOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <nav id="menu-mobile" className="flex flex-col gap-1 p-6" aria-label="Navegação mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isCurrent(link.href) ? "page" : undefined}
              className="rounded-lg px-4 py-3 text-base text-[var(--fg-3)] transition-colors hover:bg-[var(--panel-hover)] hover:text-[var(--fg-1)]"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 px-4">
            <Button href="/#contato" className="w-full" onClick={closeMenu}>
              Solicitar orçamento
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
