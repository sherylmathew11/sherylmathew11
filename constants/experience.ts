export type ExperienceItem = {
  company: string;
  role: string;
  previousRole?: string;
  duration: string;
  location: string;
  type: "full-time" | "intern";
  impact: string;
  achievements: string[];
  technologies: string[];
  color: "green" | "orange" | "purple";
};

export const experiences: ExperienceItem[] = [
  {
    company: "Maximus",
    role: "Operations Support Coordinator",
    duration: "Sept 2025 – Present",
    location: "New York (Remote), United States",
    type: "full-time",
    impact: "Ensured accurate, compliant healthcare data operations",
    achievements: [
      "Validated healthcare data supporting 30–40 weekly assessments and 200+ monthly interactions for NY OPWDD programs, ensuring accuracy, confidentiality, and HIPAA compliance",
      "Translated operational workflows into accurate scheduling, documentation, and tracking to support timely assessments",
      "Collaborated with care coordinators and administrative stakeholders to align data with service delivery needs",
      "Cleaned and managed operational data in Microsoft Excel to support standardized reporting and efficiency",
      "Coordinated consumer-centric scheduling by aligning individual needs with appropriate assessment resources",
    ],
    technologies: ["Microsoft Excel", "Microsoft Outlook", "Healthcare Operations", "Data Management", "HIPAA"],
    color: "purple",
  },
  {
    company: "Deloitte",
    role: "Data Analyst",
    duration: "Aug 2023 – Feb 2025",
    location: "Hyderabad, India",
    type: "full-time",
    impact: "Received a Spot Award and multiple shoutouts for high quality work",
    achievements: [
      "Led exploratory data analysis on large financial audit datasets for 20+ global clients, identifying patterns and supporting fraud detection and audit completeness",
      "Engineered and automated 35+ analytical workflows by migrating legacy SAS processes to Python and SQL in Azure Databricks, improving efficiency by 20% and saving 1000+ hours annually",
      "Designed and developed 10+ interactive Tableau and Power BI dashboards after preprocessing data in PySpark to reveal audit trends, risks, and financial patterns",
      "Communicated actionable insights to both technical and non-technical stakeholders and mentored junior analysts; recognized with a Spot Award for high-quality analysis and adaptability",
    ],
    technologies: ["Azure Databricks", "PySpark", "Python", "SQL", "SAS", "Power BI", "Tableau", "MS Excel"],
    color: "green",
  },
];
