"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getPublishedProjects } from "@/data/projects";
import type { PortfolioProject } from "@/types/portfolio";
import { useMotionSafe } from "@/lib/motion";
import { cn } from "@/lib/utils";

function ProjectMockup({
  gradient,
  accent,
  category,
}: {
  gradient: string;
  accent: string;
  category: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[16/10] overflow-hidden rounded-lg bg-gradient-to-br",
        gradient
      )}
    >
      <div className="absolute inset-3 rounded-md border border-white/[0.08] bg-[#0c0c0e]/80 backdrop-blur-sm">
        <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-3 py-2">
          <div className="h-1.5 w-1.5 rounded-full bg-red-400/50" />
          <div className="h-1.5 w-1.5 rounded-full bg-amber-400/50" />
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-400/50" />
        </div>
        <div className="p-3">
          <div className="mb-2 flex items-center justify-between">
            <div className="h-2 w-16 rounded bg-white/10" />
            <div
              className="rounded px-2 py-0.5 font-mono text-[8px]"
              style={{ backgroundColor: `${accent}20`, color: accent }}
            >
              {category}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((n) => (
              <div key={n} className="rounded bg-white/[0.04] p-2">
                <div
                  className="mb-1 h-8 rounded"
                  style={{ backgroundColor: `${accent}10` }}
                />
                <div className="h-1 w-2/3 rounded bg-white/10" />
              </div>
            ))}
          </div>
          <div className="mt-2 h-12 rounded bg-white/[0.03]" />
        </div>
      </div>
    </div>
  );
}

function ProjectVisual({ project }: { project: PortfolioProject }) {
  if (project.image) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-white/[0.06] bg-[#0c0c0e]">
        <Image
          src={project.image}
          alt={`Preview do projeto ${project.name}`}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    );
  }

  return (
    <ProjectMockup
      gradient={project.gradient}
      accent={project.accent}
      category={project.category}
    />
  );
}

function ProjectCard({
  project,
  index,
  stagger,
  fadeUp,
}: {
  project: PortfolioProject;
  index: number;
  stagger: number;
  fadeUp: ReturnType<typeof useMotionSafe>["fadeUp"];
}) {
  const hasLink = Boolean(project.url);

  return (
    <motion.article
      {...fadeUp}
      transition={{ ...fadeUp.transition, delay: index * stagger }}
      className="group overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]"
    >
      <div className="p-4">
        <ProjectVisual project={project} />
      </div>
      <div className="border-t border-white/[0.06] p-5">
        <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">
          {project.category}
        </span>
        <h3 className="mt-1 text-lg font-medium text-zinc-100">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-500">
          {project.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-zinc-500"
            >
              {tech}
            </span>
          ))}
        </div>
        {hasLink ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm text-zinc-400 transition-colors group-hover:text-indigo-400"
          >
            Ver projeto
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        ) : (
          <span className="mt-4 inline-block text-sm text-zinc-600">Em breve</span>
        )}
      </div>
    </motion.article>
  );
}

export function Portfolio() {
  const projects = getPublishedProjects();
  const { fadeUp, stagger } = useMotionSafe();

  if (projects.length === 0) {
    return null;
  }

  return (
    <section id="projetos" className="py-20 sm:py-28">
      <div className="section-padding mx-auto max-w-7xl">
        <SectionHeading
          title="Projetos que transformam ideias em produtos."
          subtitle="Alguns dos sistemas e produtos digitais que desenvolvemos."
          className="mb-14"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={i}
              stagger={stagger}
              fadeUp={fadeUp}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
