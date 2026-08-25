"use client";

import { motion, useReducedMotion } from "framer-motion";

type HeroVisualProps = {
  className?: string;
};

export function HeroVisual({ className }: HeroVisualProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={className} aria-hidden="true">
      <div className="relative mx-auto aspect-square max-w-lg lg:max-w-none">
        {/* Glow background */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--accent-glow)] via-[var(--accent-glow)] to-transparent blur-3xl" />

        {/* Main dashboard card */}
        <motion.div
          className="glass-dark absolute left-1/2 top-1/2 w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-xl p-4 shadow-2xl"
          animate={prefersReducedMotion ? {} : { y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="mb-3 flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-amber-400/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />
            <span className="ml-2 font-mono text-[10px] text-zinc-400">dashboard.tsx</span>
          </div>
          <div className="space-y-2 font-mono text-[11px] leading-relaxed text-zinc-400">
            <p>
              <span className="text-zinc-300">export</span>{" "}
              <span className="text-zinc-400">function</span>{" "}
              <span className="text-zinc-200">Dashboard</span>
              <span className="text-zinc-400">()</span> {"{"}
            </p>
            <p className="pl-4">
              <span className="text-zinc-300">return</span>{" "}
              <span className="text-zinc-400">&lt;</span>
              <span className="text-emerald-400">Analytics</span>
              <span className="text-zinc-400"> /&gt;</span>
            </p>
            <p>{"}"}</p>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[68, 42, 91].map((val, i) => (
              <div key={i} className="rounded-md bg-white/[0.06] p-2">
                <div className="mb-1 h-1 rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-zinc-400 to-zinc-300"
                    style={{ width: `${val}%` }}
                  />
                </div>
                <p className="font-mono text-[9px] text-zinc-400">{val}%</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* API node - top right */}
        <motion.div
          className="glass-dark absolute -right-2 top-8 rounded-lg px-3 py-2 sm:right-0"
          animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/20">
              <span className="font-mono text-[10px] text-emerald-400">API</span>
            </div>
            <div>
              <p className="text-[10px] font-medium text-zinc-300">REST</p>
              <p className="font-mono text-[9px] text-emerald-400">200 OK</p>
            </div>
          </div>
        </motion.div>

        {/* Database node - bottom left */}
        <motion.div
          className="glass-dark absolute -left-2 bottom-12 rounded-lg px-3 py-2 sm:left-0"
          animate={prefersReducedMotion ? {} : { y: [0, -5, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-cyan-500/20">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
                <ellipse cx="12" cy="6" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5" />
                <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="currentColor" strokeWidth="1.5" />
                <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            <div>
              <p className="text-[10px] font-medium text-zinc-300">PostgreSQL</p>
              <p className="font-mono text-[9px] text-cyan-400">connected</p>
            </div>
          </div>
        </motion.div>

        {/* Integration node - bottom right */}
        <motion.div
          className="glass-dark absolute bottom-4 right-4 rounded-lg px-3 py-2"
          animate={prefersReducedMotion ? {} : { y: [0, 4, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <p className="text-[10px] font-medium text-zinc-300">Integração</p>
          <p className="font-mono text-[9px] text-zinc-300">3 sistemas sync</p>
        </motion.div>

        {/* Connection lines SVG */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 400 400"
          fill="none"
        >
          <motion.path
            d="M200 200 L320 80"
            stroke="url(#lineGrad)"
            strokeWidth="1"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.path
            d="M200 200 L60 280"
            stroke="url(#lineGrad)"
            strokeWidth="1"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, delay: 0.8 }}
          />
          <motion.path
            d="M200 200 L300 340"
            stroke="url(#lineGrad)"
            strokeWidth="1"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, delay: 1.1 }}
          />
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a1a1aa" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#71717a" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
