"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function HashScroller() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    const scroll = () => {
      const target = document.getElementById(hash);
      if (!target) return false;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      return true;
    };

    if (scroll()) return;
    const retry = window.setTimeout(scroll, 60);
    return () => window.clearTimeout(retry);
  }, [pathname]);

  return null;
}
