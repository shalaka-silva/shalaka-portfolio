/**
 * Featured project data.
 */
export interface Project {
  title: string;
  tagline: string;
  description: string;
  category: string;
  tags: string[];
  featured?: boolean;
  links: {
    github?: string;
    live?: string;
  };
}

export const PROJECTS: Project[] = [
  {
    title: "ETOPS Route Optimisation Engine",
    tagline: "Aviation · Backend Systems",
    description:
      "A backend engine that calculates and validates ETOPS-compliant flight routes against airspace constraints, diversion airport availability windows, and regulatory rule sets. Processes large aeronautical datasets to surface operationally valid route options in real time.",
    category: "Aviation",
    tags: ["PHP", "Laravel", "PostgreSQL", "PostGIS", "REST API", "Aviation Data"],
    featured: true,
    links: {
      github: "https://github.com/shalakasilva",
    },
  },
  {
    title: "Geospatial Fleet Tracking Platform",
    tagline: "GIS · Real-time Systems",
    description:
      "An interactive mapping platform for tracking fleet assets in real time. Integrates OpenLayers for map rendering, GeoServer for WMS/WFS layer delivery, and a Laravel backend that ingests and stores position telemetry via a high-throughput API.",
    category: "Geospatial",
    tags: ["OpenLayers", "GeoServer", "Laravel", "PostGIS", "WebSockets"],
    featured: false,
    links: {
      github: "https://github.com/shalakasilva",
    },
  },
  {
    title: "Enterprise Flight Planning SaaS",
    tagline: "SaaS · API Platform",
    description:
      "A multi-tenant SaaS platform enabling airline operators to create, validate, and file flight plans. Includes a role-based permission system, PDF report generation, and integration with third-party aeronautical data providers.",
    category: "SaaS",
    tags: ["Laravel", "MySQL", "Multi-tenant", "PDF", "OAuth2", "ARINC 424", "Barons API", "FlightAware API", "RAIM Integration"],
    featured: false,
    links: {
      github: "https://github.com/shalakasilva",
    },
  },
  {
    title: "Aeronautical Chart Viewer",
    tagline: "GIS · Aviation",
    description:
      "A browser-based viewer for layering and inspecting aeronautical charts, NOTAMs, and airspace boundaries over a base map. Built with OpenLayers and a GeoServer backend serving pre-processed aeronautical feature layers.",
    category: "Aviation / GIS",
    tags: ["OpenLayers", "GeoServer", "WMS", "JavaScript", "PHP", "Aviationweather data", "METOffice API"],
    featured: false,
    links: {
      github: "https://github.com/shalakasilva",
    },
  },
];
