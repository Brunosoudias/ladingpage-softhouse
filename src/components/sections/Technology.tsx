"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TECHNOLOGIES } from "@/lib/constants";
import { useMotionSafe } from "@/lib/motion";

export function Technology() {
  const { fadeUp, stagger } = useMotionSafe();

  return (
    <section className="border-y border-[var(--line)] py-16 sm:py-24">
      <div className="section-padding mx-auto max-w-7xl">
        <SectionHeading
          title="Tecnologia certa para cada desafio."
          subtitle="Tecnologia é ferramenta. O objetivo é resolver o problema."
          align="center"
          className="mb-12"
        />

        <motion.div
          {...fadeUp}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {TECHNOLOGIES.map((tech, i) => (
            <motion.span
              key={tech}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * stagger }}
              className="rounded-lg border border-[var(--line)] bg-[var(--panel-2)] px-4 py-2 font-mono text-sm text-[var(--fg-4)] transition-all duration-200 hover:border-[var(--line-hover)] hover:text-[var(--fg-2)]"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
