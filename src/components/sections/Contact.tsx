"use client";

import { motion } from "framer-motion";
import { Download, ArrowUpRight, Mail } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

/* ─── Inline SVG brand icons ─── */
function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("fill-current", className)}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("fill-current", className)}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ─── Animation ─── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const fadeUp = {
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

/* ─── Contact link card ─── */
interface ContactCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

function ContactCard({
  icon,
  label,
  value,
  href,
  external = true,
}: ContactCardProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "group flex items-center justify-between gap-4 rounded-xl p-5",
        "border border-[var(--border)] bg-[var(--surface)]",
        "transition-all duration-200",
        "hover:border-[var(--muted-foreground)]/40 hover:bg-[var(--muted)]/30"
      )}
    >
      <div className="flex items-center gap-4">
        <div
          className={cn(
            "flex size-10 items-center justify-center rounded-lg shrink-0",
            "bg-[var(--muted)] text-[var(--foreground)]",
            "transition-colors group-hover:bg-[var(--foreground)] group-hover:text-[var(--background)]"
          )}
        >
          {icon}
        </div>
        <div>
          <p className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-wider mb-0.5">
            {label}
          </p>
          <p className="text-sm font-medium text-[var(--foreground)]">
            {value}
          </p>
        </div>
      </div>
      <ArrowUpRight
        className={cn(
          "size-4 text-[var(--muted-foreground)] shrink-0",
          "transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        )}
        aria-hidden
      />
    </a>
  );
}

/**
 * Contact / CTA section — the closing section of the portfolio.
 * No form: clean direct links to email, LinkedIn, and GitHub,
 * plus a prominent resume download.
 */
export function Contact() {
  return (
    <section id="contact" className="py-28 border-t border-[var(--border)]">
      <Container size="narrow">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-12"
        >
          {/* ── Headline block ────────────────────────────────── */}
          <div className="space-y-5">
            <motion.p
              variants={fadeUp}
              className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-widest"
            >
              Contact
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-semibold tracking-tight text-[var(--foreground)] leading-tight"
            >
              Let&rsquo;s build something
              <br />
              <span className="text-[var(--muted-foreground)]">
                worth shipping.
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-base text-[var(--muted-foreground)] leading-relaxed max-w-lg"
            >
              I&rsquo;m open to senior backend and software engineering roles
              across aviation, GIS, HRM, e-commerce, real-time systems, and
              enterprise SaaS. Looking to relocate to Europe, the UK, USA,
              Canada, or Australia. Feel free to reach out directly.
            </motion.p>

            {/* Availability badge */}
            <motion.div variants={fadeUp}>
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
                Open to relocation — EU · UK · USA · Canada · Australia
              </span>
            </motion.div>
          </div>

          {/* ── Contact cards ─────────────────────────────────── */}
          <motion.div variants={fadeUp} className="space-y-3">
            <ContactCard
              icon={<Mail className="size-4" />}
              label="Email"
              value="shalaka.xsilva@gmail.com"
              href="mailto:shalaka.xsilva@gmail.com"
              external={false}
            />
            <ContactCard
              icon={<LinkedInIcon className="size-4" />}
              label="LinkedIn"
              value="linkedin.com/in/shalaka-deshan"
              href="https://www.linkedin.com/in/shalaka-deshan/"
            />
            <ContactCard
              icon={<GitHubIcon className="size-4" />}
              label="GitHub"
              value="github.com/shalaka-silva"
              href="https://github.com/shalaka-silva"
            />
          </motion.div>

          {/* ── Resume CTA ────────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            className={cn(
              "flex flex-col sm:flex-row items-start sm:items-center",
              "justify-between gap-5 rounded-xl p-6",
              "border border-[var(--border)] bg-[var(--muted)]/40"
            )}
          >
            <div className="space-y-1">
              <p className="text-sm font-semibold text-[var(--foreground)]">
                Download my resume
              </p>
              <p className="text-xs text-[var(--muted-foreground)]">
                Full CV with experience, skills, and education
              </p>
            </div>
            <a
              href="/resume.pdf"
              download="Shalaka_Deshan_Silva_CV.pdf"
              className={cn(
                "inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium shrink-0",
                "bg-[var(--accent)] text-[var(--accent-foreground)]",
                "transition-opacity hover:opacity-85"
              )}
            >
              <Download className="size-4" />
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
