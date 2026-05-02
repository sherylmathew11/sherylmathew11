import type { ComponentType } from "react";
import { SiDatabricks, SiGithub, SiGit, SiOpenai, SiPython } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import {
  HiChartBar,
  HiCloud,
  HiCodeBracket,
  HiCog6Tooth,
  HiCommandLine,
  HiUserGroup,
} from "react-icons/hi2";

type IconComponent = ComponentType<{ className?: string }>;

export type SkillCategory = {
  title: string;
  icon: IconComponent;
  color: string;
  bgColor: string;
  borderColor: string;
  skills: { name: string; icon?: IconComponent; featured?: boolean }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Data",
    icon: HiChartBar,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    skills: [
      { name: "PySpark", icon: SiPython, featured: true },
      { name: "Databricks", icon: SiDatabricks, featured: true },
      { name: "Tableau", icon: HiChartBar, featured: true },
      { name: "Power BI", icon: HiChartBar, featured: true},
      { name: "MS Excel", icon: HiChartBar, featured: true },
      { name: "AWS", icon: FaAws },
      { name: "Pandas", icon: SiPython },
      { name: "NumPy" },
      { name: "Matplotlib" },
    ],
  }, 
  {
    title: "Languages",
    icon: HiCodeBracket,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    skills: [
      { name: "Python", icon: SiPython, featured: true },
      { name: "SQL", featured: true },
    ],
  },
  { 
    title: "Tools",
    icon: HiCog6Tooth,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    skills: [
      { name: "Open AI", icon: SiOpenai },
      { name: "GitHub", icon: SiGithub },
      { name: "Git", icon: SiGit },
      { name: "VS Code", icon: HiCommandLine },
      { name: "Genesys Cloud", icon: HiCloud },
      { name: "Microsoft Office Suite" },
    ],
  }, 
  {
    title: "Soft Skills",
    icon: HiUserGroup,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/20",
    skills: [
      { name: "Written and Verbal Communication" },
      { name: "Problem-Solving" },
      { name: "Time Management" },
      { name: "Presentation" },
      { name: "Analytical Skills" },
    ],
  },
];
