"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ_ITEMS } from "@/lib/constants";
import { useMotionSafe } from "@/lib/motion";
import { cn } from "@/lib/utils";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[var(--line)] last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-[var(--fg-1)]"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-medium text-[var(--fg-2)] sm:text-base">
          {question}
        </span>
        <ChevronDown
          size={18}
          className={cn(
            "shrink-0 text-[var(--fg-4)] transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-[var(--fg-4)]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { fadeUp } = useMotionSafe();

  return (
    <section className="py-16 sm:py-24">
      <div className="section-padding mx-auto max-w-3xl">
        <SectionHeading title="Perguntas frequentes" align="center" className="mb-12" />

        <motion.div {...fadeUp} className="rounded-xl border border-[var(--line)] bg-[var(--panel-2)] px-6">
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
