import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/sections/Navbar/Navbar";
import Footer from "@/sections/Footer/Footer";
import BackToTop from "@/sections/BackToTop/BackToTop";
import { siteUrl } from "@/constants/socialLinks";
import { fontDisplay, fontHeading, fontSans } from "@/lib/fonts";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sheryl Mathew | Portfolio",
    template: "%s | Sheryl Mathew",
  },
  description:
    "Sheryl Mathew — Data Analyst with experience in audit analytics, dashboards (Tableau, Power BI), Python, SQL, PySpark, and Azure Databricks.",
  applicationName: "Sheryl Mathew Portfolio",
  authors: [{ name: "Sheryl Mathew", url: siteUrl }],
  creator: "Sheryl Mathew",
  keywords: [
    "Sheryl Mathew",
    "portfolio",
    "data analyst",
    "analytics",
    "Python",
    "SQL",
    "PySpark",
    "Azure Databricks",
    "Databricks",
    "Tableau",
    "Power BI",
    "AWS",
    "healthcare data",
    "business intelligence",
    "Deloitte",
    "financial audit analytics",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Sheryl Mathew | Portfolio",
    description:
      "Portfolio of Sheryl Mathew — data analytics, dashboards, and engineering projects across audit analytics and healthcare operations.",
    type: "website",
    siteName: "Sheryl Mathew Portfolio",
    images: [
      {
        url: "/images/ProfileImage.jpg",
        width: 1200,
        height: 630,
        alt: "Sheryl Mathew",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sheryl Mathew | Portfolio",
    description:
      "Portfolio of Sheryl Mathew — data analytics, dashboards, and engineering projects.",
    images: ["/images/ProfileImage.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${fontSans.variable} ${fontHeading.variable} ${fontDisplay.variable}`}
    >
      <body className={`${fontSans.className} antialiased`}>
        <div className="relative flex min-h-screen flex-col bg-background text-foreground">
          <div
            className="pointer-events-none fixed inset-0 -z-10 page-grid-bg opacity-[0.65] dark:opacity-40"
            aria-hidden
          />
          <Navbar />
          <main className="relative flex-1">{children}</main>
          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
