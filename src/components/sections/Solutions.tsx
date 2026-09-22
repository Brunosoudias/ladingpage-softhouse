"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Box,
  Cloud,
  GitMerge,
  Layout,
  Monitor,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SOLUTIONS } from "@/lib/constants";
import { useMotionSafe } from "@/lib/motion";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, LucideIcon> = {
  layout: Layout,
  monitor: Monitor,
  cloud: Cloud,
  users: Users,
  "bar-chart": BarChart3,
  "git-merge": GitMerge,
  zap: Zap,
  box: Box,
};

export function Solutions() {
  const { fadeUp, stagger } = useMotionSafe();

  return (
    <section id="solucoes" className="py-16 sm:py-24">
      <div className="section-padding mx-auto max-w-7xl">
        <SectionHeading
          title="Da ideia ao software em produção."
          subtitle="Construímos soluções digitais sob medida para diferentes estágios e necessidades do negócio."
          className="mb-14"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SOLUTIONS.map((solution, i) => {
            const Icon = ICON_MAP[solution.icon];
            return (
              <motion.article
                key={solution.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * stagger }}
                className={cn(
                  "group rounded-xl border border-[var(--line)] bg-[var(--panel-2)] p-6 transition-all duration-300",
                  "hover:-translate-y-0.5 hover:border-[var(--line-hover)] hover:bg-[var(--panel-hover)]"
                )}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--panel-hover)] text-[var(--fg-2)] transition-colors">
                  <Icon size={20} />
                </div>
                <h3 className="mb-2 text-base font-medium text-[var(--fg-1)]">
                  {solution.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--fg-4)]">
                  {solution.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
