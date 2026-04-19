"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

/* ─── Animation variants ─── */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

/**
 * Hero section — the first thing a recruiter sees.
 * Full-viewport height, left-aligned on desktop, centred on mobile.
 * Framer Motion stagger brings each element in sequentially.
 *
 * Replace placeholder text with real content here.
 */
export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center overflow-hidden"
    >
      {/* Subtle background grid — decorative, purely visual */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="py-24 md:py-32 max-w-3xl"
        >
          {/* Availability badge */}
          <motion.div variants={fadeIn} className="mb-8">
            <span
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-3 py-1",
                "border border-[var(--border)] bg-[var(--surface)]",
                "text-xs text-[var(--muted-foreground)] font-mono"
              )}
            >
              <span
                className="size-1.5 rounded-full bg-emerald-500"
                aria-hidden
              />
              Open to new opportunities
            </span>
          </motion.div>

          {/* Role label */}
          <motion.p
            variants={fadeUp}
            className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-[0.2em] mb-5"
          >
            Senior Software Engineer
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="text-[clamp(3rem,8vw,6rem)] font-semibold tracking-tight leading-[0.95] text-[var(--foreground)] mb-8"
          >
            Shalaka
            <br />
            <span className="text-[var(--muted-foreground)]">Deshan</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed max-w-xl mb-3"
          >
            I build scalable backend systems, geospatial platforms, and
            aviation-grade software.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-base text-[var(--muted-foreground)] leading-relaxed max-w-xl mb-12 opacity-75"
          >
            Specialised in Laravel, PHP, PostgreSQL, REST APIs, and engineering
            systems that operate at real-world scale — from ETOPS route
            optimisation to enterprise SaaS.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#projects"
              className={cn(
                "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-opacity",
                "bg-[var(--accent)] text-[var(--accent-foreground)] hover:opacity-85"
              )}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className={cn(
                "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-colors",
                "border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--muted)]"
              )}
            >
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              download
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-medium transition-colors",
                "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]"
              )}
            >
              <Download className="size-3.5" />
              Resume
            </a>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="size-4 text-[var(--muted-foreground)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
