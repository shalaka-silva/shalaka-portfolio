import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  /**
   * "default"  — subtle muted bg, muted text (tech stack tags)
   * "outline"  — transparent bg, border only
   * "solid"    — accent bg, accent-foreground text (category labels)
   */
  variant?: "default" | "outline" | "solid";
  className?: string;
}

/**
 * Small label / tag used for tech stack chips, category labels, etc.
 */
export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded px-2 py-0.5 text-xs font-mono font-medium leading-none",
        variant === "default" && [
          "bg-[var(--muted)] text-[var(--muted-foreground)]",
        ],
        variant === "outline" && [
          "border border-[var(--border)] text-[var(--muted-foreground)]",
        ],
        variant === "solid" && [
          "bg-[var(--accent)] text-[var(--accent-foreground)]",
        ],
        className
      )}
    >
      {children}
    </span>
  );
}
