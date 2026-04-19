/**
 * Professional experience data — sourced directly from CV.
 * Entries are in reverse chronological order (most recent first).
 */
export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  highlights: string[];
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: "Senior Software Engineer",
    company: "Skyplan Services Ltd.",
    location: "Dubai, UAE",
    period: "Feb 2022 – Present",
    current: true,
    highlights: [
      "Designed and developed scalable backend systems for flight planning and operational platforms used by airline clients.",
      "Built and maintained RESTful APIs for internal and customer-facing applications, with a focus on reliability and versioning.",
      "Improved route-processing performance by ~20% through query optimisation, caching strategies, and modular refactoring.",
      "Reduced production defects by ~25% by introducing structured validation layers and improved error handling.",
      "Implemented Docker-based deployments and Ansible automation, reducing manual deployment effort by ~40%.",
      "Provisioned and configured Linux-based development and staging servers, including web server and database environments.",
      "Managed the full development lifecycle across dev, test, staging, and production with GitLab CI pipelines.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "DH3 Solutions",
    location: "Sri Lanka",
    period: "Aug 2021 – Jan 2022",
    highlights: [
      "Contributed to migration from monolithic ERP architecture to modular service-based components, reducing maintenance overhead by ~30%.",
      "Improved deployment consistency by standardising CI/CD workflows and containerisation practices.",
      "Mentored junior engineers on maintainable code practices, debugging strategies, and clean architecture.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Elegant Media",
    location: "Sri Lanka",
    period: "Oct 2020 – Oct 2021",
    highlights: [
      "Developed SaaS backend modules using Laravel and Vue.js in iterative Agile delivery cycles.",
      "Reduced regression issues by improving code review discipline and introducing structured testing approaches.",
      "Collaborated closely with product and frontend teams to deliver API-driven features.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Sen Solutions Pvt Ltd",
    location: "Sri Lanka",
    period: "Jan 2019 – Oct 2020",
    highlights: [
      "Built a secure payroll processing system handling sensitive financial data with strong validation and integrity controls.",
      "Developed real-time APIs for enterprise integrations, streamlining internal and client-facing workflows.",
      "Improved deployment repeatability by introducing container-based workflows.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Elogic Lanka Pvt Ltd",
    location: "Sri Lanka",
    period: "Jan 2018 – Jan 2019",
    highlights: [
      "Developed backend administrative platforms and operational reporting tools using Laravel.",
      "Contributed to deployment automation and environment stabilisation initiatives.",
    ],
  },
];

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  note?: string;
}

export const EDUCATION: EducationEntry[] = [
  {
    degree: "BCS Professional Graduate Diploma in IT (Level 6)",
    institution: "BCS, The Chartered Institute for IT",
    period: "Completed",
  },
  {
    degree: "BSc in Computing",
    institution: "Remote, UK",
    period: "Ongoing",
    note: "In progress",
  },
];

export const CERTIFICATIONS = [
  { title: "Python Programming", issuer: "Upskillist" },
  { title: "Neural Networks and Deep Learning", issuer: "DeepLearning.AI" },
  { title: "BCS Higher Education Qualifications (Level 4–6)", issuer: "BCS" },
];
