"use client";

import { motion } from "framer-motion";
import { useMotionSafe } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  const motionProps = useMotionSafe();

  return (
    <motion.div
      {...motionProps.fadeUp}
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent-light">
          {label}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
