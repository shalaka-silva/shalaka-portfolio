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
    default: "Shalaka Deshan — Senior Software Engineer",
    template: "%s | Shalaka Deshan",
  },
  description:
    "Senior Software Engineer specialising in backend systems, geospatial platforms, and aviation software. Expert in Laravel, PHP, Python, PostgreSQL, and scalable API architecture.",
  keywords: [
    "Senior Software Engineer",
    "Backend Engineer",
    "Laravel",
    "PHP",
    "Python",
    "FastAPI",
    "Data Engineering",
    "PostgreSQL",
    "GIS",
    "Geospatial",
    "Aviation Software",
    "REST API",
    "Docker",
    "Ansible",
    "Kubernetes",
    "AWS",
    "CI/CD",
    "Microservices",
    "Distributed Systems",
    "Linux",
    "OpenLayers",
    "Leaflet",
    "Kepler.gl",
    "GeoServer",
    "ETOPS",
  ],
  authors: [{ name: "Shalaka Deshan" }],
  creator: "Shalaka Deshan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shalakasilva.dev",
    title: "Shalaka Deshan — Senior Software Engineer",
    description:
      "Senior Software Engineer specialising in backend systems, geospatial platforms, and aviation software.",
    siteName: "Shalaka Deshan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shalaka Deshan — Senior Software Engineer",
    description:
      "Senior Software Engineer specialising in backend systems, geospatial platforms, and aviation software.",
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