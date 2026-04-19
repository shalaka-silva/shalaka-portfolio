import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

/* ─── Fonts ─── */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

/* ─── SEO Metadata ─── */
export const metadata: Metadata = {
  title: {
    default: "Shalaka Deshan Silva — Senior Software Engineer",
    template: "%s | Shalaka Deshan Silva",
  },
  description:
    "Senior Software Engineer with 8+ years of experience in backend systems, geospatial platforms, and aviation software. Expert in Laravel, PHP, Python, PostgreSQL, Docker, and scalable API architecture. Based in Dubai, UAE.",
  keywords: [
    "Senior Software Engineer",
    "Backend Engineer",
    "Laravel",
    "PHP",
    "Python",
    "PostgreSQL",
    "PostGIS",
    "GIS",
    "Geospatial",
    "Aviation Software",
    "Flight Planning",
    "ETOPS",
    "REST API",
    "Docker",
    "Ansible",
    "AWS",
    "CI/CD",
    "Microservices",
    "Linux",
    "OpenLayers",
    "GeoServer",
    "Skyplan",
    "Dubai",
  ],
  authors: [{ name: "Shalaka Deshan Silva" }],
  creator: "Shalaka Deshan Silva",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shalakasilva.dev",
    title: "Shalaka Deshan Silva — Senior Software Engineer",
    description:
      "Senior Software Engineer specialising in backend systems, geospatial platforms, and aviation software. Based in Dubai, UAE.",
    siteName: "Shalaka Deshan Silva",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shalaka Deshan Silva — Senior Software Engineer",
    description:
      "Senior Software Engineer specialising in backend systems, geospatial platforms, and aviation software. Based in Dubai, UAE.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9f9f8" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0c0c" },
  ],
};

/* ─── Root Layout ─── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}