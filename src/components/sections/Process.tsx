"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/lib/constants";
import { useMotionSafe } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Process() {
  const { fadeUp, stagger } = useMotionSafe();

  return (
    <section id="processo" className="py-20 sm:py-28">
      <div className="section-padding mx-auto max-w-7xl">
        <SectionHeading
          title="Do problema ao software."
          className="mb-16"
        />

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute left-0 right-0 top-[2.75rem] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="grid grid-cols-6 gap-4">
              {PROCESS_STEPS.map((step, i) => (
                <motion.div
                  key={step.number}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * stagger }}
                  className="relative text-center"
                >
                  <div className="relative z-10 mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-indigo-500/30 bg-[#08080a] font-mono text-xs font-medium text-indigo-400">
                    {step.number}
                  </div>
                  <h3 className="mb-2 text-sm font-medium text-zinc-100">
                    {step.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-zinc-500">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/tablet vertical timeline */}
        <div className="lg:hidden">
          <div className="relative ml-5 border-l border-white/[0.08] pl-8">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * stagger }}
                className={cn("relative pb-10 last:pb-0")}
              >
                <div className="absolute -left-[2.65rem] flex h-8 w-8 items-center justify-center rounded-full border border-indigo-500/30 bg-[#08080a] font-mono text-[10px] font-medium text-indigo-400">
                  {step.number}
                </div>
                <h3 className="mb-1 text-base font-medium text-zinc-100">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-500">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
