import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { Projects } from "@/components/sections/Projects";

/**
 * Home page — assembles all portfolio sections.
 */
export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 pt-16">
        <Hero />
        <About />

        <Expertise />
        <Projects />

        {/* ── Experience ─────────────────────────────────────── */}
        <section
          id="experience"
          className="py-24 border-t border-[var(--border)]"
        >
          <Container>
            <p className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-widest mb-3">
              Experience
            </p>
            <div className="h-48 rounded-lg bg-[var(--muted)] flex items-center justify-center">
              <span className="text-sm text-[var(--muted-foreground)]">
                Experience timeline
              </span>
            </div>
          </Container>
        </section>

        {/* ── Tech Stack ─────────────────────────────────────── */}
        <section
          id="stack"
          className="py-24 border-t border-[var(--border)]"
        >
          <Container>
            <p className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-widest mb-3">
              Tech Stack
            </p>
            <div className="h-48 rounded-lg bg-[var(--muted)] flex items-center justify-center">
              <span className="text-sm text-[var(--muted-foreground)]">
                Tech stack section
              </span>
            </div>
          </Container>
        </section>

        {/* ── Contact ────────────────────────────────────────── */}
        <section
          id="contact"
          className="py-24 border-t border-[var(--border)]"
        >
          <Container>
            <p className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-widest mb-3">
              Contact
            </p>
            <div className="h-48 rounded-lg bg-[var(--muted)] flex items-center justify-center">
              <span className="text-sm text-[var(--muted-foreground)]">
                Contact / CTA
              </span>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}