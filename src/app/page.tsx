import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { TechStack } from "@/components/sections/TechStack";

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

        <Experience />
        <TechStack />

        {/* ── Contact — placeholder, replaced in Milestone 5 ── */}
        <section
          id="contact"
          className="py-24 border-t border-[var(--border)]"
        >
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
            <div className="h-48 rounded-lg bg-[var(--muted)] flex items-center justify-center">
              <span className="text-sm text-[var(--muted-foreground)]">
                Contact / CTA
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}