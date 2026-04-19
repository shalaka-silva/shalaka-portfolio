"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Coffee } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

/* ─── Stat item ─── */
interface StatProps {
  value: string;
  label: string;
}

function Stat({ value, label }: StatProps) {
  return (
    <div className="space-y-1">
      <p className="text-3xl font-semibold tracking-tight text-[var(--foreground)]">
        {value}
      </p>
      <p className="text-xs text-[var(--muted-foreground)] font-mono uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
}

/* ─── Quick-facts pill ─── */
interface FactProps {
  icon: React.ReactNode;
  label: string;
}

function Fact({ icon, label }: FactProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-md",
        "bg-[var(--muted)] text-sm text-[var(--muted-foreground)]"
      )}
    >
      <span className="shrink-0 text-[var(--foreground)]">{icon}</span>
      {label}
    </div>
  );
}

/* ─── Scroll reveal wrapper ─── */
const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

/**
 * About section — bio, quick facts, and career stats.
 * Two-column layout on desktop: narrative on the left, stats on the right.
 *
 * Replace placeholder copy with your actual bio.
 */
export function About() {
  return (
    <section id="about" className="py-28 border-t border-[var(--border)]">
      <Container>
        <SectionHeader
          eyebrow="About"
          heading="Engineering software that matters."
          description="A senior engineer with a deep focus on backend architecture, geospatial systems, and the complex requirements of aviation-grade platforms."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* ── Bio (left, wider column) ─────────────────────── */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-3 space-y-5"
          >
            <p className="text-base text-[var(--muted-foreground)] leading-[1.85]">
              {/* Replace with your actual bio */}
              I&rsquo;m a Senior Software Engineer with extensive experience
              designing and delivering backend systems that power real-world
              operations. My work spans aviation software, geospatial data
              platforms, and enterprise SaaS — areas where reliability,
              precision, and scalability are non-negotiable.
            </p>
            <p className="text-base text-[var(--muted-foreground)] leading-[1.85]">
              I&rsquo;ve led projects from legacy modernisation to greenfield
              API development, consistently applying a systems-thinking approach
              to complex engineering problems. I work primarily in PHP and
              Laravel on the backend, paired with PostgreSQL and PostGIS for
              spatially-aware data modelling, and Docker for infrastructure
              consistency.
            </p>
            <p className="text-base text-[var(--muted-foreground)] leading-[1.85]">
              In the aviation domain, I&rsquo;ve built tooling for ETOPS route
              optimisation, flight planning workflows, and operational data
              pipelines. On the geospatial side, I&rsquo;ve integrated
              OpenLayers, GeoServer, and custom WMS/WFS services into
              production-grade mapping applications used by demanding clients.
            </p>
            <p className="text-base text-[var(--muted-foreground)] leading-[1.85]">
              I care about writing clean, maintainable code, engineering systems
              that survive contact with reality, and continuously raising the
              bar on what &ldquo;done&rdquo; means. Currently exploring applied
              AI and ML in the context of geospatial intelligence and predictive
              systems.
            </p>

            {/* Quick facts */}
            <div className="flex flex-wrap gap-2 pt-4">
              <Fact
                icon={<MapPin className="size-3.5" />}
                label="Based in Dubai, UAE"
              />
              <Fact
                icon={<Calendar className="size-3.5" />}
                label="8+ years experience"
              />
              <Fact
                icon={<Coffee className="size-3.5" />}
                label="Open to remote roles"
              />
            </div>
          </motion.div>

          {/* ── Stats + highlights (right column) ───────────── */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-2 space-y-10"
          >
            {/* Career stats */}
            <div
              className={cn(
                "rounded-xl border border-[var(--border)] bg-[var(--surface)]",
                "p-8 grid grid-cols-2 gap-8"
              )}
            >
              <Stat value="8+" label="Years experience" />
              <Stat value="30+" label="Projects shipped" />
              <Stat value="5+" label="Industries served" />
              <Stat value="15+" label="Technologies" />
            </div>

            {/* Areas of focus */}
            <div className="space-y-3">
              <p className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-widest">
                Areas of focus
              </p>
              {[
                "Backend architecture & REST APIs",
                "Geospatial & mapping systems",
                "Aviation & flight planning software",
                "Legacy modernisation",
                "Scalable SaaS platforms",
                "Applied AI / ML exploration",
              ].map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-3 text-sm text-[var(--foreground)]"
                >
                  <span
                    className="size-1 rounded-full bg-[var(--muted-foreground)] shrink-0"
                    aria-hidden
                  />
                  {area}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
