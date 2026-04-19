"use client";

import { motion } from "framer-motion";
import {
  Server,
  Map,
  Plane,
  Database,
  Layers,
  Cloud,
  type LucideProps,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { EXPERTISE } from "@/lib/data/expertise";
import { cn } from "@/lib/utils";

/* ─── Icon map — keeps data file free of React imports ─── */
const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  Server,
  Map,
  Plane,
  Database,
  Layers,
  Cloud,
};

/* ─── Animation ─── */
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

/**
 * Core Expertise section.
 */
export function Expertise() {
  return (
    <section id="expertise" className="py-28 border-t border-[var(--border)]">
      <Container>
        <SectionHeader
          eyebrow="Core Expertise"
          heading="What I build, and how."
          description="A senior engineer's toolkit — shaped by years of working across aviation systems, geospatial platforms, and enterprise backend architecture."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {EXPERTISE.map((item) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className={cn(
                  "group relative flex flex-col gap-4 rounded-xl p-6",
                  "border border-[var(--border)] bg-[var(--surface)]",
                  "transition-colors duration-200",
                  "hover:border-[var(--muted-foreground)]/30 hover:bg-[var(--muted)]/40"
                )}
              >
                {/* Icon */}
                <div
                  className={cn(
                    "flex size-10 items-center justify-center rounded-lg",
                    "bg-[var(--muted)] text-[var(--foreground)]",
                    "transition-colors group-hover:bg-[var(--foreground)] group-hover:text-[var(--background)]"
                  )}
                >
                  {Icon && <Icon className="size-4.5" strokeWidth={1.5} />}
                </div>

                {/* Text */}
                <div className="flex-1 space-y-2">
                  <h3 className="text-sm font-semibold text-[var(--foreground)] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)] leading-[1.75]">
                    {item.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="default">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
