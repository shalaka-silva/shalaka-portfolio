/**
 * Core expertise data.
 * icon: a Lucide icon *name* (string) — resolved to the actual component in the section.
 * Replace or extend these entries freely.
 */
export interface ExpertiseItem {
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

export const EXPERTISE: ExpertiseItem[] = [
  {
    icon: "Server",
    title: "Backend Architecture & APIs",
    description:
      "Designing and delivering high-performance REST APIs and service architectures that scale. Experienced with multi-tenant SaaS patterns, rate-limiting, versioning, and API-first design.",
    tags: ["Laravel", "PHP", "Python", "FastAPI", "REST", "OAuth2", "Queue Systems"],
  },
  {
    icon: "Map",
    title: "Geospatial & Mapping Systems",
    description:
      "Building map-based platforms that handle spatial queries, WMS/WFS layers, and real-time geographic visualisations. Deep integration experience with OpenLayers and GeoServer.",
    tags: ["OpenLayers", "GeoServer", "PostGIS", "WMS/WFS", "Spatial SQL"],
  },
  {
    icon: "Plane",
    title: "Aviation & Flight Planning",
    description:
      "Developing software for flight operations — including ETOPS route optimisation, airspace data integration, flight planning workflows, and operational decision support tooling.",
    tags: ["ETOPS", "Airspace Data", "Route Planning", "Aviation APIs"],
  },
  {
    icon: "Database",
    title: "Database Engineering",
    description:
      "Designing normalised relational schemas, optimising complex queries, and building robust data pipelines. Comfortable with spatial extensions, replication, and performance tuning.",
    tags: ["PostgreSQL", "MySQL", "PostGIS", "Query Optimisation", "Indexing"],
  },
  {
    icon: "Workflow",
    title: "Mobile API & Rapid Delivery",
    description:
      "Led a backend team that shipped ~15 production app backends in a single year — each fully Swagger-documented and API-ready for iOS, Android, admin panels, and web. Proven at pace without cutting quality.",
    tags: ["Laravel", "REST API", "Swagger / OpenAPI", "Mobile Backends", "Team Lead"],
  },
  {
    icon: "Layers",
    title: "Legacy Modernisation",
    description:
      "Incrementally migrating legacy codebases to modern standards without disrupting production. Experience leading refactors across PHP monoliths, untested codebases, and tightly-coupled systems.",
    tags: ["Refactoring", "Migration", "PHP", "Testing", "CI/CD"],
  },
  {
    icon: "Cloud",
    title: "Infrastructure & DevOps",
    description:
      "Containerising applications, defining deployment pipelines, and managing Linux server environments. Focused on reproducibility, environment parity, and deployment confidence.",
    tags: ["Docker", "Ansible", "Linux", "GitLab CI", "Nginx"],
  },
];
