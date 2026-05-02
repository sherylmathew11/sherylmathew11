import type { ComponentType } from "react";
import { HiAcademicCap, HiHeart, HiUsers } from "react-icons/hi2";

type IconComponent = ComponentType<{ className?: string }>;

export type LeadershipItem = {
  title: string;
  icon: IconComponent;
  link?: string;
  linkText?: string;
  suffix?: string;
};

export const leadership: LeadershipItem[] = [
  {
    title:
      "Core Committee Member and Content Writer — IEEE Robotics and Automation Society, VIT Student Chapter",
    icon: HiUsers,
  },
  {
    title: "Impact Day Volunteer — Community Service, Deloitte",
    icon: HiHeart,
  },
  {
    title: "Mentored junior analysts at Deloitte",
    icon: HiAcademicCap,
  },
];
