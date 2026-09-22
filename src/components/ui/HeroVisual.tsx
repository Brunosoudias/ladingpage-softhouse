"use client";

import { motion, useReducedMotion } from "framer-motion";

type HeroVisualProps = {
  className?: string;
};

const NODES = [
  { id: "app", label: "Aplicação", x: 72, y: 88 },
  { id: "api", label: "API", x: 200, y: 56 },
  { id: "auth", label: "Auth", x: 328, y: 88 },
  { id: "data", label: "Dados", x: 120, y: 200 },
  { id: "queue", label: "Fila", x: 280, y: 200 },
  { id: "integ", label: "Integrações", x: 200, y: 300 },
] as const;

const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [0, 3],
  [2, 4],
  [3, 5],
  [4, 5],
  [1, 5],
];

export function HeroVisual({ className }: HeroVisualProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={className} aria-hidden="true">
      <div className="relative mx-auto aspect-[5/4] w-full max-w-lg lg:max-w-none">
        <div className="absolute inset-0 rounded-2xl border border-[var(--line)] bg-[var(--panel-1)]" />
        <div
          className="absolute inset-0 rounded-2xl opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 65% 45% at 50% 38%, var(--accent-glow), transparent 72%)",
          }}
        />
        <div
          className="absolute inset-3 rounded-xl opacity-50"
          style={{
            backgroundImage: `
              linear-gradient(var(--grid-line) 1px, transparent 1px),
              linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)
            `,
            backgroundSize: "24px 24px",
          }}
        />

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 400 360"
          fill="none"
          role="presentation"
        >
          {EDGES.map(([from, to], i) => {
            const a = NODES[from];
            const b = NODES[to];
            const length = Math.hypot(b.x - a.x, b.y - a.y);
            return (
              <motion.line
                key={`${a.id}-${b.id}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke="var(--line-strong)"
                strokeWidth="1"
                strokeDasharray={length}
                initial={
                  prefersReducedMotion
                    ? { strokeDashoffset: 0, opacity: 1 }
                    : { strokeDashoffset: length, opacity: 0 }
                }
                animate={{ strokeDashoffset: 0, opacity: 1 }}
                transition={{
                  duration: 0.85,
                  delay: 0.12 + i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            );
          })}

          {NODES.map((node, i) => (
            <motion.g
              key={node.id}
              initial={
                prefersReducedMotion ? false : { opacity: 0, scale: 0.94 }
              }
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.45,
                delay: 0.4 + i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ transformOrigin: `${node.x}px ${node.y}px` }}
            >
              <rect
                x={node.x - 44}
                y={node.y - 16}
                width="88"
                height="32"
                rx="6"
                fill="var(--panel-opaque)"
                stroke="var(--line-strong)"
                strokeWidth="1"
              />
              <text
                x={node.x}
                y={node.y + 4}
                textAnchor="middle"
                fill="var(--fg-2)"
                style={{
                  fontSize: "11px",
                  fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                  fontWeight: 500,
                  letterSpacing: "0.01em",
                }}
              >
                {node.label}
              </text>
            </motion.g>
          ))}
        </svg>

        <CornerMarks />

        <motion.div
          className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-lg border border-[var(--line)] bg-[var(--panel-opaque)]/92 px-3.5 py-2.5 backdrop-blur-sm"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[11px] font-medium tracking-wide text-[var(--fg-3)]">
            Arquitetura sob medida
          </p>
          <p className="shrink-0 font-mono text-[10px] text-[var(--fg-5)]">
            sistemas · APIs · dados
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function CornerMarks() {
  const arm = "h-3 w-3 border-[var(--fg-5)]";
  return (
    <>
      <span className={`absolute left-3 top-3 border-l border-t ${arm}`} />
      <span className={`absolute right-3 top-3 border-r border-t ${arm}`} />
      <span className={`absolute bottom-14 left-3 border-b border-l ${arm}`} />
      <span className={`absolute bottom-14 right-3 border-b border-r ${arm}`} />
    </>
  );
}
