import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Reusable section header block:
 * - Eyebrow: small monospace label above the heading
 * - Heading: main section title
 * - Description: optional supporting paragraph
 */
export function SectionHeader({
  eyebrow,
  heading,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-14",
        align === "center" && "text-center mx-auto",
        className
      )}
    >
      <p className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-widest mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--foreground)] leading-tight mb-4">
        {heading}
      </h2>
      {description && (
        <p
          className={cn(
            "text-base text-[var(--muted-foreground)] leading-relaxed",
            align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
