"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X, Download, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Prevents hydration mismatch — render a placeholder with same dimensions
    return <span className="size-9 rounded-md" aria-hidden />;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={cn(
        "flex size-9 items-center justify-center rounded-md transition-colors",
        "text-[var(--muted-foreground)] hover:text-[var(--foreground)]",
        "hover:bg-[var(--muted)]"
      )}
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="size-4" />
      ) : (
        <Moon className="size-4" />
      )}
    </button>
  );
}

/**
 * Sticky top navigation bar.
 * – Transparent at top, gains a frosted-glass background on scroll.
 * – Collapses to a hamburger menu on mobile.
 * – Contains theme toggle + resume download CTA.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 16);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu on resize to desktop width
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <Container>
          <nav
            className="flex h-16 items-center justify-between"
            aria-label="Primary navigation"
          >
            {/* Logo / Name */}
            <Link
              href="/"
              className="text-sm font-semibold tracking-tight text-[var(--foreground)] hover:opacity-70 transition-opacity"
              aria-label="Shalaka Deshan — home"
            >
              Shalaka Deshan
            </Link>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      "px-3 py-1.5 text-sm rounded-md transition-colors",
                      "text-[var(--muted-foreground)] hover:text-[var(--foreground)]",
                      "hover:bg-[var(--muted)]"
                    )}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop actions */}
            <div className="hidden md:flex items-center gap-2">
              <ThemeToggle />
              <a
                href="/resume.pdf"
                download
                className={cn(
                  "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                  "bg-[var(--accent)] text-[var(--accent-foreground)]",
                  "hover:opacity-85"
                )}
              >
                <Download className="size-3.5" />
                Resume
              </a>
            </div>

            {/* Mobile: theme toggle + hamburger */}
            <div className="flex md:hidden items-center gap-1">
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className={cn(
                  "flex size-9 items-center justify-center rounded-md transition-colors",
                  "text-[var(--muted-foreground)] hover:text-[var(--foreground)]",
                  "hover:bg-[var(--muted)]"
                )}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
              >
                {mobileOpen ? (
                  <X className="size-4" />
                ) : (
                  <Menu className="size-4" />
                )}
              </button>
            </div>
          </nav>
        </Container>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className={cn(
            "fixed inset-x-0 top-16 z-40 md:hidden",
            "border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-md"
          )}
        >
          <Container>
            <ul className="flex flex-col py-4 gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={closeMobile}
                    className={cn(
                      "block w-full px-3 py-2.5 text-sm rounded-md transition-colors",
                      "text-[var(--muted-foreground)] hover:text-[var(--foreground)]",
                      "hover:bg-[var(--muted)]"
                    )}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 pb-1">
                <a
                  href="/resume.pdf"
                  download
                  onClick={closeMobile}
                  className={cn(
                    "flex items-center gap-2 w-full rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                    "bg-[var(--accent)] text-[var(--accent-foreground)]",
                    "hover:opacity-85"
                  )}
                >
                  <Download className="size-3.5" />
                  Download Resume
                </a>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </>
  );
}
