/**
 * Tech stack data grouped by category.
 * Each item has a name and an optional proficiency level for future use.
 */
export interface TechItem {
  name: string;
  note?: string; // optional context shown on hover or as subtext
}

export interface TechGroup {
  category: string;
  items: TechItem[];
}

export const TECH_STACK: TechGroup[] = [
  {
    category: "Languages",
    items: [
      { name: "PHP" },
      { name: "Python" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "SQL" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "Laravel", note: "Primary backend framework" },
      { name: "Angular" },
      { name: "Vue.js" },
      { name: "React" },
      { name: "OpenLayers", note: "Geospatial mapping" },
      { name: "FastAPI" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", note: "Primary DB" },
      { name: "PostGIS", note: "Spatial extension" },
      { name: "MySQL" },
      { name: "MariaDB" },
    ],
  },
  {
    category: "DevOps & Infrastructure",
    items: [
      { name: "Docker" },
      { name: "docker-compose" },
      { name: "Ansible" },
      { name: "GitLab CI" },
      { name: "AWS" },
      { name: "Nginx" },
      { name: "Linux", note: "Debian / CentOS" },
    ],
  },
  {
    category: "Geospatial & Specialist",
    items: [
      { name: "GeoServer", note: "WMS / WFS" },
      { name: "PostGIS" },
      { name: "Spatial SQL" },
      { name: "Aviation Data APIs" },
      { name: "ETOPS Planning" },
    ],
  },
  {
    category: "Practices & Tools",
    items: [
      { name: "REST API Design" },
      { name: "Microservices" },
      { name: "OOP / SOLID" },
      { name: "Git" },
      { name: "Jira" },
      { name: "Code Review" },
      { name: "Agile / Scrum" },
    ],
  },
];
