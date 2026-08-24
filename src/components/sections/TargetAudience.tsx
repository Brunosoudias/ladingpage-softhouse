"use client";

import { motion } from "framer-motion";
import { Building2, Rocket, TrendingUp, Layers, Handshake } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AUDIENCES } from "@/lib/constants";
import { useMotionSafe } from "@/lib/motion";

const AUDIENCE_ICONS = [Building2, Rocket, TrendingUp, Layers, Handshake];

export function TargetAudience() {
  const { fadeUp, stagger } = useMotionSafe();

  return (
    <section className="py-20 sm:py-28">
      <div className="section-padding mx-auto max-w-7xl">
        <SectionHeading
          title="Se você tem um problema, provavelmente podemos construir a solução."
          align="center"
          className="mb-14"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCES.map((audience, i) => {
            const Icon = AUDIENCE_ICONS[i];
            return (
              <motion.article
                key={audience.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * stagger }}
                className="glass glass-hover rounded-xl p-6 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] text-zinc-400">
                  <Icon size={18} />
                </div>
                <h3 className="mb-2 text-base font-medium text-zinc-100">
                  {audience.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-500">
                  {audience.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
