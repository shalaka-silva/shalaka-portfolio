"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import {
  EXPERIENCE,
  EDUCATION,
  CERTIFICATIONS,
} from "@/lib/data/experience";
import { cn } from "@/lib/utils";

/* ─── Animation ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

/**
 * Experience section — vertical timeline of roles, plus education & certifications.
 *
 * Layout:
 * - Left column (lg): timeline of roles
 * - Right column (lg): education + certifications
 */
export function Experience() {
  return (
    <section id="experience" className="py-28 border-t border-[var(--border)]">
      <Container>
        <SectionHeader
          eyebrow="Experience"
          heading="8+ years in production."
          description="From building backend systems for aviation platforms in Dubai to modernising enterprise ERP architecture — a career shaped by technically demanding, operationally critical work."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          {/* ── Timeline (2/3 width) ────────────────────────────── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-2 relative"
          >
            {/* Vertical line */}
            <div
              aria-hidden
              className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--border)]"
            />

            <div className="space-y-10">
              {EXPERIENCE.map((entry) => (
                <motion.div
                  key={`${entry.company}-${entry.period}`}
                  variants={fadeUp}
                  className="relative pl-8"
                >
                  {/* Timeline dot */}
                  <div
                    className={cn(
                      "absolute left-0 top-[6px] flex size-[15px] items-center justify-center rounded-full border-2 bg-[var(--background)]",
                      entry.current
                        ? "border-[var(--foreground)]"
                        : "border-[var(--border)]"
                    )}
                  >
                    {entry.current && (
                      <span className="size-[5px] rounded-full bg-[var(--foreground)]" />
                    )}
                  </div>

                  {/* Entry card */}
                  <div
                    className={cn(
                      "rounded-xl border p-6 transition-colors",
                      entry.current
                        ? "border-[var(--border)] bg-[var(--surface)]"
                        : "border-[var(--border)] bg-transparent hover:bg-[var(--muted)]/30"
                    )}
                  >
                    {/* Header row */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                      <div>
                        <h3 className="text-sm font-semibold text-[var(--foreground)]">
                          {entry.role}
                        </h3>
                        <p className="text-sm text-[var(--muted-foreground)] mt-0.5">
                          {entry.company}
                          <span className="mx-2 opacity-30">·</span>
                          {entry.location}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        {entry.current && (
                          <Badge variant="solid">Current</Badge>
                        )}
                        <span className="text-xs font-mono text-[var(--muted-foreground)]">
                          {entry.period}
                        </span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="mt-4 space-y-2">
                      {entry.highlights.map((point, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm text-[var(--muted-foreground)] leading-[1.75]"
                        >
                          <span
                            className="mt-[9px] size-1 rounded-full bg-[var(--muted-foreground)] shrink-0 opacity-60"
                            aria-hidden
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Education + Certifications (1/3 width) ─────────── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-1 space-y-10 lg:sticky lg:top-24"
          >
            {/* Education */}
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-2 mb-5">
                <GraduationCap className="size-4 text-[var(--muted-foreground)]" />
                <p className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-widest">
                  Education
                </p>
              </div>
              <div className="space-y-4">
                {EDUCATION.map((edu) => (
                  <div
                    key={edu.degree}
                    className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5"
                  >
                    <p className="text-sm font-medium text-[var(--foreground)] leading-snug">
                      {edu.degree}
                    </p>
                    <p className="text-xs text-[var(--muted-foreground)] mt-1.5">
                      {edu.institution}
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <Badge variant="outline">{edu.period}</Badge>
                      {edu.note && (
                        <span className="text-xs text-[var(--muted-foreground)]">
                          {edu.note}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-2 mb-5">
                <Award className="size-4 text-[var(--muted-foreground)]" />
                <p className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-widest">
                  Certifications
                </p>
              </div>
              <div className="space-y-3">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.title}
                    className="flex flex-col gap-0.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3"
                  >
                    <p className="text-sm font-medium text-[var(--foreground)] leading-snug">
                      {cert.title}
                    </p>
                    <p className="text-xs text-[var(--muted-foreground)]">
                      {cert.issuer}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
