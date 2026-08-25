"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "br-tecnologia-theme";

type Theme = "dark" | "light";

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function getSnapshot(): Theme {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

// No servidor (e antes da hidratação) assumimos o tema escuro padrão — o
// script inline no <head> já corrige o atributo antes da primeira pintura
// caso o usuário tenha escolhido o tema claro anteriormente.
function getServerSnapshot(): Theme {
  return "dark";
}

function setTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // localStorage indisponível (modo privado, etc.) — segue sem persistir.
  }
}

export function ThemeToggle({ className }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label={theme === "light" ? "Ativar tema escuro" : "Ativar tema claro"}
      className={cn(
        "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--line-strong)] text-[var(--fg-4)] transition-colors hover:border-[var(--line-hover)] hover:text-[var(--fg-1)]",
        className
      )}
    >
      {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
