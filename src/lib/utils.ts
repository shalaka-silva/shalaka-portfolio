import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS class names safely, resolving conflicts.
 * Usage: cn("px-4", condition && "py-2", "text-sm")
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
