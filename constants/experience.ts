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
    impact: "Ensured accurate, compliant healthcare data operations using SQL and Power BI.",
    achievements: [
      "Engineered SQL queries to clean & integrate high-volume OPWDD datasets, improving core data accuracy by 25%.",
      "Built custom Power BI dashboards to synthesize statewide trends, automating reporting workflows and cutting processing time by 40%.",
      "Analyzed utilization patterns to optimize resource allocation and service delivery frameworks for over 130k recipients.",
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
    impact: "Received a Spot Award and multiple shoutouts for high quality work.",
    achievements: [
      "Led exploratory data analysis on large financial datasets for 20+ global clients, identifying patterns and supporting fraud detection and audit completeness",
      "Engineered and automated 35+ analytical workflows by migrating legacy SAS processes to Python and SQL in Azure Databricks, improving efficiency by 20% and saving 1000+ hours annually",
      "Designed and developed 10+ interactive Tableau and Power BI dashboards after preprocessing data in PySpark to reveal audit trends, risks, and financial patterns",
      "Developed an AI-powered RAG solution for sentiment analysis in ESG reports, reducing manual analysis time by 70%.",
      "Communicated actionable insights to both technical and non-technical stakeholders and mentored junior analysts; recognized with a Spot Award for high-quality analysis and adaptability",
    ],
    technologies: ["Azure Databricks", "PySpark", "Python", "SQL", "SAS", "Power BI", "Tableau", "GenAI" ],
    color: "green",
    spotAwardLink: "/images/SpotAward.jpg",
  },
];
