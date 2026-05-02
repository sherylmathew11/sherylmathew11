import { PiStarFourFill } from "react-icons/pi";

export type SocialLink = {
  label: string;
  href: string;
};

/** Production site URL for metadata / OG; set NEXT_PUBLIC_SITE_URL when you have a custom domain. */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://sherylmathew11.vercel.app";

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/sherylmathew11" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sherylmathew11/" },
  { label: "Email", href: "mailto:sherylmathew1103@gmail.com" },
  { label: "Resume", href: "/Sheryl_Resume.pdf" },
];
