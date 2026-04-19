"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { PROJECTS, type Project } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

/* ─── Animation ─── */
const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

/* ─── GitHub SVG icon ─── */
function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("fill-current", className)}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

/* ─── Featured (large) card ─── */
function FeaturedCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={reveal}
      className={cn(
        "group relative flex flex-col justify-between gap-8 rounded-xl p-8 md:p-10",
        "border border-[var(--border)] bg-[var(--surface)]",
        "lg:flex-row lg:items-end",
        "transition-colors hover:border-[var(--muted-foreground)]/30 hover:bg-[var(--muted)]/30"
      )}
    >
      {/* Left: text */}
      <div className="flex-1 space-y-4 max-w-xl">
        <div className="flex items-center gap-2">
          <Badge variant="solid">{project.category}</Badge>
          <span className="text-xs font-mono text-[var(--muted-foreground)]">
            {project.tagline}
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-[var(--foreground)] leading-snug">
          {project.title}
        </h3>
        <p className="text-sm text-[var(--muted-foreground)] leading-[1.8] max-w-lg">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((t) => (
            <Badge key={t} variant="default">
              {t}
            </Badge>
          ))}
        </div>
      </div>

      {/* Right: links */}
      <div className="flex items-center gap-3 shrink-0">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} on GitHub`}
            className={cn(
              "flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-colors",
              "border border-[var(--border)] text-[var(--muted-foreground)]",
              "hover:text-[var(--foreground)] hover:border-[var(--foreground)]/40"
            )}
          >
            <GitHubIcon className="size-3.5" />
            View on GitHub
          </a>
        )}
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live demo`}
            className={cn(
              "flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-colors",
              "bg-[var(--accent)] text-[var(--accent-foreground)]",
              "hover:opacity-85"
            )}
          >
            Live Demo
            <ArrowUpRight className="size-3.5" />
          </a>
        )}
      </div>

      {/* Corner arrow indicator */}
      <ArrowUpRight
        className={cn(
          "absolute top-6 right-6 size-4 text-[var(--muted-foreground)]",
          "opacity-0 group-hover:opacity-100 transition-opacity"
        )}
        aria-hidden
      />
    </motion.article>
  );
}

/* ─── Regular project card ─── */
function ProjectCard({ project }: { project: Project }) {
  const linkHref = project.links.live ?? project.links.github ?? "#";

  return (
    <motion.article
      variants={reveal}
      className={cn(
        "group relative flex flex-col justify-between gap-5 rounded-xl p-6",
        "border border-[var(--border)] bg-[var(--surface)]",
        "transition-colors hover:border-[var(--muted-foreground)]/30 hover:bg-[var(--muted)]/30"
      )}
    >
      {/* Category + external link */}
      <div className="flex items-start justify-between gap-2">
        <Badge variant="outline">{project.category}</Badge>
        {linkHref !== "#" && (
          <a
            href={linkHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} — open link`}
            className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          >
            <ArrowUpRight className="size-4" />
          </a>
        )}
      </div>

      {/* Text */}
      <div className="flex-1 space-y-2">
        <h3 className="text-sm font-semibold text-[var(--foreground)] leading-snug">
          {project.title}
        </h3>
        <p className="text-sm text-[var(--muted-foreground)] leading-[1.75]">
          {project.description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {project.tags.map((t) => (
          <Badge key={t} variant="default">
            {t}
          </Badge>
        ))}
      </div>

      {/* GitHub link if no live link */}
      {project.links.github && !project.links.live && (
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex items-center gap-1.5 text-xs text-[var(--muted-foreground)]",
            "hover:text-[var(--foreground)] transition-colors font-mono"
          )}
        >
          <GitHubIcon className="size-3" />
          View source
        </a>
      )}
    </motion.article>
  );
}

/**
 * Featured Projects section.
 */
export function Projects() {
  const featured = PROJECTS.find((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 border-t border-[var(--border)]">
      <Container>
        <SectionHeader
          eyebrow="Featured Projects"
          heading="Selected work."
          description="A cross-section of projects across aviation software, geospatial platforms, and enterprise backend systems. Replace placeholder links and descriptions with real details."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-5"
        >
          {/* Featured card — full width */}
          {featured && <FeaturedCard project={featured} />}

          {/* Grid of remaining cards */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          )}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://github.com/shalaka-silva"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors",
              "border border-[var(--border)] text-[var(--muted-foreground)]",
              "hover:text-[var(--foreground)] hover:border-[var(--foreground)]/40"
            )}
          >
            <GitHubIcon className="size-4" />
            More projects on GitHub
            <ArrowUpRight className="size-3.5" />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
