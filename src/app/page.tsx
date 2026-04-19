import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { TechStack } from "@/components/sections/TechStack";
import { Contact } from "@/components/sections/Contact";

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

        <Contact />
      </main>

      <Footer />
    </>
  );
}