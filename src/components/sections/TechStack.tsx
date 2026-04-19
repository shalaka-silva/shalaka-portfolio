"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TECH_STACK } from "@/lib/data/techstack";
import { cn } from "@/lib/utils";

/* ─── Animation ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.03 } },
};

/**
 * Tech Stack section — grouped pills organised by category.
 * Data lives in src/lib/data/techstack.ts
 */
export function TechStack() {
  return (
    <section id="stack" className="py-28 border-t border-[var(--border)]">
      <Container>
        <SectionHeader
          eyebrow="Tech Stack"
          heading="Tools of the trade."
          description="A practical toolkit refined over 8+ years across aviation systems, geospatial platforms, and enterprise backend work."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {TECH_STACK.map((group) => (
            <motion.div key={group.category} variants={fadeUp}>
              {/* Category label */}
              <p className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-widest mb-4">
                {group.category}
              </p>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    title={item.note}
                    className={cn(
                      "inline-flex items-center rounded-md px-3 py-1.5",
                      "border border-[var(--border)] bg-[var(--surface)]",
                      "text-xs font-mono text-[var(--foreground)]",
                      "transition-colors hover:border-[var(--muted-foreground)]/50 hover:bg-[var(--muted)]",
                      "cursor-default"
                    )}
                  >
                    {item.name}
                    {item.note && (
                      <span className="ml-1.5 text-[var(--muted-foreground)] opacity-60">
                        *
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Legend for asterisk */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 text-xs text-[var(--muted-foreground)] font-mono"
        >
          * hover for context note
        </motion.p>
      </Container>
    </section>
  );
}
