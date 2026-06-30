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
  spotAwardLink?: string;
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
      "Coordinated 150+ monthly assessments and 200+ stakeholder interactions monthly for NY OPWDD programs, ensuring data accuracy, HIPAA compliance and thorough documentation.",
      "Developed custom SQL queries against Genesys Cloud data to track 10+ KPIs - call volumes, scheduling trends, completion rates, etc. to drive operational efficiency.",
      "Built Power BI dashboards to surface team and individual performance metrics, enabling leadership to identify bottlenecks.",
      "Collaborated with cross-functional stakeholders to ensure data integrity, timely outreach, and appropritate assessment resource alignment.",
    ],
    technologies: ["SQL", "Power BI", "Microsoft Excel", "Healthcare Operations", "Stakeholder Management", "HIPAA"],
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
    spotAwardLink: "/images/SpotAward.jpg",
  },
];
