import { Fraunces, Inter, Outfit } from "next/font/google";

export const fontSans = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const fontHeading = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const fontDisplay = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});
