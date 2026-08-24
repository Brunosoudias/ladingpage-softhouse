"use client";

import { useReducedMotion } from "framer-motion";

const EASE = [0.25, 0.1, 0.25, 1] as const;

export function useMotionSafe() {
  const prefersReducedMotion = useReducedMotion();

  return {
    fadeUp: prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.5, ease: EASE },
        },
    fadeIn: prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.4 },
        },
    stagger: prefersReducedMotion ? 0 : 0.08,
    duration: prefersReducedMotion ? 0 : 0.5,
  };
}
