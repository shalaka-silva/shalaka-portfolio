import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";

/**
 * Home page — assembles all portfolio sections.
 * Each section is a `<section>` with a stable `id` for anchor navigation.
 * Replace each placeholder div with the real section component as milestones progress.
 */
export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 pt-16">
        {/* ── Hero ───────────────────────────────────────────── */}
        <section id="hero" className="min-h-[90vh] flex items-center">
          <Container>
            <div className="py-24 text-center md:text-left">
              <p className="text-sm font-mono text-[var(--muted-foreground)] mb-4 tracking-widest uppercase">
                Senior Software Engineer
              </p>
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[var(--foreground)] leading-none mb-6">
                Shalaka
                <br />
                <span className="text-[var(--muted-foreground)]">Deshan</span>
              </h1>
              <p className="max-w-xl text-lg text-[var(--muted-foreground)] leading-relaxed mb-10">
                Building scalable backend systems, geospatial platforms, and
                aviation-grade software. Specialised in Laravel, PostgreSQL, and
                engineering systems that operate at real-world scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium bg-[var(--accent)] text-[var(--accent-foreground)] hover:opacity-85 transition-opacity"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* ── About ──────────────────────────────────────────── */}
        <section id="about" className="py-24 border-t border-[var(--border)]">
          <Container>
            <p className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-widest mb-3">
              About
            </p>
            <div className="h-48 rounded-lg bg-[var(--muted)] flex items-center justify-center">
              <span className="text-sm text-[var(--muted-foreground)]">
                About section
              </span>
            </div>
          </Container>
        </section>

        {/* ── Expertise ──────────────────────────────────────── */}
        <section
          id="expertise"
          className="py-24 border-t border-[var(--border)]"
        >
          <Container>
            <p className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-widest mb-3">
              Core Expertise
            </p>
            <div className="h-48 rounded-lg bg-[var(--muted)] flex items-center justify-center">
              <span className="text-sm text-[var(--muted-foreground)]">
                Expertise section
              </span>
            </div>
          </Container>
        </section>

        {/* ── Projects ───────────────────────────────────────── */}
        <section
          id="projects"
          className="py-24 border-t border-[var(--border)]"
        >
          <Container>
            <p className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-widest mb-3">
              Featured Projects
            </p>
            <div className="h-48 rounded-lg bg-[var(--muted)] flex items-center justify-center">
              <span className="text-sm text-[var(--muted-foreground)]">
                Projects section
              </span>
            </div>
          </Container>
        </section>

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