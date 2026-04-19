"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof NextThemesProvider>;

/**
 * Wraps next-themes ThemeProvider so it can be used inside the server-rendered
 * root layout. The "class" attribute strategy adds `.dark` to <html>, which
 * our CSS custom-variant picks up.
 */
export function ThemeProvider({ children, ...props }: Props) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
