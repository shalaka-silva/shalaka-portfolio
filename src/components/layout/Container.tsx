import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * "default" → max-w-6xl  (page sections)
   * "narrow"  → max-w-3xl  (reading-width prose)
   * "wide"    → max-w-7xl  (full-bleed layouts)
   */
  size?: "narrow" | "default" | "wide";
}

/**
 * Responsive max-width wrapper used by every section.
 * Provides consistent horizontal padding at all breakpoints.
 */
export function Container({
  size = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-10",
        {
          "max-w-3xl": size === "narrow",
          "max-w-6xl": size === "default",
          "max-w-7xl": size === "wide",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
