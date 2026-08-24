"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  GitBranch,
  TestTube2,
  Shield,
  Plug,
  Database,
  Rocket,
  Activity,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { QUALITY_ITEMS } from "@/lib/constants";
import { useMotionSafe } from "@/lib/motion";

const QUALITY_ICONS = [
  Code2,
  Layers,
  GitBranch,
  TestTube2,
  Shield,
  Plug,
  Database,
  Rocket,
  Activity,
];

export function Quality() {
  const { fadeUp, stagger } = useMotionSafe();

  return (
    <section className="py-20 sm:py-28">
      <div className="section-padding mx-auto max-w-7xl">
        <SectionHeading
          title="Software desenvolvido para funcionar hoje e continuar funcionando amanhã."
          align="center"
          className="mb-14"
        />

        <div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-3">
          {QUALITY_ITEMS.map((item, i) => {
            const Icon = QUALITY_ICONS[i];
            return (
              <motion.div
                key={item}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * stagger }}
                className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-3.5 transition-colors hover:border-white/[0.1]"
              >
                <Icon size={16} className="shrink-0 text-zinc-600" />
                <span className="text-sm text-zinc-400">{item}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
