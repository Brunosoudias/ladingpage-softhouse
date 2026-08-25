"use client";

import { motion } from "framer-motion";
import { TRUST_INDICATORS } from "@/lib/constants";
import { useMotionSafe } from "@/lib/motion";

export function TrustIndicators() {
  const { fadeIn } = useMotionSafe();

  return (
    <section aria-label="Indicadores de confiança" className="border-y border-[var(--line)] bg-[var(--panel-1)]">
      <motion.div
        {...fadeIn}
        className="section-padding mx-auto max-w-7xl py-6"
      >
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {TRUST_INDICATORS.map((item, i) => (
            <div key={item} className="flex items-center gap-8">
              <span className="text-xs font-medium tracking-wide text-[var(--fg-4)] sm:text-sm">
                {item}
              </span>
              {i < TRUST_INDICATORS.length - 1 && (
                <span className="hidden h-1 w-1 rounded-full bg-zinc-700 sm:block" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
